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
  font-size: 60px;
  font-family: FuturaPT;
`;

const HomeScreen = () => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <TextView>
          <MainText>Email</MainText>
        </TextView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
