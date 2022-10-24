import React from "react";
import { toMoneyString } from "../utils/money";
import {
  AnimatedBaseCardView,
  ArrowPairContainer,
  ArrowView,
  BackBaseCardView,
  BackCardHeadingText,
  BackContentView,
  BaseCardView,
  ButtonView,
  BuyActionButton,
  CardEmojiText,
  CardHeadingText,
  ContentView,
  HeaderImage,
  HeaderView,
  HeadingPairContainer,
  HouseImage,
  InformationView,
  MainPairContainer,
  PairContainer,
  PictureView,
  PriceHeadingText,
  PropertyPriceText,
  RentText,
  SellActionButton,
  SubRentText,
  TintForeground,
} from "./styles/card.styles";
import SwipeView from "./SwipeView";
import GestureFlipView from "react-native-gesture-flip-card";
import styled from "styled-components/native";
import { Dimensions, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { getCountryProperties } from "../utils/countryDecorations";

const CardText = styled.Text`
  color: ${({ theme }) => theme.colours.main.green};
  font-size: 20px;
  font-family: FuturaPTMedium;
`;

// card flip view styling
const CardFlipView = styled(GestureFlipView)`
  background-color: aliceblue;
`;

const Card = ({
  property,
  onSwipeUp,
  onSwipeDown,
  swipeUp,
  swipeDown,
  buttonsDisabled = false,
}) => {
  const { height, width } = Dimensions.get("screen");
  const {
    country,
    address,
    image,
    price,
    income,
    propertyValue,
    cost,
    status,
  } = property;
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

  // holds card flip view ref
  const cardFlipViewRef = React.useRef(null);

  // for displaying card buttons
  let buyAction;
  let sellAction;
  switch (status) {
    case "ALONE":
      buyAction = "Add to set";
      sellAction = "Sell property";
      break;
    case "SET":
      buyAction = "Buy tier 1️⃣";
      sellAction = "Remove from set";
      break;
    case "TIER1":
      buyAction = "Buy tier 2️⃣";
      sellAction = "Sell tier 1️⃣";
      break;
    case "TIER2":
      sellAction = "Sell tier 2️⃣";
      break;
  }

  const { emoji, borderColour, headerImage } = getCountryProperties(country);

  const CardFrontSide = () => (
    <SwipeView
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      swipeUp={swipeUp}
      swipeDown={swipeDown}
      style={{
        overflow: "hidden",
      }}
    >
      <AnimatedBaseCardView>
        <BaseCardView borderColour={borderColour}>
          <ContentView>
            <HeaderView borderColour={borderColour}>
              <HeaderImage source={{ uri: headerImage }}>
                <TintForeground>
                  <HeadingPairContainer>
                    <CardHeadingText>{address}</CardHeadingText>
                    <CardEmojiText>{emoji}</CardEmojiText>
                  </HeadingPairContainer>
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
          </ContentView>
          <ArrowView>
            <ArrowPairContainer
              onPress={() => cardFlipViewRef.current?.flipLeft()}
            >
              <CardText style={{ paddingRight: 10 }}>double tap</CardText>
              <Icon name="arrow-left-l" size={35} color="black" />
            </ArrowPairContainer>
          </ArrowView>
        </BaseCardView>
      </AnimatedBaseCardView>
    </SwipeView>
  );

  const CardBackSide = () => (
    <SwipeView
      onSwipeUp={onSwipeUp}
      onSwipeDown={onSwipeDown}
      swipeUp={swipeUp}
      swipeDown={swipeDown}
    >
      <AnimatedBaseCardView>
        <BackBaseCardView borderColour={borderColour}>
          <BackContentView>
            <BackCardHeadingText>
              {address}
              {"  "}
              {emoji}
            </BackCardHeadingText>
            <InformationView>
              <MainPairContainer>
                <PriceHeadingText>Property Value</PriceHeadingText>
              </MainPairContainer>
              <PairContainer>
                <SubRentText>${propertyValueString}</SubRentText>
              </PairContainer>
              <MainPairContainer>
                <PriceHeadingText>Costs</PriceHeadingText>
                <View style={{ width: 200, height: 40 }} />
              </MainPairContainer>
              <PairContainer>
                <SubRentText>Tier 1️⃣ </SubRentText>
                <SubRentText>${tier1CostString}</SubRentText>
              </PairContainer>
              <PairContainer>
                <SubRentText>Tier 2️⃣</SubRentText>
                <SubRentText>${tier2CostString}</SubRentText>
              </PairContainer>
              {!swipeUp && !buttonsDisabled && (
                <ButtonView>
                  {buyAction && (
                    <BuyActionButton
                      text={buyAction}
                      colour="green"
                      fontSize={20}
                    />
                  )}
                  {sellAction && (
                    <SellActionButton
                      text={sellAction}
                      colour="red"
                      fontSize={20}
                    />
                  )}
                </ButtonView>
              )}
            </InformationView>
          </BackContentView>
          <ArrowView>
            <ArrowPairContainer
              onPress={() => cardFlipViewRef.current?.flipLeft()}
            >
              <View />
              <Icon name="arrow-left-l" size={35} color="black" />
            </ArrowPairContainer>
          </ArrowView>
        </BackBaseCardView>
      </AnimatedBaseCardView>
    </SwipeView>
  );

  return (
    <CardFlipView
      height={height * 0.7}
      width={width - 10}
      ref={(cardRef) => (cardFlipViewRef.current = cardRef)}
    >
      {CardFrontSide()}
      {CardBackSide()}
    </CardFlipView>
  );
};

export default Card;
