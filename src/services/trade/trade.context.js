import React, { createContext, useState } from "react";

export const TradeContext = createContext();

export const TradeContextProvider = ({ children }) => {
  const [trade, setTrade] = useState(null);

  return (
    <TradeContext.Provider
      value={{
        trade,
        setTrade,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};
