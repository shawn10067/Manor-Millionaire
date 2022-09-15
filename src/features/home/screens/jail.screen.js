import React, { useEffect } from "react";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import styled from "styled-components/native";
import LottieAnimation from "../../../components/LottieAnimation";
import RoundedButton from "../../../components/RoundedButton";

const HandcuffLottieView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const HandcuffLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/handcuff.json"),
})`
  width: 90%;
  height: 40%;
`;

const HandcuffText = styled.Text`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 26px;
  text-align: center;
  width: 100%;
  padding: 20px;
`;
const HandcuffTextRed = styled.Text`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.red};
  font-size: 26px;
  text-align: center;
  width: 100%;
  padding: 20px;
`;

const BailButton = styled(RoundedButton)`
  width: 70%;
  height: 70px;
`;

const ContinueButton = styled(RoundedButton)`
  width: 70%;
  height: 70px;
`;

const JailScreen = ({ navigation }) => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <HandcuffLottieView>
          <HandcuffLottie loopStatus={false} />
          <HandcuffText>
            {"You've been arrested and your "}
            <HandcuffTextRed>properties have been frozen!</HandcuffTextRed> You
            must stay in prison for the next{" "}
            <HandcuffTextRed>12 hours.</HandcuffTextRed>
          </HandcuffText>
          <ContinueButton
            text="Continue"
            colour="blue"
            onPress={() => navigation.navigate("Home")}
          />
          <BailButton
            text="Bail"
            colour="green"
            onPress={() => navigation.navigate("Transaction")}
          />
        </HandcuffLottieView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default JailScreen;
