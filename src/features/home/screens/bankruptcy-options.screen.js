import React, { useContext } from "react";
import styled from "styled-components/native";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";

const BankruptcyOptionsView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const BankruptLottieContainer = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BankruptTextContainer = styled.View`
  flex: 0.2;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const BankruptcyText = styled.Text`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 24px;
  width: 100%;
  text-align: center;
`;

const OptionsContainer = styled.View`
  flex: 0.5;
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
  const { setBankruptTrade } = useContext(BankruptcyContext);

  const startBankruptcyPropertiesSelection = () => {
    setBankruptTrade({
      properties: [],
    });
    navigation.navigate("Bankruptcy Properties");
  };

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <BankruptcyOptionsView>
          <BankruptLottieContainer>
            <BankruptLottie />
          </BankruptLottieContainer>
          <BankruptTextContainer>
            <BankruptcyText>
              💩, you're bankrupt. All your assets and properties have been
              frozen.
            </BankruptcyText>
          </BankruptTextContainer>
          <OptionsContainer>
            <RoundedButton
              text="Manage Properties"
              colour="green"
              onPress={startBankruptcyPropertiesSelection}
              fontSize={21}
            />
            <RoundedButton
              text="Pay Fee"
              colour="green"
              onPress={() => navigation.navigate("Home")}
              fontSize={21}
            />
            <RoundedButton
              text="Declare Bankruptcy"
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
