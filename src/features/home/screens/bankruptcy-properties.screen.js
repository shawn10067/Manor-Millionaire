import React, { useContext } from "react";
import styled from "styled-components/native";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import PropertiesFlatlist from "../../../components/PropertiesFlatlistView";
import SafeAreaView from "../../../components/SafeAreaView";
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";
import { properties } from "../../../services/property/property.service";
import { PropertiesView } from "../components/view-properties.screen.styles";

const BankruptcyPropertyScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <PropertiesView>
          <PropertiesFlatlist
            properties={properties()}
            navigation={navigation}
            bankrupt
          />
        </PropertiesView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default BankruptcyPropertyScreen;
