import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import PropertiesFlatlist from "../../../components/PropertiesFlatlistView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { properties } from "../../../services/property/property.service";
import { PropertiesView } from "../components/view-properties.screen.styles";

const HeadingText = styled(Text)`
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  font-size: 25px;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

const MainPropertySelectionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ContinueButton = styled(RoundedButton)`
  width: 45%;
  height: 70px;
`;

const BankruptcyPropertyScreen = ({ navigation }) => {
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <MainPropertySelectionContainer>
          <HeadingText>Which properties do you want to sell?</HeadingText>
          <PropertiesView>
            <PropertiesFlatlist
              properties={properties()}
              navigation={navigation}
              bankrupt
            />
          </PropertiesView>
          <BackArrowPressable
            onPress={() => {
              console.log("yur");
              navigation.goBack();
            }}
          />
          <ContinueButton
            text="Continue"
            onPress={() =>
              navigation.navigate("Review Manage Properties Trade")
            }
            colour="blue"
          />
        </MainPropertySelectionContainer>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default BankruptcyPropertyScreen;
