import React from "react";
import { Animated } from "react-native";

// returns an component that uses react animated api to fade in its children and fades out when they are unmounted
const AnimationFadeInOut = ({ center = true, children, ...props }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
  }, [isVisible]);

  return (
    <Animated.View
      style={{
        ...props.style,
        flex: 1,
        opacity: fadeAnim,
        justifyContent: center ? "center" : null,
        alignItems: center ? "center" : null,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default AnimationFadeInOut;
