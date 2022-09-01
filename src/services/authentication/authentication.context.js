import React from "react";
import {
  createEmailRequest,
  loginEmailRequest,
} from "./authentication.service";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import { createContext } from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { LOGIN } from "../../../graphql/queries";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [firebaseIdToken, setFirebaseIdToken] = useState("");
  const [idToken, setIdToken] = useState("");

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

  const logout = async () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    try {
      const authToken = await loginEmailRequest(email, password);
      setIdToken(authToken);
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
        logout,
        login,
        createFirebaseAccount,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
