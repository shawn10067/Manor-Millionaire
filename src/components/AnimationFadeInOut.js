import React from "react";
import { Animated } from "react-native";

// returns an component that uses react animated api to fade in its children and fades out when they are unmounted
const AnimationFadeInOut = ({ children, ...props }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [isVisible, setIsVisible] = React.useState(true);
  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
      }).start();
    }
  }, [isVisible]);
  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default AnimationFadeInOut;
