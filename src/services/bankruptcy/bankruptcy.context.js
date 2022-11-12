import React, { createContext, useState } from "react";

export const BankruptcyContext = createContext();

export const BankruptcyContextProvider = ({ children }) => {
  const [bankruptTrade, setBankruptTrade] = useState({});

  return (
    <BankruptcyContext.Provider
      value={{
        bankruptTrade,
        setBankruptTrade,
      }}
    >
      {children}
    </BankruptcyContext.Provider>
  );
};
