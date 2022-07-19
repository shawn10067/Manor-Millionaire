import { Image, ImageBackground } from "react-native";
import styled from "styled-components/native";

//various views
export const BaseCardView = styled.View`
  width: 90%;
  height: 82%;
  background-color: ${({ theme }) => theme.colours.main.white};
  border: 5px solid #ffbb00;
`;

export const ContentView = styled.View`
  flex: 1;
  margin: 20px 19px 0px 19px;
`;

export const HeaderView = styled.View`
  flex: 0.12;
  margin-left: 5px;
  margin-right: 5px;
  border: 5px solid #ffbb00;
`;

export const PictureView = styled.View`
  flex: 0.36;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  border: 5px solid #ffbb00;
  border-radius: 2px;
`;

export const InformationView = styled.View`
  flex: 0.52;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
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

export const MainPairContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;

// card text styling
export const CardHeadingText = styled.Text`
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 30px;
  font-family: FuturaPTHeavy;
`;

export const PriceHeadingText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 27px;
  font-family: FuturaPTHeavy;
  text-decoration: underline;
`;

export const PropertyPriceText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 28px;
  font-family: FuturaPTMedium;
`;

export const RentText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 25px;
  font-family: FuturaPTMedium;
`;

export const SubRentText = styled.Text`
  color: ${({ theme }) => theme.colours.main.grey};
  font-size: 23px;
  font-family: FuturaPTMedium;
`;

// image styles
export const HouseImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const HeaderImage = styled(ImageBackground)`
  height: 100%;
`;

export const HeaderForeground = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
`;
