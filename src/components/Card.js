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
import { Dimensions, Image, View } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { getCountryProperties } from "../utils/countryDecorations";
import { getPropertyRarity } from "../services/property/property.service";
import { gradientRartiyMaps } from "../utils/colorRarityMap";
import CenterView from "./CenterView";
import RarityImage from "./RarityImage";

const CardText = styled.Text`
  color: ${({ theme }) => theme.colours.main.green};
  font-size: 20px;
  font-family: FuturaPTMedium;
`;

// card flip view styling
const CardFlipView = styled(GestureFlipView)``;

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

  // get rarity
  const rarity = getPropertyRarity(price);

  // holds card flip view ref
  const cardFlipViewRef = React.useRef(null);
  const { emoji, borderColour, headerImage } = getCountryProperties(country);

  // for displaying card buttons
  let buyAction;
  let sellAction;
  switch (status) {
    case "ALONE":
      buyAction = `Add to set ${emoji}`;
      sellAction = "Sell property";
      break;
    case "SET":
      buyAction = "Buy tier 1️⃣";
      sellAction = `Remove from set ${emoji}`;
      break;
    case "TIER1":
      buyAction = "Buy tier 2️⃣";
      sellAction = "Sell tier 1️⃣";
      break;
    case "TIER2":
      sellAction = "Sell tier 2️⃣";
      break;
  }

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
      <AnimatedBaseCardView customColors={gradientRartiyMaps[rarity]}>
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
              <CenterView>
                <RarityImage
                  rarity={rarity}
                  style={{
                    width: 50,
                    height: 50,
                  }}
                />
              </CenterView>
              <CenterView>
                <MaterialIcon
                  name="gesture-double-tap"
                  size={35}
                  color="white"
                />
              </CenterView>
              <CenterView>
                <Icon
                  name="arrow-left-l"
                  size={35}
                  color="white"
                  style={{
                    alignSelf: "flex-end",
                  }}
                />
              </CenterView>
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
            </InformationView>
          </BackContentView>
          <ArrowView>
            <ArrowPairContainer
              onPress={() => cardFlipViewRef.current?.flipLeft()}
            >
              <CenterView>
                <RarityImage
                  rarity={rarity}
                  style={{
                    height: 50,
                    width: 50,
                  }}
                />
              </CenterView>
              <CenterView>
                <MaterialIcon
                  name="gesture-double-tap"
                  size={35}
                  color="black"
                />
              </CenterView>
              <CenterView>
                <Icon
                  name="arrow-left-l"
                  size={35}
                  color="black"
                  style={{
                    alignSelf: "flex-end",
                  }}
                />
              </CenterView>
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
