import { BlurView } from "expo-blur";
import { Platform } from "react-native";
import styled from "styled-components/native";
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
  background-color: rgba(0, 0, 0, 0.75);
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const WholeBlur = styled(BlurView)`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
`;

const BlurBlackView = ({ children, ...props }) => {
  if (!isAndoid) {
    return (
      <WholeBlur tint="dark" intensity={50} {...props}>
        {children}
      </WholeBlur>
    );
  } else {
    return <TintedView {...props}>{children}</TintedView>;
  }
};

const BackgroundBlackView = ({ children, ...props }) => {
  return (
    <BackgroundBlackViewTemplate>
      <CustomMapView />
      <BlurBlackView {...props}>{children}</BlurBlackView>
    </BackgroundBlackViewTemplate>
  );
};

export default BackgroundBlackView;
