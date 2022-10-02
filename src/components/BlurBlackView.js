import React from "react";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";

const isAndoid = Platform.OS === "android";

const TintedView = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
`;

const WholeBlur = styled(BlurView)`
  flex: 1;
`;

const BlurBlackView = ({ children }) => {
  if (!isAndoid) {
    return <WholeBlur tint="dark" intensity={50} />;
  } else {
    return <TintedView>{children}</TintedView>;
  }
};

export default BlurBlackView;
