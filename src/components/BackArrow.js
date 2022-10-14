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

const BackButtonIcon = styled(RoundedButtonIcon).attrs({
  name: "backburger",
  colour: "blue",
})`
  position: absolute;
  height: 60px;
  width: 90px;
  bottom: 50px;
  left: 8px;
`;

const BackArrowPressable = (props) => {
  return <BackButtonIcon {...props} />;
  return (
    <BackArrowView>
      <Pressable
        {...props}
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="arrow-left" color="black" size={50} />
      </Pressable>
    </BackArrowView>
  );
};

export default BackArrowPressable;
