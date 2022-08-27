import { Text, TextInput } from "react-native";
import styled from "styled-components/native";
import RoundedButton from "../../../components/RoundedButton";

export const BackButtonView = styled.View`
  flex: 0.1;
`;

export const LogoView = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;

export const FormView = styled.View`
  padding: 10px;
  flex: 0.6;
  justify-content: flex-start;
  align-items: center;
`;

export const LoginButtonSubmit = styled(RoundedButton).attrs({
  text: "Login",
  colour: "red",
})`
  margin-top: 20px;
  width: 60%;
`;

export const LoginErrorText = styled(Text)`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.red};
  font-size: 20px;
  margin: 7px;
`;
