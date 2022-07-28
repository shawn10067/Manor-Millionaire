import React, { useContext } from "react";
import { Text } from "react-native";
import AnimatedNumbers from "react-native-animated-numbers";
import styled from "styled-components/native";
import theme from "../infrastructure/theme";
import { UserContext } from "../services/user/user.context";
import SafeAreaView from "./SafeAreaView";

const MoneyView = styled.View`
  width: 195px;
  height: 35px;
  background-color: ${({ theme }) => theme.colours.main.white};
  border-radius: 5px;
  position: absolute;
  top: 5px;
  right: 5px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

const CashText = styled(Text)`
  font-family: "FuturaPTHeavy";
  font-size: 20;
  color: ${({ theme }) => theme.colours.main.green};
`;

const MoneyCounter = () => {
  const { user } = useContext(UserContext);
  return (
    <MoneyView>
      <CashText>$</CashText>
      <AnimatedNumbers
        includeComma
        animateToNumber={user.cash}
        fontStyle={{
          fontSize: 20,
          fontFamily: "FuturaPTHeavy",
          color: theme.colours.main.green,
        }}
      />
    </MoneyView>
  );
};

export default MoneyCounter;
