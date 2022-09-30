import React, { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AnimationFadeInOut from "../../../components/AnimationFadeInOut";
import BackgroundView from "../../../components/BackgroundView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaView from "../../../components/SafeAreaView";
import theme from "../../../infrastructure/theme";
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
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";
import { useLazyQuery } from "@apollo/client";
import { GET_SPIN_OUTCOME } from "../../../../graphql/queries";

const HomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { setBankruptTrade } = useContext(BankruptcyContext);
  const [getSpinOutcome, { data: spinData, loading: spinLoading }] =
    useLazyQuery(GET_SPIN_OUTCOME, {
      fetchPolicy: "no-cache",
    });

  const { nextSpinTime, previousSpinTime, hasSpun } = useContext(SpinContext);

  useEffect(() => {
    if (spinData) {
      const { spin } = spinData;
      console.log("spin data ", spin);
    }
  }, [spinData]);

  useEffect(() => {
    if (spinLoading) {
      setLoading(true);
    } else if (loading && !spinLoading) {
      setLoading(false);
    }
  }, [spinLoading]);

  const onSpinPress = () => {
    // TODO: update spin pressed when user is done the whole spin process
    console.log("spin pressed");
    // in reality, update this state when spin flow is done (finish later)

    getSpinOutcome();
    // navigation.navigate("Spin Idle Screen");
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
          ></SpinButtonProgressBar>
          <SpinRoundedButton
            onPress={onSpinPress}
            disabled={hasSpun}
            loading={loading}
          />
        </MapView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
