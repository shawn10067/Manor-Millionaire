import styled from "styled-components/native";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const MapLottie = styled(LottieAnimation)`
  height: 450px;
  width: 450px;
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
