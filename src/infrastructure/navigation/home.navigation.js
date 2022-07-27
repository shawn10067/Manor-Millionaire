import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../features/home/screens/home.screen";
import UsernameScreen from "../../features/home/screens/username.screen";
import { UserContext } from "../../services/user/user.context";
import HouseSelectionScreen from "../../features/home/screens/house-selection.screen";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { user } = useContext(UserContext);
  const initialRoute = user.hasUsername
    ? user.hasHouse
      ? "Home"
      : "House Selection"
    : "Username Selection";

  console.log(initialRoute, user);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Username Selection" component={UsernameScreen} />
      <HomeStack.Screen
        name="House Selection"
        component={HouseSelectionScreen}
        options={{
          gestureEnabled: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
