import React from "react";
import { Pressable } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import theme from "../infrastructure/theme";
import * as Haptics from "expo-haptics";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RoundedButtonIcon = ({
  colour = "green",
  name,
  fontSize = 40,
  normalBackgroundColor = "white",
  pressedBackgroundColor = "#C9C5C6",
  shadow = true,
  loading = false,
  onPress = null,
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
    border-radius: 25px;
    border-width: 4px;
    background-color: ${normalBG};
    margin: 10px;
    height: 70px;
    width: 220px;
    justify-content: center;
    align-items: center;
    ${shadow && `elevation: 10;`};
    ${shadow && `box-shadow: 0px 6px rgba(0, 0, 0, 0.7)`};
  `;

  const SpecificIcon = styled(Icon).attrs({
    name,
    size: fontSize,
  })`
    width: 100%;
    height: 100%;
    color: ${({ theme }) =>
      theme.colours.main[colour] ? theme.colours.main[colour] : colour};
    justify-content: center;
    align-items: center;
  `;

  const CustomActivityIndicator = styled(ActivityIndicator).attrs({
    color: theme.colours.main[colour] ? theme.colours.main[colour] : colour,
    size: fontSize - 5,
  })`
    height: 100%;
  `;

  const onButtonPress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.selectionAsync);
    onPress && onPress();
  };

  // passing text in the pressable
  return (
    <Button
      {...props}
      style={({ pressed }) => [
        pressed && { backgroundColor: pressedBG },
        props.style,
      ]}
      disabled={loading}
      onPress={onButtonPress}
    >
      {loading ? <CustomActivityIndicator /> : <SpecificIcon />}
    </Button>
  );
};

export default RoundedButtonIcon;
