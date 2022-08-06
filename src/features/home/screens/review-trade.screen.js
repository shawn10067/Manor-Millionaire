import React, { useContext } from "react";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { TradeContext } from "../../../services/trade/trade.context";
import {
  PropertyItemImage,
  PropertyItemPressable,
  PropertyItemText,
  PropertyItemTintForeground,
  PropertyItemView,
} from "../components/view-properties.screen.styles";

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TradeView = styled.View`
  flex: 1;
  width: 100%;
`;

const ViewTradeButtonView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MainText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 30px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 5px;
`;

const SendButton = styled(RoundedButton).attrs({
  colour: "blue",
  text: "Send",
})`
  width: 70%;
  height: 80px;
`;

const AcceptButton = styled(RoundedButton).attrs({
  colour: "green",
  text: "Accept",
  fontSize: 30,
})`
  width: 40%;
  height: 70px;
`;

const DeclineButton = styled(RoundedButton).attrs({
  colour: "red",
  text: "Decline",
  fontSize: 30,
})`
  width: 40%;
  height: 70px;
`;

const ReviewTradeScreen = ({ navigation, route }) => {
  const { trade } = useContext(TradeContext);
  const { type } = route.params;

  const isView = type === "view";

  // decline view trade button
  const onDecline = () => {
    navigation.navigate("Home");
  };

  // accept view trade button
  const onAccept = () => {
    navigation.navigate("Home");
  };

  // accept view trade button
  const onSubmit = () => {
    navigation.navigate("Home");
  };

  // rendering properties
  const renderPropertySection = ({ item }) => {
    return (
      <PropertyItemView>
        <PropertyItemPressable
          onPress={() => {
            navigation.navigate("View House", {
              property: item,
              buttonsDisabled: true,
            });
          }}
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

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <MainView>
          <TradeView>
            <MainText>Their properties</MainText>
            <FlatList
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={renderPropertySection}
              data={trade.theirProperties}
            />
            <MainText>Your properties</MainText>
            <FlatList
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={renderPropertySection}
              data={trade.myProperties}
            />
          </TradeView>
          {!isView ? (
            <SendButton onPress={onSubmit} />
          ) : (
            <ViewTradeButtonView>
              <AcceptButton onPress={onAccept} />
              <DeclineButton onPress={onDecline} />
            </ViewTradeButtonView>
          )}
        </MainView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ReviewTradeScreen;
