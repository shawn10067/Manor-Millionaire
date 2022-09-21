import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AnimationFadeInOut from "../../../components/AnimationFadeInOut";
import BackgroundView from "../../../components/BackgroundView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaView from "../../../components/SafeAreaView";
import theme from "../../../infrastructure/theme";
import { TradeContext } from "../../../services/trade/trade.context";
import {
  CenterView,
  FriendsButton,
  IconView,
  MapLottie,
  MapView,
  MenuView,
  PropertiesButton,
  SpinRoundedButton,
  TradeButton,
} from "../components/home.screen.styles";
import SpinButtonProgressBar from "../../../components/SpinButtonProgressBar";
import { SpinContext } from "../../../services/spin/spin.context";
import SpinProgress from "../components/SpinProgress";
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";

const HomeScreen = ({ navigation }) => {
  const { trade } = useContext(TradeContext);

  const { bankruptTrade, setBankruptTrade } = useContext(BankruptcyContext);

  const {
    updateNextSpinTime,
    updatePreviousSpinTime,
    nextSpinTime,
    previousSpinTime,
    setHasSpun,
    hasSpun,
  } = useContext(SpinContext);

  const onSpinPress = () => {
    // in reality, update this state when spin flow is done (finish later)
    setHasSpun(true);

    updateNextSpinTime();
    updatePreviousSpinTime();

    setTimeout(() => setHasSpun(false), 1000);

    navigation.navigate("Spin Idle Screen");
    console.log("-------bankrupt");
    console.log(bankruptTrade);
    console.log("-------trade");
    console.log(trade);
  };

  const RunOnSpinReached = () => {
    setHasSpun(false);
  };

  return (
    <BackgroundView>
      <SafeAreaView>
        <MapView>
          <MenuView>
            <IconView onPress={() => navigation.navigate("Settings")}>
              <Icon name="menu" size={56} color={theme.colours.main.white} />
            </IconView>
            <IconView
              onPress={() => {
                setBankruptTrade({
                  properties: [],
                });
                navigation.navigate("Bankruptcy Properties");
              }}
            >
              <Icon
                name="home-edit-outline"
                size={40}
                color={theme.colours.main.blue}
              />
            </IconView>
          </MenuView>
          <MoneyCounter />
          <MapLottie
            source={require("../../../../assets/earth-plane.json")}
            speed={0.5}
          >
            <AnimationFadeInOut>
              <CenterView>
                <TradeButton
                  onPress={() => navigation.navigate("Trade Options")}
                  fontSize={30}
                />
                <FriendsButton
                  onPress={() => navigation.navigate("Friends Options")}
                  fontSize={30}
                />
                <PropertiesButton
                  text="Properties"
                  colour="red"
                  fontSize={30}
                  onPress={() => navigation.navigate("View Properties")}
                />
              </CenterView>
            </AnimationFadeInOut>
          </MapLottie>
          <SpinButtonProgressBar
            timeTill={nextSpinTime.getTime()}
            startTime={previousSpinTime.getTime()}
          >
            <SpinProgress RunOnSpinReached={RunOnSpinReached} />
          </SpinButtonProgressBar>
          <SpinRoundedButton onPress={() => onSpinPress()} disabled={hasSpun} />
        </MapView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
