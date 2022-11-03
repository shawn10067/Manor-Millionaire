import { BlurView } from "@react-native-community/blur";
import { ImageBackground, Platform, Pressable, Text, View } from "react-native";
import styled from "styled-components/native";

export const PropertiesView = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  padding: 2px;
`;

export const SeperatorBar = styled.View`
  height: 10px;
  width: 80%;
  background-color: #b4adea;
  background-color: ${({ theme }) => theme.colours.main.grey};
  border-radius: 4px;
  margin: 8px;
`;

export const CountryHeaderText = styled(Text)`
  font-size: 30px;
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 8px;
  text-align: center;
`;

export const PropertySectionView = styled.View`
  width: 92%;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
`;

export const PropertyItemView = styled.View`
  height: 200px;
  width: 100%;
  padding: 8px;
`;

export const PropertyItemPressable = styled(Pressable)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PropertyItemImage = styled(ImageBackground).attrs({
  source: {
    uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bojnice-castle-1603142898.jpg?crop=1.00xw:0.752xh;0,0.0240xh&resize=980:*",
  },
})`
  flex: 0.8;
  width: 100%;
  overflow: hidden;
  border-radius: 6px;
`;

export const PropertyItemTintForeground = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const PropertyItemText = styled(Text)`
  font-size: 16px;
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  text-align: center;
`;
