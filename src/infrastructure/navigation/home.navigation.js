import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../features/home/screens/home.screen";
import UsernameScreen from "../../features/home/screens/username.screen";
import { UserContext } from "../../services/user/user.context";
import HouseSelectionScreen from "../../features/home/screens/house-selection.screen";
import TutorialScreen from "../../features/home/screens/tutorial.screen";
import ViewPropertiesScreen from "../../features/home/screens/view-properties.screen";
import CardSwipeView from "../../components/CardSwipeView";
import ViewCardScreen from "../../features/home/screens/view-card.screen";
import TradeOptionsScreen from "../../features/home/screens/trade-options.screen";
import UserTradeScreen from "../../features/home/screens/user-trade.screen";
import ViewTradesScreen from "../../features/home/screens/view-trades.screen";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { user } = useContext(UserContext);
  const initialRoute = user.hasUsername
    ? user.hasHouse
      ? "Home"
      : "Tutorial"
    : "Username Selection";

  console.log(initialRoute, user);

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={initialRoute}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <HomeStack.Screen name="Username Selection" component={UsernameScreen} />
      <HomeStack.Screen
        name="House Selection"
        component={HouseSelectionScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <HomeStack.Screen
        name="Tutorial"
        component={TutorialScreen}
        options={{
          gestureEnabled: false,
        }}
      />
      <HomeStack.Screen
        name="View Properties"
        component={ViewPropertiesScreen}
      />
      <HomeStack.Screen name="View House" component={ViewCardScreen} />
      <HomeStack.Screen name="Trade Options" component={TradeOptionsScreen} />
      <HomeStack.Screen name="Find User Trade" component={UserTradeScreen} />
      <HomeStack.Screen name="View Trades" component={ViewTradesScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
