import React from "react";
import MapView from "react-native-maps";

const CustomMapView = ({
  children,
  animateRegion = null,
  setOpen = null,
  mapRef = null,
  ...props
}) => {
  return (
    <MapView
      style={{
        flex: 1,
      }}
      userInterfaceStyle="dark"
      rotateEnabled={false}
      showsPointsOfInterest={false}
      initialRegion={animateRegion}
      mapType="terrain"
      ref={(map) => mapRef && (mapRef.current = map)}
      onPanDrag={() => setOpen && setOpen(false)}
      onRegionChangeComplete={(reg) => {
        // console.log("region changed with ", reg);
        return;
      }}
      {...props}
    >
      {children}
    </MapView>
  );
};

export default CustomMapView;
