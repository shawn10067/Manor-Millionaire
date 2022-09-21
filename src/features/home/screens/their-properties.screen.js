import React, { useContext } from "react";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import { Text } from "react-native";
import styled from "styled-components/native";
import PropertiesFlatlist from "../../../components/PropertiesFlatlistView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { properties } from "../../../services/property/property.service";
import { TradeContext } from "../../../services/trade/trade.context";
import { useQuery } from "@apollo/client";
import { GET_USER_PROPERTIES } from "../../../../graphql/queries";
import { PropertiesView } from "../components/view-properties.screen.styles";
import { CenterView } from "../components/home.screen.styles";
import { ActivityIndicator } from "react-native-paper";
import BackArrowPressable from "../../../components/BackArrow";
import mapProperties from "../../../utils/propertiesMapper";

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

const TheirPropertiesTradeScreen = ({ navigation }) => {
  const { trade } = useContext(TradeContext);
  const { theirId } = trade;

  console.log("theirId", theirId);
  const { data, loading, error } = useQuery(GET_USER_PROPERTIES, {
    fetchPolicy: "no-cache",
    variables: {
      userId: parseInt(theirId),
    },
  });

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
              <Text style={{ color: "white" }}>{error.message}</Text>
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
            addType="them"
            properties={mapProperties(data.getUserPropertiesId)}
            navigation={navigation}
          />
          <ContinueButton
            colour="blue"
            text="Continue"
            onPress={() =>
              navigation.navigate("Review Trade", {
                type: "send",
              })
            }
          />
        </MainPropertySelectionContainer>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default TheirPropertiesTradeScreen;
