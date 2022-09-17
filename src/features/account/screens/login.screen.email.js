import React, { useContext, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import RoundedTextInput from "../../../components/RoundedTextInput";
import SafeAreaView from "../../../components/SafeAreaView";
import { LogoImage } from "../components/account.screen.styles";
import {
  BackButtonView,
  FormView,
  LoginButtonSubmit,
  LoginErrorText,
  LogoView,
} from "../components/login.email.screen.styles";

const LoginEmailScreen = ({ navigation }) => {
  const [error, setError] = useState(null);
  // to be implemented
  return (
    <BackgroundView>
      <SafeAreaView>
        <BackButtonView />
        <LogoView>
          <LogoImage />
        </LogoView>
        <FormView>
          <RoundedTextInput placeholder="email" />
          <RoundedTextInput placeholder="password" secureTextEntry={true} />
          {error && <LoginErrorText>{error}</LoginErrorText>}
          <LoginButtonSubmit
            onPress={() => {
              return null;
            }}
          />
        </FormView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default LoginEmailScreen;
