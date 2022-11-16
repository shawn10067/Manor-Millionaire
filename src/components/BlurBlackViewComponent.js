import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import CustomLinearGradient from "./gradient/CustomLinearGradient";
const isAndoid = Platform.OS === "android";

const BlurBlackViewComponent = ({ children, style, ...props }) => {
  if (!isAndoid) {
    return (
      <Animated.View
        style={[{ overflow: "hidden" }, style]}
        entering={SlideInDown.duration(500)}
        exiting={SlideOutDown}
        {...props}
      >
        <BlurView
          style={{
            flex: 1,
          }}
          blurType={"regular"}
          reducedTransparencyFallbackColor="white"
        >
          {children}
        </BlurView>
      </Animated.View>
    );
  } else {
    return (
      <Animated.View
        style={[
          {
            backgroundColor: "rgba(104, 156, 164, 0.9)",
            justifyContent: "center",
          },
          style,
        ]}
        entering={SlideInDown.duration(500)}
        exiting={SlideOutDown}
        {...props}
      >
        {children}
      </Animated.View>
    );
  }
};

export default BlurBlackViewComponent;
