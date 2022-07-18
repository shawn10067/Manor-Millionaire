import React from "react";
import styled from "styled-components/native";
import BackgroundView from "../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";

const TextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  color: white;
  font-family: "Futura";
`;

const HomeScreen = () => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <TextView>
          <MainText>Hello Millionaires!</MainText>
        </TextView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
