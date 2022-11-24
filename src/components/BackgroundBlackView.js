import { BlurView } from "@react-native-community/blur";
import { useContext } from "react";
import { Image, ImageBackground, Platform } from "react-native";
import styled from "styled-components/native";
import { MapContext } from "../services/map/map.context";
import CustomMapView from "./CustomMapView";

const BackgroundBlackViewTemplate = styled.View`
  height: 100%;
  width: 100%;
  background-color: #0a122a;
`;

const isAndoid = Platform.OS === "android";

const TintedView = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const WholeBlur = styled(BlurView).attrs({
  blurType: "dark",
})`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const BlurBlackView = ({ children, ...props }) => {
  if (isAndoid) {
    return <TintedView {...props}>{children}</TintedView>;
  }
  return <WholeBlur {...props}>{children}</WholeBlur>;
};

const BackgroundBlackView = ({ children, ...props }) => {
  const { screenshotLocation } = useContext(MapContext);
  if (screenshotLocation) {
    return (
      <BackgroundBlackViewTemplate>
        <ImageBackground
          source={{
            uri: screenshotLocation,
          }}
          style={{
            flex: 1,
          }}
        >
          <BlurBlackView {...props}>{children}</BlurBlackView>
        </ImageBackground>
      </BackgroundBlackViewTemplate>
    );
  } else {
    return (
      <BackgroundBlackViewTemplate>
        <CustomMapView />
        <BlurBlackView {...props}>{children}</BlurBlackView>
      </BackgroundBlackViewTemplate>
    );
  }
};

export default BackgroundBlackView;
