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

  // console.log(
  //   "rendering component with the following state",
  //   loading,
  //   "user is",
  //   user,
  //   "firebaseIdToken is",
  //   firebaseIdToken,
  //   "error is",
  //   error,
  //   userExists,
  //   userToken
  // );

  // queries
  const [
    createAccountMutation,
    { createData, loading: createLoading, error: createAccountError },
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
      console.log("meData is", meData);
      // setUser(meData.getMe);
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
      console.log("login data", loginData);
      const { login } = loginData;
      setUserToken(login);
    }
  }, [loginData]);

  /*
  TODO: GET USER FROM GETME()
  */

  // if userExists is true, then we can login with the firebaseIdToken
  useEffect(() => {
    if (userExists) {
      userLogin({
        variables: {
          firebaseId: firebaseIdToken,
        },
      });
    }
  }, [userExists]);

  // if the user exists, use the login query and set the user
  useEffect(() => {
    if (userExists) {
      console.log("user exists, logging in", userExists);
    } else {
      console.log("user does not exist, creating account", userExists);
    }
  }, [userExists]);

  // if firebaseId token changes, call the checkIfUserExists
  useEffect(() => {
    console.log("firebase token fetch call");
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
    console.log("user existance fetch call");
    if (checkData) {
      console.log("data to check for existing user", checkData);
      setUserExists(checkData.userExists);
      //navigation.navigate("Home");
    }
  }, [checkData]);

  // if we successfully created an account
  useEffect(() => {
    console.log("user creating call");
    if (createData) {
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
      }
    });
  }, []);

  // TODO: make sure this works
  const auth = getAuth();
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
      setError(null);
      setIsLoading(false);
      setUserExists(false);
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
