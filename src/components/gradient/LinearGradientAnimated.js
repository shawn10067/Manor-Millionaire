import React, { Component, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import NativeLinearGradient from "react-native-linear-gradient";
import rgb2hex from "rgb2hex";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  interpolate,
  interpolateColor,
  Extrapolation,
  useDerivedValue,
  runOnJS,
  interpolateColors,
  processColor,
} from "react-native-reanimated";
import { ProgressBar } from "react-native-paper";

Animated.NativeLinearGradient =
  Animated.createAnimatedComponent(NativeLinearGradient);

// class AnimatedGradient extends Component {
//   static defaultProps = {
//     customColors: presetColors.instagram,
//     speed: 4000,
//     points: {
//       start: { x: 0, y: 0.4 },
//       end: { x: 1, y: 0.6 },
//     },
//   };

//   state = {
//     color0: new Animated.Value(0),
//     color1: new Animated.Value(0),
//   };

//   componentDidMount = () => {
//     this.startAnimation();
//   };

//   startAnimation = () => {
//     const { color0, color1 } = this.state;
//     const { customColors, speed } = this.props;
//     [color0, color1].forEach((color) => color.setValue(0));

//     Animated.parallel(
//       [color0, color1].map((animatedColor) => {
//         return Animated.timing(animatedColor, {
//           toValue: customColors.length,
//           duration: customColors.length * speed,
//           easing: Easing.linear,
//           useNativeDriver: this.props.useNativeDriver || false,
//         });
//       })
//     ).start(this.startAnimation);
//   };

//   render() {
//     const { color0, color1 } = this.state;
//     const { customColors, children, points, style } = this.props;
//     const preferColors = [];
//     while (preferColors.length < 2) {
//       preferColors.push(
//         customColors
//           .slice(preferColors.length)
//           .concat(customColors.slice(0, preferColors.length + 1))
//       );
//     }
//     const interpolatedColors = [color0, color1].map((animatedColor, index) => {
//       return animatedColor.interpolate({
//         inputRange: Array.from(
//           { length: customColors.length + 1 },
//           (v, k) => k
//         ),
//         outputRange: preferColors[index],
//       });
//     });

//     return (
//       <Animated.LinearGradient
//         style={[styles.linearGradient, style]}
//         points={points}
//         color0={interpolatedColors[0]}
//         color1={interpolatedColors[1]}
//       >
//         {children}
//       </Animated.LinearGradient>
//     );
//   }
// }
