import React from "react";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import SafeAreaView from "../../../components/SafeAreaView";
import {
  CountryHeaderText,
  PropertiesView,
  PropertyItemImage,
  PropertyItemPressable,
  PropertyItemText,
  PropertyItemTintForeground,
  PropertyItemView,
  SeperatorBar,
} from "../components/view-properties.screen.styles";
import { FlatList, Pressable } from "react-native";
import {
  organizeProperties,
  properties,
} from "../../../services/property/property.service";
import { getCountryProperties } from "../../../utils/countryDecorations";
import BackArrowPressable from "../../../components/BackArrow";

const organizedProperties = organizeProperties(properties());

const ViewPropertiesScreen = ({ navigation }) => {
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
    <BackgroundBlackView>
      <SafeAreaView>
        <PropertiesView>
          <FlatList
            data={organizedProperties}
            renderItem={renderCountrySection}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <SeperatorBar />}
          />
        </PropertiesView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewPropertiesScreen;
