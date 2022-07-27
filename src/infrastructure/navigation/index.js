import React, { useContext } from "react";
import AccountNavigator from "./account.navigation";
import HomeNavigator from "./home.navigation";
import { UserContext } from "../../services/user/user.context";

const Navigation = () => {
  const { user } = useContext(UserContext);
  const ReturnNavigator = user ? <HomeNavigator /> : <AccountNavigator />;

  return ReturnNavigator;
};

export default Navigation;
