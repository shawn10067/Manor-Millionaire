import styled from "styled-components/native";
import RoundedButton from "../../../components/RoundedButton";

export const LogoView = styled.View`
  flex: 0.25;
`;

export const GlobeView = styled.View`
  flex: 0.28;
`;

export const PlaneView = styled.View`
  flex: 0.12;
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
