import { Text, TextInput } from "react-native";
import styled from "styled-components/native";
import RoundedButton from "../../../components/RoundedButton";
import theme from "../../../infrastructure/theme";

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

export const RoundedTextInput = styled(TextInput).attrs({
  placeholderTextColor: theme.colours.main.grey,
  disableFullscreenUI: true,
  autoCapitalize: "none",
  autoCorrect: false,
})`
  height: 60px;
  width: 80%;
  background-color: ${({ theme }) => theme.colours.main.white};
  border: 4px solid ${({ theme }) => theme.colours.main.green};
  border-radius: 20px;
  padding: 10px;
  padding-left: 15px;
  font-size: 25px;
  font-family: FuturaPTHeavy;
  margin: 10px;
`;

export const LoginButtonSubmit = styled(RoundedButton).attrs({
  text: "Login",
  colour: "red",
})`
  width: 60%;
`;

export const LoginErrorText = styled(Text)`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.red};
  font-size: 20;
  margin: 7px;
`;
