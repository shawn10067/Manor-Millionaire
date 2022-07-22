import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import { View } from "react-native";

const FullLottieView = styled(LottieView)`
  width: 100%;
  height: 100%;
`;

const LottieAnimation = ({ style, children, source, speed = 1 }) => {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (lottieRef.current) {
      setTimeout(() => {
        lottieRef.current.reset();
        lottieRef.current.play();
      }, 100);
    }
  }, [lottieRef.current]);

  return (
    <View style={style}>
      <FullLottieView source={source} ref={lottieRef} loop={true} speed={speed}>
        {children}
      </FullLottieView>
    </View>
  );
};

export default LottieAnimation;
