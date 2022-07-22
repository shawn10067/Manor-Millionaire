import React from "react";
import { toMoneyString } from "../utils/money";
import {
  ArrowView,
  BaseCardView,
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

PictureView;
InformationView;
PairContainer;
const Card = ({ property }) => {
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

  return (
    <SwipeView
      onSwipeUp={() => {
        // swiping up callback
        console.log("swiped up");
      }}
      onSwipeDown={() => {
        // swiping down callback
        console.log("swiped down");
      }}
    >
      <BaseCardView>
        <ContentView>
          <HeaderView>
            <HeaderImage source={require("../../assets/castle.jpg")}>
              <TintForeground>
                <MainPairContainer>
                  <CardHeadingText>{address}</CardHeadingText>
                  <CardHeadingText>🇪🇸</CardHeadingText>
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
              <SubRentText>With Set</SubRentText>
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
            <DisclaimerText>
              *The property value is ${propertyValueString}
            </DisclaimerText>
            <DisclaimerText>*Tier 1️⃣ costs ${tier1CostString}</DisclaimerText>
            <DisclaimerText>*Tier 2️⃣ costs ${tier2CostString}</DisclaimerText>
          </ArrowView>
        </ContentView>
      </BaseCardView>
    </SwipeView>
  );
};

export default Card;
