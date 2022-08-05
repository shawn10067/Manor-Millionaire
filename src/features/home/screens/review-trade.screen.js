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
  SeperatorBar,
} from "../components/view-properties.screen.styles";

const MainView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const TradeView = styled.View`
  flex: 1;
  width: 100%;
`;

const MainText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 30px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 5px;
`;

const UserText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 30px;
  color: ${({ theme }) => theme.colours.main.blue};
`;

const CashText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 24px;
  color: ${({ theme }) => theme.colours.main.white};
`;

const MoneyText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 24px;
  color: ${({ theme }) => theme.colours.main.green};
`;

const SendButton = styled(RoundedButton).attrs({
  colour: "blue",
  text: "Send",
})`
  width: 70%;
  height: 80px;
`;

const ReviewTradeScreen = ({ navigation, route }) => {
  const { trade } = useContext(TradeContext);
  const { type } = route.params;
  console.log("type", type);

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
            <MainText>
              <UserText>{trade.theirUsername}'s</UserText> properties +
              <CashText>
                {" "}
                <MoneyText>${trade.theirCash}</MoneyText>
              </CashText>
            </MainText>
            <FlatList
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={renderPropertySection}
              data={trade.theirProperties}
            />
            <SeperatorBar />
            <MainText>
              Your properties +{" "}
              <CashText>
                <MoneyText>${trade.theirCash}</MoneyText>
              </CashText>
            </MainText>
            <FlatList
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={renderPropertySection}
              data={trade.myProperties}
            />
          </TradeView>
          <SendButton onPress={() => navigation.navigate("Home")} />
        </MainView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ReviewTradeScreen;
