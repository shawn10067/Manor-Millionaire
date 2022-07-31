import React from "react";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import SafeAreaView from "../../../components/SafeAreaView";
import MoneyCounter from "../../../components/MoneyCounter";
import {
  CountryHeaderText,
  PropertiesView,
  PropertyItemImage,
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
      <PropertyItemView
        onPress={() =>
          navigation.navigate("View House", {
            property: item,
          })
        }
      >
        <PropertyItemImage>
          <PropertyItemTintForeground>
            <PropertyItemText>{item.address}</PropertyItemText>
          </PropertyItemTintForeground>
        </PropertyItemImage>
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
