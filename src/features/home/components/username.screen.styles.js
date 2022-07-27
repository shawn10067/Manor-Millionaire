import { Text } from "react-native";
import styled from "styled-components/native";
import LottieAnimation from "../../../components/LottieAnimation";

export const BeachLottieView = styled.View`
  flex: 0.45;
  justify-content: flex-end;
  align-items: center;
`;

export const BeachLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/beach.json"),
})`
  height: 90%;
  width: 90%;
`;

export const TextView = styled.View`
  flex: 0.05;
  justify-content: center;
  align-items: center;
`;

export const UsernameText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 30px;
  color: ${({ theme }) => theme.colours.main.white};
  width: 100%;
  text-align: center;
`;

export const UsernameInputView = styled.View`
  flex: 0.5;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;
