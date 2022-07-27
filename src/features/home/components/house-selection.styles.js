import styled from "styled-components/native";
import LottieAnimation from "../../../components/LottieAnimation";

export const TravelAnimationView = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const TravelLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/travel.json"),
})`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
`;

export const SparksLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/sparks.json"),
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
