import React, { useContext } from "react";
import AccountNavigator from "./account.navigation";
import HomeNavigator from "./home.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Navigation = ({ playSound }) => {
  const { firebaseIdToken } = useContext(AuthenticationContext);

  const ReturnNavigator = firebaseIdToken ? (
    <HomeNavigator />
  ) : (
    <AccountNavigator />
  );

  return ReturnNavigator;
};

export default Navigation;
