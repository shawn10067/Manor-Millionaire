import React from "react";
import {
  createEmailRequest,
  loginEmailRequest,
} from "./authentication.service";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import { createContext } from "react";
import { useState } from "react";
import {
  useApolloClient,
  useLazyQuery,
  useMutation,
  useQuery,
} from "@apollo/client";
import { GET_ME, LOGIN, USER_EXISTS } from "../../../graphql/queries";
import { useEffect } from "react";
import { CREATE_ACCOUNT } from "../../../graphql/mutations";
import { createErrorObject } from "../../utils/errorHandlers";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({
  children,
  userToken,
  setUserToken,
}) => {
  // holding all the states
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [firebaseIdToken, setFirebaseIdToken] = useState(null);
  const [error, setError] = useState(null);
  const [gotUser, setGotUser] = useState(false);
  const [userExists, setUserExists] = useState(false);

  // queries
  const [
    createAccountMutation,
    { createData, loading: createLoading, error: createAccountError },
  ] = useMutation(CREATE_ACCOUNT, {
    onCompleted: (completeData) => {
      console.log("got creation data", completeData);
    },
  });
  const [
    checkIfUserExists,
    { data: checkData, loading: checkLoading, error: checkError },
  ] = useLazyQuery(USER_EXISTS, {
    onCompleted: (completeData) => {
      console.log("got existance data", completeData);
    },
  });

  if (createLoading || checkLoading) {
    setIsLoading(true);
  }

  // error use effects --------
  useEffect(() => {
    if (createAccountError) {
      ("setting error because error occured");
      setError(createErrorObject(createAccountError));
    }
  }, [createAccountError]);
  useEffect(() => {
    if (checkError) {
      ("setting error because error occured");
      setError(createErrorObject(checkError));
    }
  }, [checkError]);
  // end of effects --------

  // if we got the status of the user
  useEffect(() => {
    if (checkData && !gotUser) {
      console.log("data to check for existing user", checkData);
      setGotUser(true);
      //navigation.navigate("Home");
    }
  }, [checkData, gotUser]);

  // if we successfully created an account
  useEffect(() => {
    if (createData && !gotUser) {
      console.log("user creation data recieved", createData);
      if (!userToken) {
        console.log("setting user token");
        setUserToken(createData.signUp);
      }
      checkIfUserExists({
        variables: {
          firebaseId: firebaseIdToken,
        },
      });
    }
  }, [createData, gotUser]);

  // // lazy query for getting the user
  // const [getMe, { data: meData, loading: getMeLoading, error: getMeError }] =
  //   useLazyQuery(GET_ME);

  // // if the userToken changes, then set the user
  // useEffect(() => {
  //   if (userToken) {
  //     getMe();
  //   }
  // }, [userToken]);

  // when the user changes auth state, or opens app, we get the *firebase id token*
  const app = getApp();
  const auth = getAuth(app);
  onAuthStateChanged(auth, (existingUser) => {
    if (existingUser) {
      // console.log("EXISTING USER", existingUser);
      setUser(existingUser);
      existingUser.getIdToken().then((token) => {
        if (token) {
          setFirebaseIdToken(token);
        }
      });
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
      const { loginData, error } = useQuery(LOGIN, {
        variables: {
          firebaseId: authToken,
        },
      });
      if (error) {
        throw new Error(error);
      }
      loginData && loginData.login && setUser(loginData.login);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  // getting the apollo client and logging out
  const client = useApolloClient();
  const logout = async () => {
    client.clearStore();
    signOut(auth).then(() => {
      console.log("signed out");
      setUser(null);
      setUserToken(null);
      setFirebaseIdToken(null);
    });
  };

  // firebase create account method
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
        userToken,
        firebaseIdToken,
        setUserToken,
        logout,
        login,
        createFirebaseAccount,
        createAccountMutation,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
