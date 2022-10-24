import { useEffect } from "react";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export const presetColors = {
  instagram: [
    "rgb(106, 57, 171)",
    "rgb(151, 52, 160)",
    "rgb(197, 57, 92)",
    "rgb(231, 166, 73)",
    "rgb(181, 70, 92)",
  ],
  firefox: [
    "rgb(236, 190, 55)",
    "rgb(215, 110, 51)",
    "rgb(181, 63, 49)",
    "rgb(192, 71, 45)",
  ],
  sunrise: [
    "rgb(92, 160, 186)",
    "rgb(106, 166, 186)",
    "rgb(142, 191, 186)",
    "rgb(172, 211, 186)",
    "rgb(239, 235, 186)",
    "rgb(212, 222, 206)",
    "rgb(187, 216, 200)",
    "rgb(152, 197, 190)",
    "rgb(100, 173, 186)",
  ],
  rare: [
    "rgb(0, 0, 0)",
    "rgb(100, 173, 186)",
    "rgb(92, 160, 186)",
    "rgb(236, 190, 55)",
    "rgb(200, 073, 086)",
  ],
};

Animated.NativeLinearGradient =
  Animated.createAnimatedComponent(LinearGradient);

// Custom Linear Gradient Component
const CustomLinearGradient = ({
  children,
  customColors = presetColors.instagram,
  points = {
    start: { x: 0, y: 0.4 },
    end: { x: 1, y: 0.6 },
  },
  style,
  speed = 4000,
}) => {
  console.log("rendered");
  // holding the shared values
  const color0 = useSharedValue(0);
  const color1 = useSharedValue(0);

  // starting the animation
  const startAnimation = () => {
    [color0, color1].forEach((color) => (color.value = 0));
    color0.value = withTiming(customColors.length, {
      duration: customColors.length * speed,
      easing: Easing.linear,
    });
    color1.value = withTiming(customColors.length, {
      duration: customColors.length * speed,
      easing: Easing.linear,
    });
  };

  // starting the animation on mount
  useEffect(() => {
    startAnimation();
  }, []);

  // creating the two prefer color animations
  const preferColors = [];
  while (preferColors.length < 2) {
    preferColors.push(
      customColors
        .slice(preferColors.length)
        .concat(customColors.slice(0, preferColors.length + 1))
    );
  }

  const colors = useAnimatedProps(() => {
    const interColours = [color0, color1].map((color, index) => {
      return interpolateColor(
        color.value,
        Array.from({ length: customColors.length }, (_, i) => i),
        preferColors[index],
        "RGB"
      );
    });

    return {
      colors: interColours,
    };
  });

  return (
    <Animated.NativeLinearGradient
      animatedProps={colors}
      start={points.start}
      end={points.end}
      style={style}
    >
      {children}
    </Animated.NativeLinearGradient>
  );
};

export default CustomLinearGradient;
