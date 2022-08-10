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
import { FlatList } from "react-native";
import { getCountryProperties } from "../utils/countryDecorations";
import { organizeProperties } from "../services/property/property.service";

const PropertiesFlatlist = ({
  navigation,
  properties,
  addType = "none",
  bankrupt = false,
}) => {
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
        <FlatList
          horizontal
          data={countryProperties}
          renderItem={
            bankrupt ? renderPropertySectionBankrupty : renderPropertySection
          }
        />
      </PropertiesView>
    );
  };

  return (
    <PropertiesView>
      <FlatList
        data={organizedProperties}
        renderItem={renderCountrySection}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <SeperatorBar />}
      />
    </PropertiesView>
  );
};

export default PropertiesFlatlist;
