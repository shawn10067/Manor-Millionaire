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
import ViewTradeCardScreen from "../../features/home/screens/view-trade-card.screen";
import MyPropertiesTradeScreen from "../../features/home/screens/my-properties.screen";
import TheirPropertiesTradeScreen from "../../features/home/screens/their-properties.screen";
import MyCashTradeScreen from "../../features/home/screens/my-cash.screen";
import TheirCashTradeScreen from "../../features/home/screens/their-cash.screen";
import ReviewTradeScreen from "../../features/home/screens/review-trade.screen";
import TransactionScreen from "../../features/home/screens/transaction.screen";
import TransactionSuccessScreen from "../../features/home/screens/transaction-success.screen";
import TransactionFailScreen from "../../features/home/screens/transaction-failed.screen";
import BankruptcyPropertyScreen from "../../features/home/screens/bankruptcy-properties.screen";
import BankruptcyOptionsScreen from "../../features/home/screens/bankruptcy-options.screen";
import ViewBankruptCardScreen from "../../features/home/screens/view-bankrupt-card.screen";
import ReviewManagePropertiesTradeScreen from "../../features/home/screens/review-manage-properties.screen";
import SpinIdleScreen from "../../features/home/screens/spin-idle.screen";
import JailScreen from "../../features/home/screens/jail.screen";
import LandedPropertyScreen from "../../features/home/screens/landed-on-property.screen";
import SettingsScreen from "../../features/home/screens/settings.screen";
import FriendsOptionsScreen from "../../features/home/screens/friends-options.screen";
import ViewFriendsScreen from "../../features/home/screens/user-friends.screen";
import ViewFriendRequestsScreen from "../../features/home/screens/view-requests.screen";
import AddFriendsScreen from "../../features/home/screens/add-friend.screen";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  const { user } = useContext(AuthenticationContext);
  const initialRoute =
    user &&
    (user.hasUsername
      ? user.hasHouse
        ? "Home"
        : "Tutorial"
      : "Username Selection");

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
      <HomeStack.Screen name="Trade Options" component={TradeOptionsScreen} />
      <HomeStack.Screen name="Find User Trade" component={UserTradeScreen} />
      <HomeStack.Screen
        name="My Trade Properties"
        component={MyPropertiesTradeScreen}
      />
      <HomeStack.Screen name="My Trade Cash" component={MyCashTradeScreen} />
      <HomeStack.Screen
        name="Their Trade Properties"
        component={TheirPropertiesTradeScreen}
      />
      <HomeStack.Screen
        name="Their Trade Cash"
        component={TheirCashTradeScreen}
      />
      <HomeStack.Screen name="View Trades" component={ViewTradesScreen} />
      <HomeStack.Screen name="Review Trade" component={ReviewTradeScreen} />
      <HomeStack.Screen name="View House" component={ViewCardScreen} />
      <HomeStack.Screen name="Transaction" component={TransactionScreen} />
      <HomeStack.Screen
        name="Transaction Success"
        component={TransactionSuccessScreen}
      />
      <HomeStack.Screen
        name="Transaction Fail"
        component={TransactionFailScreen}
      />
      <HomeStack.Screen
        name="View Trade Card"
        component={ViewTradeCardScreen}
      />
      <HomeStack.Screen
        name="Bankruptcy Options"
        component={BankruptcyOptionsScreen}
      />
      <HomeStack.Screen
        name="Bankruptcy Properties"
        component={BankruptcyPropertyScreen}
      />
      <HomeStack.Screen
        name="View Bankrupt Property"
        component={ViewBankruptCardScreen}
      />
      <HomeStack.Screen
        name="Review Manage Properties Trade"
        component={ReviewManagePropertiesTradeScreen}
      />
      <HomeStack.Screen name="Spin Idle Screen" component={SpinIdleScreen} />
      <HomeStack.Screen name="Jail Screen" component={JailScreen} />
      <HomeStack.Screen
        name="Landed Property Screen"
        component={LandedPropertyScreen}
      />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
      <HomeStack.Screen
        name="Friends Options"
        component={FriendsOptionsScreen}
      />
      <HomeStack.Screen name="View Friends" component={ViewFriendsScreen} />
      <HomeStack.Screen
        name="View Friend Requests"
        component={ViewFriendRequestsScreen}
      />
      <HomeStack.Screen name="Add Friends" component={AddFriendsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
