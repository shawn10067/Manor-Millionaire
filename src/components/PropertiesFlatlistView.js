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
  savingProperties = false,
  setProperties = () => null,
  selectedProperties = [],
}) => {
  const organizedProperties = organizeProperties(properties);
  const renderPropertySection = ({ item }) => {
    return (
      <PropertyItemView>
        <PropertyItemPressable
          onPress={() =>
            navigation.navigate("View House", {
              property: item,
              swipeUp: false,
              downMessage: "back",
            })
          }
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
          renderItem={renderPropertySection}
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
