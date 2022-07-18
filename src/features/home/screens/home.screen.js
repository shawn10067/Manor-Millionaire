import React from "react";
import styled from "styled-components/native";
import BackgroundView from "../components/BackgroundView";
import SafeAreaView from "../../../components/SafeAreaView";
import RoundedButton from "../../../components/RoundedButton";

const TextView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MainText = styled.Text`
  color: white;
  font-size: 60px;
  font-family: FuturaPT;
`;

const WideRoundButton = styled(RoundedButton)`
  width: 30%;
  height: 50px;
`;

const HomeScreen = () => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <TextView>
          <MainText>Email</MainText>
          <WideRoundButton
            text="W"
            colour="blue"
            onPress={() => console.log("Sent")}
            fontSize={30}
          />
        </TextView>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default HomeScreen;
