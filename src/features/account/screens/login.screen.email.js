import React, { useContext, useState } from "react";
import BackgroundView from "../../../components/BackgroundView";
import RoundedTextInput from "../../../components/RoundedTextInput";
import SafeAreaView from "../../../components/SafeAreaView";
import { UserContext } from "../../../services/user/user.context";
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
  const { setUser } = useContext(UserContext);
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
              setError(null);
              setUser({ hasUsername: true, hasHouse: true, cash: 200000000 });
            }}
          />
        </FormView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default LoginEmailScreen;
