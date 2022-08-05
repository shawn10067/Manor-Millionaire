import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import PropertiesFlatlist from "../../../components/PropertiesFlatlistView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import {
  organizeProperties,
  properties,
} from "../../../services/property/property.service";

const HeadingText = styled(Text)`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 25px;
  margin: 8px;
`;

const MainPropertySelectionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContinueButton = styled(RoundedButton)`
  width: 65%;
  height: 80px;
`;

const MyPropertiesTradeScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <MainPropertySelectionContainer>
          <HeadingText>Sending Properties?</HeadingText>
          <PropertiesFlatlist
            addType="me"
            properties={properties()}
            navigation={navigation}
          />
          <ContinueButton
            colour="blue"
            text="Continue"
            onPress={() => navigation.navigate("Their Trade Cash")}
          />
        </MainPropertySelectionContainer>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default MyPropertiesTradeScreen;
