import React from "react";
import {
  createEmailRequest,
  loginEmailRequest,
} from "./authentication.service";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import { createContext } from "react";
import { useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_ME, LOGIN } from "../../../graphql/queries";
import { useEffect } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  // holding all the states
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [gotUser, setGotUser] = useState(false);
  const [error, setError] = useState(null);
  const [firebaseIdToken, setFirebaseIdToken] = useState("");
  const [userToken, setUserToken] = useState("");

  // lazy query for getting the user
  const [getMe, { data, loading: getMeLoading, error: getMeError }] =
    useLazyQuery(GET_ME);

  // if the userToken changes, then set the user
  useEffect(() => {
    if (userToken) {
      getMe();
    }
  }, [userToken]);

  // app auth state change listener
  const app = getApp();
  const auth = getAuth(app);
  onAuthStateChanged(auth, (existingUser) => {
    if (existingUser) {
      setUser(existingUser);
    } else {
      setUser(null);
    }
  });

  // TODO: make sure this works
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      await loginEmailRequest(email, password);
      const authToken = await auth.currentUser.getIdToken();
      setFirebaseIdToken(authToken);
      const { data, error } = useQuery(LOGIN, {
        variables: {
          firebaseId: authToken,
        },
      });
      if (error) {
        throw new Error(error);
      }
      data && data.login && setUser(data.login);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  // this is DONE
  const logout = async () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  // this is DONE
  const createFirebaseAccount = async (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError({ message: "Passwords do not match" });
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await createEmailRequest(email, password);
      const firebaseToken = await getAuth().currentUser.getIdToken();
      console.log("firebaseToken", firebaseToken);
      setFirebaseIdToken(firebaseToken);
      setUser({ hasUsername: false });
    } catch (error) {
      setError(error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
        error,
        userToken,
        firebaseIdToken,
        setUserToken,
        logout,
        login,
        createFirebaseAccount,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
