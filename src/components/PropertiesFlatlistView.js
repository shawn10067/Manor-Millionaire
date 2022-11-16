import React, { useEffect, useState } from "react";
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
import { Dimensions, FlatList, Platform, Pressable, View } from "react-native";
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
import { FlashList } from "@shopify/flash-list";
import Animated, { Layout, ZoomIn, ZoomOut } from "react-native-reanimated";
import BlurBlackViewComponent from "./BlurBlackViewComponent";

const BlurNavBar = styled(BlurBlackViewComponent)`
  width: 100%;
  flex: 0.23;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

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

  // create state that holds the modal open or closed based on the rarities from organizedProperties
  const [modals, setModals] = useState(
    organizedProperties.map((rarityOrg) => {
      return {
        rarity: rarityOrg.rarity,
        open: true,
      };
    })
  );

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
        <View
          style={{
            width: "90%",
            height: 64,
            alignSelf: "center",
            borderRadius: 40,
            margin: 20,

            overflow: "hidden",
          }}
        >
          <Pressable
            style={{
              width: "100%",
              height: "100%",
              alignSelf: "center",
            }}
            onPress={() => {
              setModals(
                modals.map((val) => {
                  if (val.rarity === item.rarity) {
                    return {
                      ...val,
                      open: !val.open,
                    };
                  } else {
                    return val;
                  }
                })
              );
            }}
          >
            <CustomLinearGradient
              customColors={gradientRartiyMaps[item.rarity]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CountryHeaderText>
                {item.rarity === "ultraRare"
                  ? "ultra-rare".toUpperCase()
                  : item.rarity.toUpperCase()}
              </CountryHeaderText>
              <Icon
                size={25}
                name={
                  modals.find((val) => val.rarity === item.rarity).open
                    ? "arrow-down-drop-circle-outline"
                    : "arrow-up-drop-circle-outline"
                }
                color={theme.colours.main.white}
                style={{ position: "absolute", right: 20 }}
              />
            </CustomLinearGradient>
          </Pressable>
        </View>
        {modals.find((val) => val.rarity === item.rarity).open ? (
          <Animated.View
            style={{
              width: "92%",
              padding: 5,
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: 16,
            }}
            entering={ZoomIn}
            exiting={ZoomOut}
          >
            <FlashList
              estimatedItemSize={
                modals.find((val) => val.rarity === item.rarity).open ? 300 : 0
              }
              data={countryProperties}
              renderItem={renderTheProperties}
              keyExtractor={(item) => item.id}
              numColumns={3}
              extraData={modals}
            />
          </Animated.View>
        ) : null}
      </PropertiesView>
    );
  };

  return (
    <>
      <BlurBlackViewComponent
        style={{
          width: "100%",
          flex: 1,
          borderRadius: 20,
          marginBottom: Platform.OS === "ios" ? -35 : 0,
          padding: 10,
        }}
      ></BlurBlackViewComponent>
      <BlurNavBar />
    </>
  );
};
/*
<FlashList
          data={organizedProperties.filter((val) => val.properties.length > 0)}
          estimatedItemSize={1500}
          renderItem={renderCountrySection}
          keyExtractor={(item) => item.id}
          extraData={modals}
        />
*/

export default PropertiesFlatlist;
