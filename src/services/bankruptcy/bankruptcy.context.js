import React, { createContext, useState } from "react";

export const BankruptcyContext = createContext();

export const BankruptcyContextProvider = ({ children }) => {
  const [bankruptTrade, setBankruptTrade] = useState(null);

  return (
    <TradeContext.Provider
      value={{
        bankruptTrade,
        setBankruptTrade,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};
