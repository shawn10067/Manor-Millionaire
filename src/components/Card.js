import React from "react";
import { toMoneyString } from "../utils/money";
import {
  ArrowView,
  BaseCardView,
  CardEmojiText,
  CardHeadingText,
  ContentView,
  DisclaimerText,
  HeaderImage,
  HeaderView,
  HouseImage,
  InformationView,
  MainPairContainer,
  PairContainer,
  PictureView,
  PriceHeadingText,
  PropertyPriceText,
  RentText,
  SubRentText,
  TintForeground,
} from "./styles/card.styles";
import SwipeView from "./SwipeView";
import GestureFlipView from "react-native-gesture-flip-card";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

// card flip view styling
const CardFlipView = styled(GestureFlipView)`
  background-color: aliceblue;
`;

const Card = ({ property, onSwipeUp, onSwipeDown, swipeUp, swipeDown }) => {
  const { height, width } = Dimensions.get("screen");
  const { country, address, image, price, income, propertyValue, cost } =
    property;
  const { alone, set, tier1, tier2 } = income;
  const { tier1Cost, tier2Cost } = cost;
  const priceString = toMoneyString(price);
  const aloneRentString = toMoneyString(alone);
  const rentSetString = toMoneyString(set);
  const tier1RentString = toMoneyString(tier1);
  const tier2RentString = toMoneyString(tier2);
  const tier1CostString = toMoneyString(tier1Cost);
  const tier2CostString = toMoneyString(tier2Cost);
  const propertyValueString = toMoneyString(propertyValue);

  const CardFrontSide = () => (
    <SwipeView
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      swipeUp={swipeUp}
      swipeDown={swipeDown}
    >
      <BaseCardView>
        <ContentView>
          <HeaderView>
            <HeaderImage source={require("../../assets/castle.jpg")}>
              <TintForeground>
                <MainPairContainer>
                  <CardHeadingText>{address}</CardHeadingText>
                  <CardEmojiText>🇪🇸</CardEmojiText>
                </MainPairContainer>
              </TintForeground>
            </HeaderImage>
          </HeaderView>
          <PictureView>
            <HouseImage source={require("../../assets/castle.jpg")} />
          </PictureView>
          <InformationView>
            <MainPairContainer>
              <PriceHeadingText>Price</PriceHeadingText>
              <PropertyPriceText>${priceString}</PropertyPriceText>
            </MainPairContainer>
            <MainPairContainer>
              <PriceHeadingText>Income️</PriceHeadingText>
              <RentText>${aloneRentString}</RentText>
            </MainPairContainer>
            <PairContainer>
              <SubRentText>With set</SubRentText>
              <SubRentText>${rentSetString}</SubRentText>
            </PairContainer>
            <PairContainer>
              <SubRentText>With tier 1️⃣</SubRentText>
              <SubRentText>${tier1RentString}</SubRentText>
            </PairContainer>
            <PairContainer>
              <SubRentText>With tier 2️⃣</SubRentText>
              <SubRentText>${tier2RentString}</SubRentText>
            </PairContainer>
          </InformationView>
          <ArrowView>
            <PairContainer>
              <Icon name="arrow-right-l" size={40} color="black" />
            </PairContainer>
          </ArrowView>
        </ContentView>
      </BaseCardView>
    </SwipeView>
  );

  const CardBackSide = () => (
    <SwipeView>
      <BaseCardView>
        <ContentView>
          <DisclaimerText>
            *The property value is ${propertyValueString}
          </DisclaimerText>
          <DisclaimerText>*Tier 1️⃣ costs ${tier1CostString}</DisclaimerText>
          <DisclaimerText>*Tier 2️⃣ costs ${tier2CostString}</DisclaimerText>
        </ContentView>
      </BaseCardView>
    </SwipeView>
  );

  return (
    <CardFlipView height={height * 0.7} width={width - 10}>
      {CardFrontSide()}
      {CardBackSide()}
    </CardFlipView>
  );
};

export default Card;
