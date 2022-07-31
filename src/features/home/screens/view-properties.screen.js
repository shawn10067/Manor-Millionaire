import React from "react";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import SafeAreaView from "../../../components/SafeAreaView";
import MoneyCounter from "../../../components/MoneyCounter";
import { PropertiesView } from "../components/view-properties.screen.styles";
import { FlatList } from "react-native";
import {
  organizeProperties,
  properties,
} from "../../../services/property/property.service";

const organizedProperties = organizeProperties(properties());

const renderCountrySection = (countryProperties) => {
  // creating two flatlists: 1 vertical for each country and one horizontal for every proeprty in the country
  return <FlatList />;
};

const ViewPropertiesScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <PropertiesView>
          <MoneyCounter />
          <FlatList
            data={organizeProperties}
            renderItem={renderCountrySection}
            keyExtractor={(item) => item.id}
          />
        </PropertiesView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewPropertiesScreen;
