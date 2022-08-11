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
  resizeMode: "contain",
})`
  height: 100%;
  width: 100%;
`;

const TutorialScreen = ({ navigation, route }) => {
  const picture = route.params && route.params.picture;

  setTimeout(() => {
    if (!picture) {
      navigation.navigate("House Selection");
    } else {
      navigation.navigate("Home");
    }
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
