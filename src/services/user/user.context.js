import React, { createContext, useState } from "react";

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

  // const [user, setUser] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
