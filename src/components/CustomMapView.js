import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

const CustomMap = styled(MapView.Animated).attrs({
  type: "terrain",
  userInterfaceStyle: "dark",
  rotateEnabled: false,
  showsPointsOfInterest: false,
  mapType: "terrain",
  showsTraffic: true,
})`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const CustomMapView = ({ children, ...props }) => {
  return <CustomMap {...props}>{children}</CustomMap>;
};

export default CustomMapView;
