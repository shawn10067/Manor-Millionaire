import React, { useContext } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import NotiIcon from "react-native-vector-icons/MaterialIcons";
import AnimationFadeInOut from "../../../components/AnimationFadeInOut";
import BackgroundView from "../../../components/BackgroundView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaView from "../../../components/SafeAreaView";
import theme from "../../../infrastructure/theme";
import { TradeContext } from "../../../services/trade/trade.context";
import {
  CenterView,
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
import { Pressable } from "react-native";

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
    console.log(bankruptTrade);
  };

  const RunOnSpinReached = () => {
    setHasSpun(false);
    console.log("spin time activated");
  };

  return (
    <BackgroundView>
      <SafeAreaView>
        <MapView>
          <MenuView>
            <Pressable
              onPress={() => navigation.navigate("View Trades")}
              style={{
                backgroundColor: "green",
              }}
            >
              <Icon name="menu" size={56} color={theme.colours.main.white} />
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("Pressed");
                setBankruptTrade({
                  properties: [],
                });
                navigation.navigate("Bankruptcy Properties");
              }}
              style={{
                backgroundColor: "blue",
              }}
            >
              <Icon
                name="home-edit-outline"
                size={40}
                color={theme.colours.main.blue}
              />
            </Pressable>
          </MenuView>
          <MoneyCounter />
          <MapLottie
            source={require("../../../../assets/globe.json")}
            speed={0.5}
          >
            <AnimationFadeInOut>
              <CenterView>
                <PropertiesButton
                  text="View Properties"
                  colour="red"
                  fontSize={25}
                  onPress={() => navigation.navigate("View Properties")}
                />
                <TradeButton
                  onPress={() => navigation.navigate("Trade Options")}
                  fontSize={30}
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
