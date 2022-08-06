import React from "react";
import LottieAnimation from "../../../components/LottieAnimation";
import styled from "styled-components/native";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import { Text } from "react-native";

// animation container
const AnimationContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// transaction failed lottie animation using transaction-failed.json
const TransactionFailAnimation = styled(LottieAnimation).attrs({
  source: require("../../../../assets/transaction-failed.json"),
  loopStatus: false,
})`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

// red transaction failed text
const TransactionFailText = styled(Text)`
  font-size: 30px;
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.red};
  text-align: center;
  margin-bottom: 80px;
`;

// transaction fail screen
const TransactionFailScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Home");
  }, 3500);

  return (
    <BackgroundView>
      <SafeAreaView>
        <AnimationContainer>
          <TransactionFailAnimation>
            <TransactionFailText>Transaction failed...</TransactionFailText>
          </TransactionFailAnimation>
        </AnimationContainer>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default TransactionFailScreen;
