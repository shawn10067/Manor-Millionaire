import { Pressable } from "react-native";
import styled from "styled-components/native";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MapLottie = styled(LottieAnimation)`
  height: 650px;
  width: 150%;
`;

export const MapContentView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

export const PropertiesButton = styled(RoundedButton)`
  height: 60px;
  width: 170px;
`;

export const TradeButton = styled(RoundedButton).attrs({
  colour: "purple",
  text: "Trade",
})`
  height: 60px;
  width: 150px;
`;

export const FriendsButton = styled(RoundedButton).attrs({
  colour: "green",
  text: "Friends",
})`
  height: 60px;
  width: 150px;
`;

export const MenuView = styled.View`
  position: absolute;
  top: 0px;
  left: 10px;
  height: 20%;
  width: 17%;
  align-items: center;
  z-index: 1;
`;

export const IconView = styled(Pressable)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MenuFriendsButton = styled(RoundedButton).attrs({
  fontSize: 16,
  colour: "blue",
  text: "Friends",
})`
  width: 100%;
  height: 40px;
`;

export const SpinTimeText = styled.Text`
  font-size: 20px;
  font-family: FuturaPTHeavy;
  color: #f6ae2d;
  margin: 5px;
  text-align: center;
  position: absolute;
  top: -40px;
  width: 100%;
`;

export const SpinRoundedButton = styled(RoundedButton).attrs({
  fontSize: 30,
  text: "Spin",
  colour: "white",
  normalBackgroundColor: "rgba(0, 0, 0, 0.1)",
  pressedBackgroundColor: "rgba(0, 0, 0, 0.4)",
  shadow: false,
})`
  width: 230px;
  height: 70px;
  position: absolute;
  bottom: 20px;
  z-index: 3;
`;
