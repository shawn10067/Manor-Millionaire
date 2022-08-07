import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

const ButtonBackground = styled.View`
  background-color: ${({ theme }) => theme.colours.main.white};
  border-radius: 30px;
  box-shadow: 0px 6px rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 30px;
  height: 70px;
  width: 230px;
`;

const SpinButtonProgressBar = ({ children, ...props }) => {
  // holding the current value of the spin animation
  const progress = useRef(new Animated.Value(0)).current;

  // animate the progress variable to 100% slowly for the duration of 5 minutes
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    // console log the progress variable after 500 ms
    setTimeout(() => {
      console.log(progress);
    }, 500);
  });

  // blue background that uses the width of the progress variable to hold the spin button
  const ProgressBackground = styled.View`
    background-color: ${({ theme }) => theme.colours.main.blue};
    border-radius: 30px;
    height: 100%;
    z-index: 2;
  `;

  return (
    <>
      <ButtonBackground>
        <ProgressBackground
          style={{
            width: 130,
          }}
        />
      </ButtonBackground>
    </>
  );
};

export default SpinButtonProgressBar;
