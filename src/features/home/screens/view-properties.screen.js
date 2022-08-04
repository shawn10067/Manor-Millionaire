import React from "react";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import SafeAreaView from "../../../components/SafeAreaView";
import { PropertiesView } from "../components/view-properties.screen.styles";
import { properties } from "../../../services/property/property.service";
import BackArrowPressable from "../../../components/BackArrow";
import PropertiesFlatlist from "../../../components/PropertiesFlatlistView";

const ViewPropertiesScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <PropertiesView>
          <PropertiesFlatlist
            properties={properties()}
            navigation={navigation}
          />
        </PropertiesView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewPropertiesScreen;
