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
  MapContentView,
  MapLottie,
  MenuView,
  PropertiesButton,
  SpinRoundedButton,
  TradeButton,
} from "../components/home.screen.styles";
import MapView from "react-native-maps";
import SpinButtonProgressBar from "../../../components/SpinButtonProgressBar";
import { SpinContext } from "../../../services/spin/spin.context";
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";
import styled from "styled-components/native";
import RoundedButtonIcon from "../../../components/RoundedButtonIcon";

const BackGroundMapView = styled(MapView)`
  height: 100%;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 10px;
`;

const HomeScreen = ({ navigation }) => {
  const { setBankruptTrade } = useContext(BankruptcyContext);

  const { nextSpinTime, previousSpinTime, hasSpun } = useContext(SpinContext);
  const onSpinPress = () => {
    // TODO: update spin pressed when user is done the whole spin process
    console.log("spin pressed");

    // in reality, update this state when spin flow is done (finish later)
    navigation.navigate("Spin Idle Screen");
  };

  const MenuButton = styled(RoundedButtonIcon)`
    width: 80px;
    height: 80px;
  `;

  return (
    <BackgroundView>
      <BackGroundMapView>
        <CenterView>
          <MenuButton
            name="menu"
            fontSize={56}
            color={theme.colours.main.white}
          />
          <MenuView>
            <IconView onPress={() => navigation.navigate("Settings")}>
              <RoundedButtonIcon
                name="menu"
                fontSize={56}
                color={theme.colours.main.white}
              />
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
        </CenterView>
        <MoneyCounter />
      </BackGroundMapView>
    </BackgroundView>
  );
};

/* the former menu

            <AnimationFadeInOut>
              <CenterView style={{ backgroundColor: "blue" }}>
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
            */

export default HomeScreen;
