import React from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { BackArrowView } from "../components/view-properties.screen.styles";

const TradeOptionsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NetworkLottieContainer = styled.View`
  flex: 0.6;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const OptionsContainer = styled.View`
  flex: 0.4;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NetworkLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/network.json"),
})`
  width: 100%;
  height: 100%;
`;

const TradeOptionsScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <TradeOptionsView>
          <NetworkLottieContainer>
            <NetworkLottie />
          </NetworkLottieContainer>
          <OptionsContainer>
            <RoundedButton text="Send" colour="blue" />
            <RoundedButton text="View" colour="blue" />
          </OptionsContainer>
        </TradeOptionsView>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrowView>
            <Icon name="arrow-left" color="black" size={30} />
          </BackArrowView>
        </Pressable>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default TradeOptionsScreen;
