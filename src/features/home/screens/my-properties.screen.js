import React, { useContext, useEffect } from "react";
import { Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import PropertiesFlatlist from "../../../components/PropertiesFlatlistView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { UserContext } from "../../../services/user/user.context";
import { CenterView } from "../components/home.screen.styles";
import { PropertiesView } from "../components/view-properties.screen.styles";

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

const ErrorText = styled.Text`
  font-family: "FuturaPTMedium";
  font-size: 40px;
  color: red;
  text-align: center;
`;

const MyPropertiesTradeScreen = ({ navigation }) => {
  // getting the properties
  const { getProperties, loading, error, properties } = useContext(UserContext);
  useEffect(() => {
    getProperties();
  }, []);

  if (loading) {
    return (
      <BackgroundBlackView>
        <SafeAreaView>
          <PropertiesView>
            <CenterView>
              <ActivityIndicator color="white" size={150} />
            </CenterView>
            <BackArrowPressable navigation={navigation} />
          </PropertiesView>
        </SafeAreaView>
      </BackgroundBlackView>
    );
  }

  // if there's an error
  if (error) {
    console.log("error");
    return (
      <BackgroundBlackView>
        <SafeAreaView>
          <PropertiesView>
            <CenterView>
              <ErrorText>{error.message}</ErrorText>
            </CenterView>
            <BackArrowPressable navigation={navigation} />
          </PropertiesView>
        </SafeAreaView>
      </BackgroundBlackView>
    );
  }

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <MainPropertySelectionContainer>
          <HeadingText>Sending Properties?</HeadingText>
          <PropertiesFlatlist
            addType="me"
            properties={properties}
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
