import React from "react";
import BackgroundView from "./BackgroundView";
import SafeAreaView from "./SafeAreaView";
import Card from "./Card";
import { property } from "../services/property/property.service";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../infrastructure/theme";
import { Text, View } from "react-native";

export const CardSwipeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CardText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colours.main.white};
`;

const SwipeItemsContainer = styled.View`
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const CardSwipeView = ({
  swipeUp = true,
  swipeDown = true,
  onSwipeUp = () => console.log("swiped up"),
  onSwipeDown = () => console.log("swiped down"),
  upMessage = "buy",
  downMessage = "decline",
}) => {
  return (
    <CardSwipeContainer>
      {swipeUp && (
        <SwipeItemsContainer>
          <View />
          <Icon name="arrow-up" color={theme.colours.main.green} size={40} />
          <CardText>{upMessage}</CardText>
        </SwipeItemsContainer>
      )}
      <Card
        property={property}
        swipeUp={swipeUp}
        swipeDown={swipeDown}
        onSwipeUp={onSwipeUp}
        onSwipeDown={onSwipeDown}
      />
      {swipeDown && (
        <SwipeItemsContainer>
          <View />
          <Icon name="arrow-down" color={theme.colours.main.red} size={40} />
          <CardText>{downMessage}</CardText>
        </SwipeItemsContainer>
      )}
    </CardSwipeContainer>
  );
};

export default CardSwipeView;
