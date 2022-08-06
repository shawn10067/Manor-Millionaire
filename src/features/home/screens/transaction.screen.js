import React from "react";
import LottieAnimation from "../../../components/LottieAnimation";
import styled from "styled-components/native";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import { Text } from "react-native";

const AnimationContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const TransactionAnimation = styled(LottieAnimation).attrs({
  source: require("../../../../assets/transaction.json"),
})`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const TransactionText = styled(Text)`
  font-size: 30px;
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  text-align: center;
  margin: 8px;
  margin-bottom: 80px;
`;

const TransactionScreen = ({ navigation }) => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <AnimationContainer>
          <TransactionAnimation>
            <TransactionText>Transaction in progress...</TransactionText>
          </TransactionAnimation>
        </AnimationContainer>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default TransactionScreen;
