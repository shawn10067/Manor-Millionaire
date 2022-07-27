import React from "react";
import theme from "../infrastructure/theme";
import styled from "styled-components/native";
import { TextInput } from "react-native";

const RoundedTextInput = ({
  textColour = "black",
  backgroundColour = "white",
  borderColour = "green",
  placeholderColour = "grey",
  ...props
}) => {
  // getting the text colour based on if its in the pallate or not
  const text = theme.colours.main[textColour]
    ? theme.colours.main[textColour]
    : textColour;

  // getting the background colour based on if its in the pallate or not
  const background = theme.colours.main[backgroundColour]
    ? theme.colours.main[backgroundColour]
    : backgroundColour;

  // getting the border background colour based on if its in the pallate or not
  const border = theme.colours.main[borderColour]
    ? theme.colours.main[borderColour]
    : borderColour;

  // getting the place holder colour based on if its in the pallate or not
  const placeHolder = theme.colours.main[placeholderColour]
    ? theme.colours.main[placeholderColour]
    : placeholderColour;

  const RoundedTextInputBase = styled(TextInput).attrs({
    placeholderTextColor: placeHolder,
    disableFullscreenUI: true,
    autoCapitalize: "none",
    autoCorrect: false,
  })`
    height: 60px;
    width: 80%;
    background-color: ${background};
    border: 4px solid ${border};
    border-radius: 20px;
    padding: 10px;
    padding-left: 15px;
    font-size: 25px;
    font-family: FuturaPTHeavy;
    margin: 10px;
    color: ${text};
  `;

  return <RoundedTextInputBase {...props} />;
};

export default RoundedTextInput;
