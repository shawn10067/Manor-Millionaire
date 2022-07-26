import React from "react";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import {
  BackButtonView,
  FormView,
  LogoView,
} from "../components/login.email.screen.styles";

const LoginEmailScreen = ({ navigation }) => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <BackButtonView />
        <LogoView />
        <FormView />
      </SafeAreaView>
    </BackgroundView>
  );
};

export default LoginEmailScreen;
