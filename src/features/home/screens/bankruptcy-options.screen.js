import React from "react";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";

const BankruptcyOptionsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BankruptLottieContainer = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BankruptTextContainer = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BankruptcyText = styled.Text`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 30;
  width: 100%;
  text-align: center;
`;

const OptionsContainer = styled.View`
  flex: 0.4;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const BankruptLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/bankrupt.json"),
})`
  width: 70%;
  height: 70%;
`;

// remove the trade options from this component and implement the bankrupcy options from figma
const BankruptcyOptionsScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <BankruptcyOptionsView>
          <BankruptLottieContainer>
            <BankruptLottie />
          </BankruptLottieContainer>
          <BankruptTextContainer>
            <BankruptcyText>
              💩, you're bankrupt. All your assets have been frozen.
            </BankruptcyText>
          </BankruptTextContainer>
          <OptionsContainer>
            <RoundedButton
              text="Manage Properties"
              colour="green"
              onPress={() => navigation.navigate("Bankruptcy Properties")}
              fontSize={21}
            />
            <RoundedButton
              text="Pay Fee"
              colour="green"
              onPress={() => navigation.navigate("Home")}
              fontSize={21}
            />
            <RoundedButton
              text="Declare Bankruptsy"
              colour="red"
              onPress={() => navigation.navigate("Home")}
              fontSize={21}
            />
          </OptionsContainer>
        </BankruptcyOptionsView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default BankruptcyOptionsScreen;
