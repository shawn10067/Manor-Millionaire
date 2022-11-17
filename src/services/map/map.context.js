import React, { createContext, useState } from "react";

export const MapContext = createContext();

export const MapContextProvider = ({ children }) => {
  // holding map screentshot state
  const [screenshotLocation, setScreenshotLocation] = useState(false);
  // TODO: add more states here (like callouts, etc)

  const setScreenshot = (location) => {
    // TOOD: add deletion logic here
    // if (screenshotLocation) {
    // delete the old screenshot (ion even know how this works)
    // FileSystem.deleteAsync(screenshotLocation, { idempotent: true });
    // }
    console.log("setting screenshot location to ", location);
    setScreenshotLocation(location);
  };

  return (
    <MapContext.Provider
      value={{
        screenshotLocation,
        setScreenshot,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
