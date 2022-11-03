import React, { useEffect } from "react";
import { uuid } from "react-native-uuid";
import {
  CountryHeaderText,
  PropertiesView,
  PropertyItemImage,
  PropertyItemPressable,
  PropertyItemText,
  PropertyItemTintForeground,
  PropertyItemView,
  PropertySectionView,
  SeperatorBar,
} from "../features/home/components/view-properties.screen.styles";
import { Dimensions, FlatList, View } from "react-native";
import { getCountryProperties } from "../utils/countryDecorations";
import { organizeProperties } from "../services/property/property.service";
import { CenterView } from "../features/home/components/home.screen.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../infrastructure/theme";
import Carousel from "pinar";
import styled from "styled-components/native";
import CustomLinearGradient, {
  presetColors,
} from "./gradient/CustomLinearGradient";
import { gradientRartiyMaps } from "../utils/colorRarityMap";
import { Text } from "react-native-paper";
import { FlashList } from "@shopify/flash-list";

const PropertiesFlatlist = ({
  navigation,
  properties,
  addType = "none",
  bankrupt = false,
}) => {
  // if there are no properties, return the no properties view
  if (!properties || properties.length === 0) {
    return (
      <PropertiesView>
        <CenterView>
          <Icon
            name="home-floor-0"
            size={100}
            color={theme.colours.main.white}
          />
          <CountryHeaderText>
            {addType === "none"
              ? "Find some properties!"
              : "They don't have any properties"}
          </CountryHeaderText>
        </CenterView>
      </PropertiesView>
    );
  }

  const organizedProperties = organizeProperties(properties);

  // bankrupt render property method
  // const renderPropertySectionBankrupty = ({ item }) => {
  //   return (
  //     <PropertyItemView>
  //       <PropertyItemPressable
  //         onPress={() => {
  //           navigation.navigate("View Bankrupt Property", {
  //             property: item,
  //           });
  //         }}
  //       >
  //         <PropertyItemImage>
  //           <PropertyItemTintForeground>
  //             <PropertyItemText>{item.address}</PropertyItemText>
  //           </PropertyItemTintForeground>
  //         </PropertyItemImage>
  //       </PropertyItemPressable>
  //     </PropertyItemView>
  //   );
  // };
  // --------- end of bankrupt property render

  const renderTheProperties = ({ item }) => {
    const property = item;
    return (
      <PropertyItemView>
        <PropertyItemPressable
          onPress={() => {
            if (bankrupt) {
              navigation.navigate("View Bankrupt Property", {
                property: property,
              });
            } else {
              if (addType === "me") {
                navigation.navigate("View Trade Card", {
                  property: property,
                  addType: "me",
                });
              }
              if (addType === "them") {
                navigation.navigate("View Trade Card", {
                  property: property,
                  addType: "them",
                });
              }
              if (addType === "none") {
                navigation.navigate("View House", {
                  property: property,
                  downMessage: "back",
                });
              }
            }
          }}
        >
          <PropertyItemImage>
            <PropertyItemTintForeground></PropertyItemTintForeground>
          </PropertyItemImage>
        </PropertyItemPressable>
        <PropertyItemText>{property.address}</PropertyItemText>
        <CustomLinearGradient
          customColors={gradientRartiyMaps[property.rarity]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: "80%",
            height: 8,
            borderRadius: 5,
            alignSelf: "center",
            margin: 5,
          }}
          staticGrad
        />
      </PropertyItemView>
    );
  };

  const renderCountrySection = ({ item }) => {
    const countryProperties = item.properties.map((val) => {
      return {
        ...val,
        rarity: item.rarity,
      };
    });
    return (
      <PropertiesView>
        <CustomLinearGradient
          customColors={gradientRartiyMaps[item.rarity]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: "90%",
            height: 64,
            alignSelf: "center",
            borderRadius: 40,
            margin: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CountryHeaderText>
            {item.rarity === "ultraRare"
              ? "ultra-rare".toUpperCase()
              : item.rarity.toUpperCase()}
          </CountryHeaderText>
        </CustomLinearGradient>
        <PropertySectionView>
          <FlashList
            estimatedItemSize={300}
            data={countryProperties}
            renderItem={renderTheProperties}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </PropertySectionView>
      </PropertiesView>
    );
  };

  console.log("ORGANIZED LENGTH:", properties.length);

  return (
    <CenterView
      style={{
        width: Dimensions.get("screen").width,
        height: "100%",
      }}
    >
      <View style={{ width: "100%", height: "100%" }}>
        <FlashList
          data={organizedProperties}
          estimatedItemSize={6000}
          renderItem={renderCountrySection}
          keyExtractor={(item) => item.id}
        />
      </View>
    </CenterView>
  );
};

export default PropertiesFlatlist;
