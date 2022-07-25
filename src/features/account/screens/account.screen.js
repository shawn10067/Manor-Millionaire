import React from "react";
import BackgroundView from "../../../components/BackgroundView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import {
  AccountOptionsView,
  GlobeView,
  LoginButton,
  LogoView,
  PlaneView,
  SignUpButton,
} from "../components/account.screen.styles";

const AccountScreen = () => {
  return (
    <BackgroundView>
      <LogoView />
      <GlobeView />
      <PlaneView />
      <AccountOptionsView>
        <LoginButton />
        <SignUpButton />
      </AccountOptionsView>
    </BackgroundView>
  );
};

export default AccountScreen;
