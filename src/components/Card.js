import React from "react";
import { toMoneyString } from "../utils/money";
import {
  BaseCardView,
  CardHeadingText,
  ContentView,
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
  WhiteLine,
} from "./styles/styles";

PictureView;
InformationView;
PairContainer;
const Card = ({ property }) => {
  const { country, address, image, price, rent, propertyValue, cost, rarity } =
    property;
  const { alone, set, house, hotel } = rent;
  const { level1, level2 } = cost;
  const priceString = toMoneyString(price);
  const aloneRentString = toMoneyString(alone);
  const rentSetString = toMoneyString(set);
  const houseRentString = toMoneyString(house);
  const hotelRentString = toMoneyString(hotel);
  return (
    <BaseCardView>
      <TintForeground>
        <ContentView>
          <HeaderView>
            <MainPairContainer>
              <CardHeadingText>{address}</CardHeadingText>
              <CardHeadingText>🇪🇸</CardHeadingText>
            </MainPairContainer>
          </HeaderView>
          <WhiteLine />
          <PictureView>
            <HouseImage source={require("../../assets/castle.jpg")} />
          </PictureView>
          <InformationView>
            <WhiteLine />
            <MainPairContainer>
              <PriceHeadingText>Price</PriceHeadingText>
              <PropertyPriceText>${priceString}</PropertyPriceText>
            </MainPairContainer>
            <MainPairContainer>
              <PriceHeadingText>Rent</PriceHeadingText>
              <RentText>${aloneRentString}</RentText>
            </MainPairContainer>
            <PairContainer>
              <SubRentText>With Set</SubRentText>
              <SubRentText>${rentSetString}</SubRentText>
            </PairContainer>
            <PairContainer>
              <SubRentText>With 🏠</SubRentText>
              <SubRentText>${houseRentString}</SubRentText>
            </PairContainer>
            <PairContainer>
              <SubRentText>With 🏨</SubRentText>
              <SubRentText>${hotelRentString}</SubRentText>
            </PairContainer>
          </InformationView>
        </ContentView>
      </TintForeground>
    </BaseCardView>
  );
};

export default Card;
