import { TextInput } from "react-native";
import styled from "styled-components/native";
import RoundedButton from "../../../components/RoundedButton";
import theme from "../../../infrastructure/theme";

export const BackButtonView = styled.View`
  flex: 0.1;
  background-color: aliceblue;
`;

export const LogoView = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

export const FormView = styled.View`
  flex: 0.6;
  background-color: aqua;
`;

export const RoundedTextInput = styled(TextInput).attrs({
  placeholderTextColor: theme.colours.main.grey,
})`
  width: 30px;
  width: 70%;
  background-color: ${({ theme }) => theme.colours.main.white};
`;

export const LoginButtonSubmit = styled(RoundedButton).attrs({
  text: "Login",
  color: "red",
})`
  width: 60%;
  height: 40px;
`;
