import React from "react";
import BackgroundView from "./BackgroundView";
import SafeAreaView from "./SafeAreaView";
import Card from "./Card";
import { property } from "../services/property/property.service";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../infrastructure/theme";

export const CardSwipeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const CardSwipeView = ({
  swipeUp = true,
  swipeDown = true,
  onSwipeUp = () => console.log("swiped up pussay"),
  onSwipeDown = () => console.log("swiped down pussay"),
  upMessage = "buy",
  downMessage = "decline",
}) => {
  return (
    <BackgroundView>
      <SafeAreaView>
        <CardSwipeContainer>
          {swipeUp && (
            <Icon name="arrow-up" color={theme.colours.main.green} size={60} />
          )}
          <Card
            property={property}
            swipeUp={swipeUp}
            swipeDown={swipeDown}
            onSwipeUp={onSwipeUp}
            onSwipeDown={onSwipeDown}
          />
          {swipeDown && (
            <Icon name="arrow-down" color={theme.colours.main.red} size={60} />
          )}
        </CardSwipeContainer>
      </SafeAreaView>
    </BackgroundView>
  );
};

export default CardSwipeView;
