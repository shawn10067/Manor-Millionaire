import React from "react";
import LottieAnimation from "../../../components/LottieAnimation";
import styled from "styled-components/native";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";

// animation container
const AnimationContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// transaction success lottie animation using transaction-success.json
const TransactionSuccessAnimation = styled(LottieAnimation).attrs({
  source: require("../../../../assets/transaction-success.json"),
  loopStatus: false,
})`
  width: 100%;
  height: 100%;
`;

// transaction success screen
const TransactionSuccessScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Home");
  }, 6500);

  return (
    <BackgroundView>
      <SafeAreaView>
        <AnimationContainer>
          <TransactionSuccessAnimation />
        </AnimationContainer>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default TransactionSuccessScreen;
