import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";
import BackgroundView from "../../../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";

const DemoImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const DemoImage = styled(Image).attrs({
  source: require("../../../../assets/flip-demo.png"),
})`
  height: 100%;
  width: 100%;
`;

const TutorialScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("House Selection");
  }, 8000);
  return (
    <BackgroundView>
      <SafeAreaView>
        <DemoImageContainer>
          <DemoImage />
        </DemoImageContainer>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default TutorialScreen;
