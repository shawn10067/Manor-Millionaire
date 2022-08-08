import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import { ProgressBar } from "react-native-paper";
import theme from "../infrastructure/theme";

const ButtonBackground = styled.View`
  background-color: ${({ theme }) => theme.colours.main.white};
  border-radius: 30px;
  box-shadow: 0px 6px rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 30px;
  height: 70px;
  width: 230px;
`;

const SpinButtonProgressBar = ({ timeTill = Date.now() + 5000, startTime }) => {
  let interval = useRef(null);
  const [progress, setProgress] = useState(0);
  const startDifference = useRef(timeTill - startTime);

  // get ms difference from now to the timeTill
  const getDifference = () => timeTill - Date.now();

  // update the progress every 1 second by 0.1 and clear the interval when the progress is 100 or the component is unmounted
  useEffect(() => {
    interval.current = setInterval(() => {
      const diff = getDifference();
      if (diff > 0) {
        const absoluteProgress = Math.abs(1 - diff / startDifference.current);
        if (absoluteProgress !== Infinity) {
          setProgress(absoluteProgress);
        }
      } else {
        setProgress(100);
        clearInterval(interval.current);
      }
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, [progress]);

  // use the progress and the react-native-paper progress bar to display the progress
  return (
    <ButtonBackground>
      <ProgressBar
        progress={progress}
        color={theme.colours.main.blue}
        style={{
          height: "100%",
          width: "100%",
          borderRadius: 30,
        }}
      />
    </ButtonBackground>
  );
};

export default SpinButtonProgressBar;
