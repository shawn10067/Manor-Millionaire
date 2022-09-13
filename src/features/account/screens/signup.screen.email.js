import React, { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import BackgroundView from "../../../components/BackgroundView";
import RoundedTextInput from "../../../components/RoundedTextInput";
import SafeAreaView from "../../../components/SafeAreaView";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LogoImage } from "../components/account.screen.styles";
import {
  BackButtonView,
  CreateButtonSubmit,
  FormView,
  LoginErrorText,
  LogoView,
} from "../components/login.email.screen.styles";

const SignUpEmailScreen = ({ navigation }) => {
  const [error, setError] = useState(null);
  const {
    error: authError,
    createFirebaseAccount,
    loading,
  } = useContext(AuthenticationContext);

  // setting error state when authError is set
  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  // holding ref for email, password and repeatedPassword
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatedPasswordRef = useRef();

  // on create
  const onCreate = () => {
    createFirebaseAccount(
      emailRef.current,
      passwordRef.current,
      repeatedPasswordRef.current
    );
  };

  return (
    <BackgroundView>
      <SafeAreaView>
        <BackButtonView />
        <LogoView>
          <LogoImage />
        </LogoView>
        <FormView>
          <RoundedTextInput
            placeholder="email"
            onChange={(text) => (emailRef.current = text)}
          />
          <RoundedTextInput
            placeholder="password"
            secureTextEntry={true}
            onChange={(val) => (passwordRef.current = val)}
          />
          <RoundedTextInput
            placeholder="repeat password"
            secureTextEntry={true}
            onChange={(val) => (repeatedPasswordRef.current = val)}
          />
          {error && <LoginErrorText>{error.message}</LoginErrorText>}
          <CreateButtonSubmit onPress={onCreate} loading={loading} />
        </FormView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default SignUpEmailScreen;
