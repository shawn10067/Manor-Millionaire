import { ImageBackground, Pressable, Text } from "react-native";
import styled from "styled-components/native";

export const PropertiesView = styled.View`
  flex: 1;
`;

export const SeperatorBar = styled.View`
  height: 10px;
  width: 80%;
  background-color: #042a6e;
  border-radius: 4px;
  margin: 8px;
`;

export const CountryHeaderText = styled(Text)`
  font-size: 30px;
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 8px;
`;

export const PropertyItemView = styled.View`
  height: 200px;
  width: 200px;
  background-color: purple;
  margin: 10px;
  border-radius: 30px;
`;

export const PropertyItemPressable = styled(Pressable)``;

export const PropertyItemImage = styled(ImageBackground).attrs({
  source: require("../../../../assets/castle.jpg"),
})`
  border-radius: 10px;
  height: 100%;
  width: 100%;
`;

export const PropertyItemTintForeground = styled.View`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const PropertyItemText = styled(Text)`
  font-size: 25px;
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  text-align: center;
  padding: 8px;
`;
