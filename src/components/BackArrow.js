import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

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

const BackArrowPressable = (props) => {
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
