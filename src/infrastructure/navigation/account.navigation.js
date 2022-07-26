import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../features/account/screens/account.screen";
import LoginScreenApple from "../../features/account/screens/login.screen.apple";

const AccountStack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Account Options"
    >
      <AccountStack.Screen name="Account Options" component={AccountScreen} />
      <AccountStack.Screen name="Login Apple" component={LoginScreenApple} />
      <AccountStack.Screen name="Login Email" component={LoginScreenApple} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
