import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated from "react-native-reanimated";
const isAndoid = Platform.OS === "android";

const TintedView = styled.View`
  background-color: rgba(154, 206, 224, 0.6);
  justify-content: center;
`;

const SurroundingBlurView = styled(Animated.View)`
  overflow: hidden;
`;

const BlurBlackViewComponent = ({ children, ...props }) => {
  if (!isAndoid) {
    return (
      <SurroundingBlurView {...props}>
        <BlurView
          blurAmount={10}
          style={{ flex: 1 }}
          blurType={isAndoid ? "light" : "regular"}
          reducedTransparencyFallbackColor="white"
        >
          {children}
        </BlurView>
      </SurroundingBlurView>
    );
  } else {
    return <TintedView {...props}>{children}</TintedView>;
  }
};

export default BlurBlackViewComponent;
