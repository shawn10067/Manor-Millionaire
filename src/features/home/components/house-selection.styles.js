import { Text } from "react-native";
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

export const PaymentLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/payment.json"),
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const HouseLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/property-confirmation.json"),
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ConfettiLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/confetti.json"),
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PaymentFailLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/payment-failed.json"),
})`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LottieText = styled(Text)`
  font-size: 30px;
  font-family: FuturaPTHeavy;
  text-align: center;
  position: absolute;
  top: 120px;
  color: ${({ theme }) => theme.colours.main.white};
`;
