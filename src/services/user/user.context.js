import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    hasHouse: true,
    hasUsername: true,
    cash: 155000000,
    bankrupt: false,
    bankruptAmount: 0,
    hasSpun: false,
    inJail: false,
  });

  const [friends, setFriends] = useState([
    { username: "sheenMachine" },
    { username: "karan343" },
    { username: "raju293" },
    { username: "singhamRockx" },
    { username: "ummy" },
    { username: "Peebody" },
    { username: "EuRekA247" },
    { username: "zimbdestroyer" },
    { username: "luniwoney496565" },
  ]);

  const [friendRequests, setFriendRequests] = useState([
    { username: "sneakyBob" },
    { username: "luluwatermelon" },
    { username: "backstreetJibes" },
    { username: "geneology2041" },
  ]);

  useEffect(() => {
    if (user === null) {
      setFriends(null);
    }
  }, [user]);

  // const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        friends,
        setFriends,
        friendRequests,
        setFriendRequests,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
