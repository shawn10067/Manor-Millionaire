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
import { FlatList } from "react-native";
import {
  organizeProperties,
  properties,
} from "../../../services/property/property.service";

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
    // creating two flatlists: 1 vertical for each country and one horizontal for every proeprty in the country
    const countryProperties = item.properties;
    return (
      <PropertiesView>
        <CountryHeaderText>{item.country}</CountryHeaderText>
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
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewPropertiesScreen;
