import React from "react";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";

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
  justify-content: flex-start;
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
            <RoundedButton
              text="Send"
              colour="blue"
              onPress={() => navigation.navigate("Find User Trade")}
            />
            <RoundedButton
              text="View"
              colour="blue"
              onPress={() => navigation.navigate("View Trades")}
            />
          </OptionsContainer>
        </TradeOptionsView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default TradeOptionsScreen;
