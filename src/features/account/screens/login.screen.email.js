import React, { useContext, useEffect, useRef, useState } from "react";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import BackgroundView from "../../../components/BackgroundView";
import RoundedTextInput from "../../../components/RoundedTextInput";
import SafeAreaView from "../../../components/SafeAreaView";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LogoImage } from "../components/account.screen.styles";
import {
  BackButtonView,
  FormView,
  LoginButtonSubmit,
  LoginErrorText,
  LogoView,
} from "../components/login.email.screen.styles";

const LoginEmailScreen = ({ navigation }) => {
  // use refs

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);
  // to be implemented
  const {
    error: authError,
    loading,
    login,
  } = useContext(AuthenticationContext);
  // log the refs
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <BackButtonView />
        <LogoView>
          <LogoImage />
        </LogoView>
        <FormView>
          <RoundedTextInput
            placeholder="email"
            onChange={(val) => (emailRef.current = val)}
          />
          <RoundedTextInput
            placeholder="password"
            secureTextEntry={true}
            onChange={(val) => (passwordRef.current = val)}
          />
          {error && <LoginErrorText>{error.message}</LoginErrorText>}
          <LoginButtonSubmit
            onPress={() => {
              login(emailRef.current, passwordRef.current);
            }}
            loading={loading}
          />
        </FormView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default LoginEmailScreen;
