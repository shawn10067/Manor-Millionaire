import React from "react";
import styled from "styled-components/native";
import { Platform } from "react-native";
import { BlurView } from "@react-native-community/blur";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import CustomLinearGradient from "./gradient/CustomLinearGradient";
const isAndoid = Platform.OS === "android";

const BlurBlackViewComponent = ({
  children,
  style,
  light = true,
  animate = true,
  ...props
}) => {
  if (!isAndoid) {
    return (
      <Animated.View
        style={[style, { overflow: "hidden" }]}
        entering={animate && SlideInDown.duration(500)}
        exiting={animate && SlideOutDown}
        {...props}
      >
        <BlurView
          style={{
            flex: 1,
          }}
          blurType={light ? "light" : "regular"}
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
            backgroundColor: "rgba(16, 16, 16, 0.65)",
            justifyContent: "center",
          },
          style,
        ]}
        entering={SlideInDown.duration(250)}
        exiting={SlideOutDown}
        {...props}
      >
        {children}
      </Animated.View>
    );
  }
};

export default BlurBlackViewComponent;
