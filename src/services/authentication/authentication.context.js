import React from "react";
import {
  createEmailRequest,
  loginEmailRequest,
} from "./authentication.service";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { getApp } from "firebase/app";
import { createContext } from "react";
import { useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [loading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

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
      console.log("logged out");
    });
  };

  const login = (email, password) => {
    setIsLoading(true);
    setError(null);
    loginEmailRequest(email, password)
      .then((authenticatedUser) => {
        setUser(authenticatedUser);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const createAccount = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Passwords do not match");
      return;
    }
    setIsLoading(true);
    setError(null);
    createEmailRequest(email, password)
      .then((authenticatedUser) => {
        console.log("created user", authenticatedUser);
        setUser(authenticatedUser);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
        error,
        logout,
        login,
        createAccount,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
