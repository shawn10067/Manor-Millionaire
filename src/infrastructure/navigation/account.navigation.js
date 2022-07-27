import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../features/account/screens/account.screen";
import LoginScreenApple from "../../features/account/screens/login.screen.apple";
import LoginEmailScreen from "../../features/account/screens/login.screen.email";
import SignUpScreenApple from "../../features/account/screens/signup.screen.apple";
import SignUpEmailScreen from "../../features/account/screens/signup.screen.email";

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
      <AccountStack.Screen name="Apple Login" component={LoginScreenApple} />
      <AccountStack.Screen name="Email Login" component={LoginEmailScreen} />
      <AccountStack.Screen name="Email Signup" component={SignUpEmailScreen} />
      <AccountStack.Screen name="Apple Signup" component={SignUpScreenApple} />
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
