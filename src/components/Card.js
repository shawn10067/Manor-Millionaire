import React from "react";
import { Image } from "react-native";
import { toMoneyString } from "../utils/money";
import {
  BaseCardView,
  CardHeadingText,
  ContentView,
  HeaderForeground,
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
} from "./styles/styles";

PictureView;
InformationView;
PairContainer;
const Card = ({ property }) => {
  const { country, address, image, price, rent, propertyValue, cost } =
    property;
  const { alone, set, house, hotel } = rent;
  const { housePrice, hotelPrice } = cost;
  const priceString = toMoneyString(price);
  const aloneRentString = toMoneyString(alone);
  const rentSetString = toMoneyString(set);
  const houseRentString = toMoneyString(house);
  const hotelRentString = toMoneyString(hotel);
  return (
    <BaseCardView>
      <ContentView>
        <HeaderView>
          <HeaderImage
            source={{
              uri: "https://media.timeout.com/images/105299605/750/422/image.jpg",
            }}
          >
            <HeaderForeground>
              <MainPairContainer>
                <CardHeadingText>{address}</CardHeadingText>
                <CardHeadingText>🇪🇸</CardHeadingText>
              </MainPairContainer>
            </HeaderForeground>
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
    </BaseCardView>
  );
};

export default Card;
