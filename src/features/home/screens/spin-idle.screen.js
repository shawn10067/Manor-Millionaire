import React, { useEffect } from "react";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import styled from "styled-components/native";
import LottieAnimation from "../../../components/LottieAnimation";

const WorldTourLottieView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const WorldTourLottie = styled(LottieAnimation).attrs({
  source: require("../../../../assets/world-tour.json"),
})`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

const WorldTourText = styled.Text`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 30px;
  text-align: center;
  width: 100%;
`;

const SpinIdleScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Bankruptcy Options");
    }, 3000);
  }, []);
  return (
    <BackgroundView>
      <SafeAreaView>
        <WorldTourLottieView>
          <WorldTourLottie>
            <WorldTourText>Finding your next spot.</WorldTourText>
          </WorldTourLottie>
        </WorldTourLottieView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default SpinIdleScreen;
