import React, { useContext, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import { UserContext } from "../../../services/user/user.context";
import { LogoImage } from "../components/account.screen.styles";
import {
  BackButtonView,
  FormView,
  LoginButtonSubmit,
  LoginErrorText,
  LogoView,
  RoundedTextInput,
} from "../components/login.email.screen.styles";

const SignUpEmailScreen = () => {
  const [error, setError] = useState("none");
  const { setUser } = useContext(UserContext);
  return (
    <BackgroundView>
      <SafeAreaView>
        <BackButtonView />
        <LogoView>
          <LogoImage />
        </LogoView>
        <FormView>
          <RoundedTextInput placeholder="username" />
          <RoundedTextInput placeholder="password" secureTextEntry={true} />
          <RoundedTextInput
            placeholder="repeat password"
            secureTextEntry={true}
          />
          {error && <LoginErrorText>{error}</LoginErrorText>}
          <LoginButtonSubmit
            onPress={() => {
              setError(null);
              setUser(true);
            }}
          />
        </FormView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default SignUpEmailScreen;
