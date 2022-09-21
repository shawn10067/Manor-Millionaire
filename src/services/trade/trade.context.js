import React, { createContext, useEffect, useState } from "react";

export const TradeContext = createContext();

export const TradeContextProvider = ({ children }) => {
  const [trade, setTrade] = useState(null);

  // TODO: remove this
  useEffect(() => {
    console.log("trade", trade);
  }, [trade]);

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
