import { Image, ImageBackground } from "react-native";
import styled from "styled-components/native";
import RoundedButton from "../RoundedButton";

//various views
export const MainCardView = styled.View`
  flex: 1;
`;

export const BaseCardView = styled.View`
  width: 100%;
  height: 100%;
  border-width: 2px;
  border: 4px solid
    ${({ borderColour }) => (borderColour ? borderColour : "#ffbb00")};
  background-color: ${({ theme }) => theme.colours.main.white};
`;

export const ContentView = styled.View`
  flex: 1;
  margin: 20px 19px 0px 19px;
`;

export const BackContentView = styled.View`
  flex: 1;
  margin: 20px 19px 0px 19px;
  align-items: center;
`;

export const HeaderView = styled.View`
  flex: 0.1;
  margin-left: 5px;
  margin-right: 5px;
  border: 4px solid
    ${({ borderColour }) => (borderColour ? borderColour : "#ffbb00")};
`;

export const PictureView = styled.View`
  flex: 0.36;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
`;

export const InformationView = styled.View`
  flex: 0.4;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  width: 100%;
`;

export const ArrowView = styled.View`
  flex: 0.14;
  justify-content: center;
`;

export const ButtonView = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

// card information styling
export const PairContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 8px;
`;

export const ArrowPairContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const MainPairContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

export const HeadingPairContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
`;

// card text styling
export const CardHeadingText = styled.Text`
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 22px;
  font-family: FuturaPTHeavy;
  text-transform: capitalize;
`;

export const BackCardHeadingText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 30px;
  font-family: FuturaPTHeavy;
  text-transform: capitalize;
  text-align: center;
  margin: 10px;
`;

export const CardEmojiText = styled.Text`
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 40px;
  font-family: FuturaPTHeavy;
  text-transform: capitalize;
`;

export const PriceHeadingText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 22px;
  font-family: FuturaPTHeavy;
  text-decoration: underline;
`;

export const PropertyPriceText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 23px;
  font-family: FuturaPTMedium;
`;

export const RentText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 20px;
  font-family: FuturaPTMedium;
`;

export const SubRentText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 18px;
  font-family: FuturaPTMedium;
`;

export const DisclaimerText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 17px;
  font-family: FuturaPTMedium;
`;

// image styles
export const HouseImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const HeaderImage = styled(ImageBackground)`
  height: 100%;
`;

export const TintForeground = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
`;

// back card buttons

export const BuyActionButton = styled(RoundedButton)`
  height: 50px;
  width: 75%;
`;

export const SellActionButton = styled(RoundedButton)`
  height: 50px;
  width: 75%;
`;
