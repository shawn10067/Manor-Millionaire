import React from "react";
import SafeAreaAccountView from "../../../components/SafeAreaAccountView";
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
    <SafeAreaAccountView>
      <LogoView />
      <GlobeView />
      <PlaneView />
      <AccountOptionsView>
        <LoginButton />
        <SignUpButton />
      </AccountOptionsView>
    </SafeAreaAccountView>
  );
};

export default AccountScreen;
