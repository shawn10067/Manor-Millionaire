import React, { useEffect } from "react";
import { Animated } from "react-native";

// returns an component that uses react animated api to fill a button blue horizontally with the progress of a timer
const ButtonTimer = ({ children, ...props }) => {
  // returns an component that uses react animated api to create a progress button
  const ProgressButton = ({ children, ...props }) => {
    const [progress, setProgress] = React.useState(0);

    // get the ms from now to 6:30pm
    const getMsFromNow = () => {
      const now = new Date();
      const target = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        18,
        0,
        0
      );
      const ms = target - now;
      return ms;
    };

    // animate the progress variable to 100% slowly for the duration of 5 minutes
    useEffect(() => {
      Animated.timing(progress, {
        toValue: 100,
        duration: getMsFromNow(),
      });
    });

    return (
      <Animated.View
        style={{
          ...props.style,
          width: progress.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"],
            duration: getMsFromNow(),
          }),
        }}
      >
        {children}
      </Animated.View>
    );
  };
};
