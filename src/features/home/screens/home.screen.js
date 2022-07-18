import React from "react";
import styled from "styled-components/native";
import BackgroundView from "../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import { Text } from "react-native";

const TextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  color: white;
  font-size: 30px;
`;

const HomeScreen = () => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <TextView>
          <Text
            style={{ fontFamily: "Futura-Bold", color: "white", fontSize: 30 }}
          >
            Sup Batches
          </Text>
          <MainText> Hello Millionaires!</MainText>
        </TextView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
