import React, { useContext, useEffect } from "react";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import SafeAreaView from "../../../components/SafeAreaView";
import { PropertiesView } from "../components/view-properties.screen.styles";
import { properties } from "../../../services/property/property.service";
import BackArrowPressable from "../../../components/BackArrow";
import PropertiesFlatlist from "../../../components/PropertiesFlatlistView";
import { UserContext } from "../../../services/user/user.context";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

const ActivityView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled.Text`
  font-family: "FuturaPTMedium";
  font-size: 40px;
  color: red;
  text-align: center;
`;

const ViewPropertiesScreen = ({ navigation }) => {
  // getting the properties
  const { getProperties, loading, error } = useContext(UserContext);
  useEffect(() => {
    getProperties();
  }, []);

  // logging all the context values
  console.log("loading", loading);
  console.log("error", error);

  // returning the appropriate views
  // if we're loading, return the loading view
  if (loading) {
    console.log("loading");
    return (
      <BackgroundBlackView>
        <SafeAreaView>
          <PropertiesView>
            <ActivityView>
              <ActivityIndicator color="white" size={150} />
            </ActivityView>
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
            <ActivityView>
              <ErrorText>{error.message}</ErrorText>
            </ActivityView>
            <BackArrowPressable navigation={navigation} />
          </PropertiesView>
        </SafeAreaView>
      </BackgroundBlackView>
    );
  }

  // if we have the properties data
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
