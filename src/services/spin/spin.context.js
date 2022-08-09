import React, { createContext, useState } from "react";
import { getNextSpinTime, getPreviousSpinTime } from "./spin.service";

export const SpinContext = createContext();

export const SpinContextProvider = ({ children }) => {
  const [hasSpun, setHasSpun] = useState(false);
  const [nextSpinTime, setNextSpinTime] = useState(getNextSpinTime());
  const [previousSpinTime, setPreviousSpinTime] = useState(
    getPreviousSpinTime()
  );

  const updateNextSpinTime = () => {
    setNextSpinTime(getNextSpinTime());
  };

  const updatePreviousSpinTime = () => {
    setPreviousSpinTime(getPreviousSpinTime());
  };

  return (
    <SpinContext.Provider
      value={{
        hasSpun,
        setHasSpun,
        nextSpinTime,
        previousSpinTime,
        updateNextSpinTime,
        updatePreviousSpinTime,
      }}
    >
      {children}
    </SpinContext.Provider>
  );
};
