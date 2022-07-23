import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../../features/account/screens/account.screen";

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
    </AccountStack.Navigator>
  );
};

export default AccountNavigator;
