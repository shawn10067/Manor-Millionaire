import React from "react";
import {
  createEmailRequest,
  loginEmailRequest,
} from "./authentication.service";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import { createContext } from "react";
import { useState } from "react";
import { useApolloClient, useLazyQuery, useMutation } from "@apollo/client";
import { LOGIN, USER_EXISTS } from "../../../graphql/queries";
import { useEffect } from "react";
import { CREATE_ACCOUNT } from "../../../graphql/mutations";
import { createErrorObject } from "../../utils/errorHandlers";
import { GET_ME } from "../../../graphql/personal";

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
  const [userExists, setUserExists] = useState(false);
  const [userStateSettled, setUserStateSettled] = useState(false);

  // queries
  const [
    createAccountMutation,
    { data: createData, loading: createLoading, error: createAccountError },
  ] = useMutation(CREATE_ACCOUNT);
  const [
    checkIfUserExists,
    { data: checkData, loading: checkLoading, error: checkError },
  ] = useLazyQuery(USER_EXISTS);
  const [
    userLogin,
    { data: loginData, loading: loginLoading, error: loginError },
  ] = useLazyQuery(LOGIN);
  const [getMe, { data: meData, loading: meLoading, error: meError }] =
    useLazyQuery(GET_ME);

  if (
    (createLoading || checkLoading || loginLoading || meLoading) &&
    !loading
  ) {
    setIsLoading(true);
  } else {
    if (
      loading &&
      !createLoading &&
      !checkLoading &&
      !loginLoading &&
      !meLoading
    ) {
      setIsLoading(false);
    }
  }

  // console.log("me data is ", meError);

  // error use effects --------
  useEffect(() => {
    if (createAccountError) {
      setError(createErrorObject(createAccountError));
    }
  }, [createAccountError]);
  useEffect(() => {
    if (checkError) {
      setError(createErrorObject(checkError));
    }
  }, [checkError]);
  useEffect(() => {
    if (loginError) {
      setError(createErrorObject(loginError));
    }
  }, [checkError]);
  useEffect(() => {
    if (meError) {
      setError(createErrorObject(meError));
    }
  }, [meError]);
  // end of effects --------

  // data use effects --------

  // if we have the user date, we set the user state
  useEffect(() => {
    if (meData) {
      setUser(meData.getMe);
      setTimeout(() => {
        setUserStateSettled(true);
      }, 250);
    }
  }, [meData]);

  // if we have a user token, run the get me query
  useEffect(() => {
    if (userToken) {
      getMe();
    }
  }, [userToken]);

  // if we get the login data, we set the user and the user token
  useEffect(() => {
    if (loginData) {
      const { login } = loginData;
      setUserToken(login);
    }
  }, [loginData]);

  // if the userExists method is done, then we can login with the firebaseIdToken
  useEffect(() => {
    if (userExists) {
      userLogin({
        variables: {
          firebaseId: firebaseIdToken,
        },
      });
    }
  }, [userExists]);

  // if firebaseId token changes, call the checkIfUserExists
  useEffect(() => {
    if (firebaseIdToken) {
      checkIfUserExists({
        variables: {
          firebaseId: firebaseIdToken,
        },
      });
    }
  }, [firebaseIdToken]);

  // if we got the status of the user
  useEffect(() => {
    if (checkData) {
      const { userExists } = checkData;
      setUserExists(userExists);
      if (!userExists) {
        setUserStateSettled(true);
      }
    }
  }, [checkData]);

  // if we successfully created an account
  useEffect(() => {
    if (createData) {
      if (!userToken) {
        setUserToken(createData.signUp);
      }
      client.refetchQueries({
        include: [USER_EXISTS],
      });
      checkIfUserExists({
        variables: {
          firebaseId: firebaseIdToken,
        },
      });
    }
  }, [createData]);

  // end of effects --------

  // when the user changes auth state, or opens app, we get the *firebase id token*
  useEffect(() => {
    const app = getApp();
    const auth = getAuth(app);
    onAuthStateChanged(auth, (existingUser) => {
      if (existingUser && !user) {
        existingUser.getIdToken().then((token) => {
          if (token) {
            setFirebaseIdToken(token);
          }
        });
      } else {
        setUserStateSettled(true);
      }
    });
  }, []);

  // login method
  const auth = getAuth();
  const login = async (email, password) => {
    setError(null);
    try {
      if (!email || !password) {
        setError({
          message: "please enter an email and password",
        });
        return;
      }
      await loginEmailRequest(email, password);
      const authToken = await auth.currentUser.getIdToken();
      setFirebaseIdToken(authToken);
      setUserExists(true);
      userLogin({
        variables: {
          firebaseIdToken: authToken,
        },
      });
    } catch (e) {
      setError({ message: "wrong email password combination" });
    }
  };

  // getting the apollo client and logging out
  const client = useApolloClient();
  const logout = async () => {
    client.clearStore();
    signOut(auth);
    setUser(null);
    setUserToken(null);
    setFirebaseIdToken(null);
    setError(null);
    setIsLoading(false);
    setUserExists(false);
    setUserStateSettled(false);
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
        userExists,
        setUserExists,
        userStateSettled,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
