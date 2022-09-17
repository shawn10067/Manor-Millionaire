import { useLazyQuery } from "@apollo/client";
import React, { createContext, useEffect, useState } from "react";
import { createErrorObject } from "../../utils/errorHandlers";
import { GET_MY_PROPERTIES } from "../../../graphql/personal";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // holding the user information
  const [friends, setFriends] = useState({});
  const [friendRequests, setFriendRequests] = useState({});
  const [trades, setTrades] = useState([]);
  const [properties, setProperties] = useState([]);

  // holding loading and error state
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // using the personal queries and lazy queries to get the information at any time

  // queries
  const [
    getProperties,
    {
      data: propertiesData,
      loading: propertiesLoading,
      error: propertiesError,
    },
  ] = useLazyQuery(GET_MY_PROPERTIES);

  // loading logic
  if (propertiesLoading && !loading) {
    setIsLoading(true);
  } else if (loading && !propertiesLoading) {
    setIsLoading(false);
  }

  // properties logic
  useEffect(() => {
    if (propertiesError) {
      setError(createErrorObject(propertiesError));
    }
  }, [propertiesError]);
  useEffect(() => {
    if (propertiesData) {
      console.log("properties data came in ", propertiesData);
      //setProperties(propertiesData.getMe)
    }
  }, [propertiesData]);

  return (
    <UserContext.Provider
      value={{
        friends,
        setFriends,
        friendRequests,
        setFriendRequests,
        properties,
        setProperties,
        trades,
        getProperties,
        error,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
