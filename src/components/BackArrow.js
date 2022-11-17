import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import RoundedButtonIcon from "./RoundedButtonIcon";

export const BackArrowView = styled.View`
  width: 27%;
  height: 50px;
  margin: 10px;
  background-color: aliceblue;
  justify-content: center;
  align-items: center;
  elevation: 10;
  box-shadow: 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
`;

const BackArrowPressable = styled(RoundedButtonIcon).attrs({
  name: "arrow-left",
  colour: "blue",
})`
  height: 60px;
  width: 90px;
`;

export const FrontArrowPressable = styled(RoundedButtonIcon).attrs({
  name: "arrow-right",
  colour: "blue",
})`
  height: 60px;
  width: 90px;
`;

export default BackArrowPressable;
