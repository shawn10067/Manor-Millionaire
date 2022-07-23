import React from "react";
import AccountNavigator from "./account.navigation";
import HomeNavigator from "./home.navigation";

const Navigation = () => {
  const userSignedIn = false;
  const ReturnNavigator = userSignedIn ? (
    <HomeNavigator />
  ) : (
    <AccountNavigator />
  );

  return ReturnNavigator;
};

export default Navigation;
