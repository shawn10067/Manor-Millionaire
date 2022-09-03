import React, { useContext } from "react";
import AccountNavigator from "./account.navigation";
import HomeNavigator from "./home.navigation";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Navigation = ({ playSound }) => {
  const { user } = useContext(AuthenticationContext);

  const ReturnNavigator = user ? <HomeNavigator /> : <AccountNavigator />;

  return ReturnNavigator;
};

export default Navigation;
