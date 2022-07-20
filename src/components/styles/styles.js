import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageBackground } from "react-native";
import styled from "styled-components/native";

//various views
export const BaseCardView = styled(LinearGradient).attrs({
  colors: ["#03001e", "#7303c0", "#ec38bc", "#fdeff9"],
})`
  width: 90%;
  height: 82%;
  border-width: 2px;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.colours.main.white};
`;

export const ContentView = styled.View`
  flex: 1;
  margin: 20px 19px 0px 19px;
`;

export const HeaderView = styled.View`
  flex: 0.095;
`;

export const PictureView = styled.View`
  flex: 0.38;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
`;

export const WhiteLine = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colours.main.white};
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
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 27px;
  font-family: FuturaPTHeavy;
`;

export const PropertyPriceText = styled.Text`
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 28px;
  font-family: FuturaPTMedium;
`;

export const RentText = styled.Text`
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 25px;
  font-family: FuturaPTMedium;
`;

export const SubRentText = styled.Text`
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 23px;
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
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
`;
