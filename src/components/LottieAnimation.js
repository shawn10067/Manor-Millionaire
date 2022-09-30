import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import styled from "styled-components/native";
import { View } from "react-native";

const LottieAnimation = ({
  style,
  children,
  source,
  speed = 1,
  loopStatus = true,
  onTop = false,
}) => {
  const lottieRef = useRef(null);

  const FullLottieView = styled(LottieView)`
    position: absolute;
    width: 100%;
    z-index: ${onTop ? 999 : -1};
    height: 100%;
  `;

  useEffect(() => {
    if (
      lottieRef.current &&
      lottieRef.current.reset &&
      lottieRef.current.play
    ) {
      setTimeout(() => {
        lottieRef && lottieRef.current && lottieRef.current.reset();
        lottieRef && lottieRef.current && lottieRef.current.play();
      }, 100);
    }
  }, [lottieRef.current]);

  return (
    <View style={style}>
      <FullLottieView
        source={source}
        ref={lottieRef}
        speed={speed}
        loop={loopStatus}
        renderMode={"SOFTWARE"}
      />
      {children}
    </View>
  );
};

export default LottieAnimation;
