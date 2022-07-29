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

export const MapView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PropertiesButton = styled(RoundedButton)`
  height: 70px;
  width: 230px;
`;

export const TradeButton = styled(RoundedButton).attrs({
  colour: "purple",
  text: "Trade",
})`
  height: 60px;
  width: 150px;
`;

export const MenuView = styled.View`
  position: absolute;
  top: 0px;
  right: 10px;
  height: 20%;
  width: 17%;
  align-items: center;
`;

export const SpinButton = styled(RoundedButton).attrs({
  colour: "blue",
  text: "Spin",
})`
  position: absolute;
  bottom: 30px;
  height: 70px;
  width: 230px;
`;
