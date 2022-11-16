import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated from "react-native-reanimated";
import CustomLinearGradient from "./gradient/CustomLinearGradient";
const isAndoid = Platform.OS === "android";

const TintedView = styled.View`
  background-color: rgba(104, 156, 164, 0.9);
  justify-content: center;
`;

const SurroundingBlurView = styled(Animated.View)`
  overflow: hidden;
`;

const BlurBlackViewComponent = ({ children, style, ...props }) => {
  if (!isAndoid) {
    return (
      <SurroundingBlurView style={style} {...props}>
        <BlurView
          style={{
            flex: 1,
          }}
          blurType={"regular"}
          reducedTransparencyFallbackColor="white"
        >
          {children}
        </BlurView>
      </SurroundingBlurView>
    );
  } else {
    return (
      <TintedView style={[style]} {...props}>
        {children}
      </TintedView>
    );
  }
};

export default BlurBlackViewComponent;
