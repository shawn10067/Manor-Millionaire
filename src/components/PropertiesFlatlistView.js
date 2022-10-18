import React from "react";
import {
  CountryHeaderText,
  PropertiesView,
  PropertyItemImage,
  PropertyItemPressable,
  PropertyItemText,
  PropertyItemTintForeground,
  PropertyItemView,
  SeperatorBar,
} from "../features/home/components/view-properties.screen.styles";
import { FlatList, View } from "react-native";
import { getCountryProperties } from "../utils/countryDecorations";
import { organizeProperties } from "../services/property/property.service";
import { CenterView } from "../features/home/components/home.screen.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../infrastructure/theme";
import Carousel from "pinar";
import styled from "styled-components/native";
import AnimatedLinearGradient, {
  presetColors,
} from "react-native-animated-linear-gradient";

const CountryCarosel = styled(Carousel)`
  height: 250px;
  width: 100%;
  padding: 10px;
  margin: 10px;
  color: white;
  justify-content: center;
  align-items: center;
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

  // bankrupt render property method
  const renderPropertySectionBankrupty = ({ item }) => {
    return (
      <PropertyItemView>
        <PropertyItemPressable
          onPress={() => {
            navigation.navigate("View Bankrupt Property", {
              property: item,
            });
          }}
        >
          <PropertyItemImage>
            <PropertyItemTintForeground>
              <PropertyItemText>{item.address}</PropertyItemText>
            </PropertyItemTintForeground>
          </PropertyItemImage>
        </PropertyItemPressable>
      </PropertyItemView>
    );
  };
  // --------- end of bankrupt property render

  const renderPropertySection = ({ item }) => {
    return (
      <PropertyItemView>
        <PropertyItemPressable
          onPress={() => {
            if (addType === "me") {
              navigation.navigate("View Trade Card", {
                property: item,
                addType: "me",
              });
            } else if (addType === "them") {
              navigation.navigate("View Trade Card", {
                property: item,
                addType: "them",
              });
            } else {
              navigation.navigate("View House", {
                property: item,
                downMessage: "back",
              });
            }
          }}
        >
          <PropertyItemImage>
            <PropertyItemTintForeground>
              <PropertyItemText>{item.address}</PropertyItemText>
            </PropertyItemTintForeground>
          </PropertyItemImage>
        </PropertyItemPressable>
      </PropertyItemView>
    );
  };

  const renderCountrySection = ({ item }) => {
    const countryProperties = item.properties;
    const { emoji } = getCountryProperties(item.country);
    return (
      <PropertiesView>
        <CountryHeaderText>
          {item.country} {emoji}
        </CountryHeaderText>
        <Carousel
          loop
          autoplay
          autoplayInterval={2250}
          horizontal
          style={{
            width: "100%",
            height: 250,
          }}
          containerStyle={{
            borderRadius: 10,
          }}
          contentContainerStyle={{
            alignContent: "center",
            justifyContent: "center",
          }}
          dotStyle={{
            backgroundColor: "rgba(255, 255, 255, 0.92)",
          }}
          activeDotStyle={{
            backgroundColor: theme.colours.main.white,
          }}
          controlsTextStyle={{
            fontSize: 80,
            color: theme.colours.main.white,
          }}
        >
          {countryProperties.map((property, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PropertyItemView>
                  <PropertyItemPressable
                    onPress={() => {
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
                    }}
                  >
                    <PropertyItemImage>
                      <PropertyItemTintForeground>
                        <AnimatedLinearGradient
                          customColors={presetColors.instagram}
                          speed={4000}
                          style={{
                            height: "100%",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                            margin: 10,
                          }}
                        >
                          <PropertyItemText>
                            {property.address}
                          </PropertyItemText>
                        </AnimatedLinearGradient>
                      </PropertyItemTintForeground>
                    </PropertyItemImage>
                  </PropertyItemPressable>
                </PropertyItemView>
              </View>
            );
          })}
        </Carousel>
      </PropertiesView>
    );
  };

  return (
    <PropertiesView>
      <FlatList
        data={organizedProperties}
        renderItem={renderCountrySection}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: 8,
            }}
          >
            <SeperatorBar />
          </View>
        )}
      />
    </PropertiesView>
  );
};

export default PropertiesFlatlist;
