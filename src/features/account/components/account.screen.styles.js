import { Image } from "react-native";
import styled from "styled-components/native";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";

export const LogoView = styled.View`
  flex: 0.25;
  justify-content: center;
  align-items: center;
`;

export const GlobeView = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
`;

export const AccountOptionsView = styled.View`
  background-color: ${({ theme }) => theme.colours.main.white};
  flex: 0.35;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(RoundedButton).attrs({
  text: "LOGIN",
  normalBackgroundColor: "grey",
  pressedBackgroundColor: "white",
  fontSize: 47,
})`
  width: 275px;
  height: 85px;
  margin: 10px;
`;

export const SignUpButton = styled(RoundedButton).attrs({
  text: "SIGN UP",
  normalBackgroundColor: "grey",
  pressedBackgroundColor: "white",
  fontSize: 47,
})`
  width: 275px;
  height: 85px;
`;

export const LogoImage = styled(Image).attrs({
  source: require("../../../../assets/logo.png"),
})`
  height: 85%;
  width: 85%;
`;

export const GlobeLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/earth.json"),
  speed: 0.7,
})`
  height: 80%;
  width: 100%;
`;

export const PlaneView = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const PlaneLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/plane.json"),
})`
  height: 52%;
  width: 52%;
`;

export const CoinsLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/coins.json"),
  speed: 0.35,
})`
  height: 100%;
  width: 100%;
`;
