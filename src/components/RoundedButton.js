import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import theme from "../infrastructure/theme";

const RoundedButton = ({
  colour = "green",
  text,
  fontSize = 40,
  normalBackgroundColor = "white",
  pressedBackgroundColor = "#C9C5C6",
  ...props
}) => {
  // getting the pressed background colour based on if its in the pallate or not
  const pressedBG = theme.colours.main[pressedBackgroundColor]
    ? theme.colours.main[pressedBackgroundColor]
    : pressedBackgroundColor;

  // getting the normal background colour based on if its in the pallate or not
  const normalBG = theme.colours.main[normalBackgroundColor]
    ? theme.colours.main[normalBackgroundColor]
    : normalBackgroundColor;

  // button styling
  const Button = styled(Pressable).attrs()`
    border-color: ${({ theme }) =>
      theme.colours.main[colour] ? theme.colours.main[colour] : colour};
    border-radius: 30px;
    border-width: 4px;
    background-color: ${normalBG};
    margin: 10px;
    height: 70px;
    width: 220px;
    justify-content: center;
    align-items: center;
    elevation: 10;
    box-shadow: 0px 6px rgba(0, 0, 0, 0.7);
  `;

  // text styling
  const Text = styled.Text`
    font-family: FuturaPTHeavy;
    font-size: ${fontSize}px;
    color: ${({ theme }) =>
      theme.colours.main[colour] ? theme.colours.main[colour] : colour};
  `;

  // passing text in the pressable
  return (
    <Button
      {...props}
      style={({ pressed }) => [
        pressed && { backgroundColor: pressedBG },
        props.style,
      ]}
    >
      <Text>{text}</Text>
    </Button>
  );
};

export default RoundedButton;
