import styled from "styled-components/native";
import RoundedButton from "../../../components/RoundedButton";

export const LogoView = styled.View`
  background-color: ${({ theme }) => theme.colours.main.blue};
  flex: 0.25;
`;

export const GlobeView = styled.View`
  background-color: ${({ theme }) => theme.colours.main.green};
  flex: 0.3;
`;

export const PlaneView = styled.View`
  background-color: red;
  flex: 0.15;
`;

export const AccountOptionsView = styled.View`
  background-color: ${({ theme }) => theme.colours.main.white};
  flex: 0.3;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(RoundedButton).attrs({
  text: "LOGIN",
  normalBackgroundColor: "grey",
  pressedBackgroundColor: "white",
  fontSize: 45,
})`
  width: 250px;
  height: 80px;
  margin: 10px;
`;

export const SignUpButton = styled(RoundedButton).attrs({
  text: "SIGN UP",
  normalBackgroundColor: "grey",
  pressedBackgroundColor: "white",
  fontSize: 45,
})`
  width: 250px;
  height: 80px;
  margin: 10px;
`;
