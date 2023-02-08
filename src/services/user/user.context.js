import { useLazyQuery, useMutation } from "@apollo/client";
import React, { createContext, useEffect, useState } from "react";
import { createErrorObject } from "../../utils/errorHandlers";
import {
  GET_MY_FRIENDS,
  GET_MY_FRIEND_REQUESTS,
  GET_MY_PROPERTIES,
} from "../../../graphql/personal";
import { SEARCH_USERS } from "../../../graphql/queries";
import { SEND_FRIEND_REQUEST } from "../../../graphql/mutations";
import mapProperties from "../../utils/propertiesMapper";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // holding the user information
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [trades, setTrades] = useState([]);
  const [properties, setProperties] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);

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
  const [
    getFriendRequests,
    {
      data: friendRequestsData,
      loading: friendRequestLoading,
      error: friendRequestError,
    },
  ] = useLazyQuery(GET_MY_FRIEND_REQUESTS);
  const [
    getFriends,
    { data: friendsData, loading: friendsLoading, error: friendsError },
  ] = useLazyQuery(GET_MY_FRIENDS);
  const [
    searchUsers,
    { data: searchData, loading: searchLoading, error: searchError },
  ] = useLazyQuery(SEARCH_USERS);
  const [
    sendFriendRequest,
    { loading: sendFriendRequestLoading, error: sendFriendRequestError },
  ] = useMutation(SEND_FRIEND_REQUEST);

  // loading logic
  if (
    !loading &&
    (propertiesLoading ||
      friendRequestLoading ||
      friendsLoading ||
      searchLoading ||
      sendFriendRequestLoading)
  ) {
    setIsLoading(true);
  } else if (
    loading &&
    !propertiesLoading &&
    !friendRequestLoading &&
    !friendsLoading &&
    !searchLoading &&
    !sendFriendRequestLoading
  ) {
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
      const mappedProperties = mapProperties(propertiesData.getMe.properties);
      setProperties(mappedProperties);
    }
  }, [propertiesData]);

  // friend request logic
  useEffect(() => {
    if (friendRequestError) {
      setError(createErrorObject(friendRequestError));
    }
  }, [friendRequestError]);
  useEffect(() => {
    if (friendRequestsData) {
      console.log("friend request data is", friendRequestsData);
      setFriendRequests(friendRequestsData.getMe.friendRequests);
    }
  }, [friendRequestsData]);

  // friends logic
  useEffect(() => {
    if (friendsError) {
      setError(createErrorObject(friendsError));
    }
  }, [friendsError]);
  useEffect(() => {
    if (friendsData) {
      console.log("friend data is", friendsData);
      setFriends(friendsData.getMe.friends);
    }
  }, [friendsData]);

  // search logic
  useEffect(() => {
    if (searchError) {
      setError(createErrorObject(searchError));
    }
  }, [searchError]);
  useEffect(() => {
    if (searchData) {
      setSearchedUsers(searchData.searchUsers);
    }
  }, [searchData]);

  // sent friend request logic
  useEffect(() => {
    if (sendFriendRequestError) {
      setError(createErrorObject(sendFriendRequestError));
    }
  }, [sendFriendRequestError]);

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
        getFriendRequests,
        getFriends,
        searchUsers,
        searchedUsers,
        sendFriendRequest,
        error,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
