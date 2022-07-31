import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  /*
  const [user, setUser] = useState({
    hasHouse: true,
    hasUsername: true,
    cash: 155000000,
  });
  */

  const [user, setUser] = useState({
    cash: 200000000,
    hasHouse: true,
    hasUsername: true,
  });

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
