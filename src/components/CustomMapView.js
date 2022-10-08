import React from "react";
import { Platform, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import customMapStyle from "../utils/customMapStyle.json";

const CustomMapView = ({
  children,
  animateRegion = null,
  setOpen = null,
  mapRef = null,
  ...props
}) => {
  console.log("custom style", customMapStyle);
  const isAndroid = Platform.OS === "android";
  return (
    <MapView
      style={{
        flex: 1,
      }}
      userInterfaceStyle="dark"
      rotateEnabled={false}
      provider={isAndroid ? PROVIDER_GOOGLE : null}
      showsPointsOfInterest={false}
      initialRegion={animateRegion}
      mapType="terrain"
      ref={(map) => mapRef && (mapRef.current = map)}
      onPanDrag={() => setOpen && setOpen(false)}
      onRegionChangeComplete={(reg) => {
        // console.log("region changed with ", reg);
        return;
      }}
      customMapStyle={customMapStyle}
      {...props}
    >
      {children}
    </MapView>
  );
};

export default CustomMapView;
