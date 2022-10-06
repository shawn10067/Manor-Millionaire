import React from "react";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";

const isAndoid = Platform.OS === "android";

const TintedView = styled.View`
  background-color: rgba(0, 0, 0, 0.55);
  justify-content: center;
`;

const SurroundingBlurView = styled.View`
  overflow: hidden;
`;

const BlurBlackViewComponent = ({ children, ...props }) => {
  if (!isAndoid) {
    return (
      <SurroundingBlurView {...props}>
        <BlurView
          tint="dark"
          intensity={50}
          blurAmount={90}
          style={{ flex: 1 }}
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
