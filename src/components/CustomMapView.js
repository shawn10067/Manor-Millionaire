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
      style={{ flex: 1 }}
      type="terrain"
      userInterfaceStyle="dark"
      rotateEnabled={false}
      showsPointsOfInterest={false}
      mapType="terrain"
      showsTraffic={true}
      ref={(map) => mapRef && (mapRef.current = map)}
      onPanDrag={() => setOpen && setOpen(false)}
      initialRegion={animateRegion}
      onRegionChangeComplete={(reg) => {
        // console.log("region changed with ", reg);
        return;
      }}
    >
      {children}
    </MapView>
  );
};

export default CustomMapView;
