import React from "react";
import styled from "styled-components/native";
import BackgroundView from "../../../components/BackgroundView";
import MoneyCounter from "../../../components/MoneyCounter";
import SafeAreaView from "../../../components/SafeAreaView";
import {
  CenterView,
  MapLottie,
  MapView,
  PropertiesButton,
} from "../components/home.screen.styles";

const HomeScreen = () => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <MapView>
          <MoneyCounter />
          <MapLottie source={require("../../../../assets/globe.json")}>
            <CenterView>
              <PropertiesButton
                text="View Properties"
                colour="red"
                fontSize={25}
              />
            </CenterView>
          </MapLottie>
        </MapView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
