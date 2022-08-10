import React, { useContext } from "react";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { BankruptcyContext } from "../../../services/bankruptcy/bankruptcy.context";
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

const TheirView = styled.View`
  flex: 1;
`;

const MyView = styled.View`
  flex: 2;
`;

const ViewTradeButtonView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const UserText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 35px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 5px;
`;

const GreenSubHeadingText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 30px;
  color: ${({ theme }) => theme.colours.main.green};
  margin: 5px;
  text-align: center;
`;

const SendButton = styled(RoundedButton).attrs({
  colour: "blue",
  text: "Send",
})`
  width: 70%;
  height: 70px;
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

const ReviewManagePropertiesTradeScreen = ({ navigation, route }) => {
  const { bankruptTrade } = useContext(BankruptcyContext);

  // decline view trade button
  const onDecline = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 6000);
    }).then(() => navigation.navigate("Transaction Success"));

    navigation.navigate("Transaction");
  };

  // accept view trade button
  const onAccept = () => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 6000);
    }).then(() => navigation.navigate("Transaction Success"));

    navigation.navigate("Transaction");
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

  // render the user properties in a horitzontal flatlist
  const renderUserProperties = () => {
    return (
      <FlatList
        horizontal
        data={bankruptTrade.properties}
        renderItem={renderPropertySection}
        keyExtractor={(item) => item.id}
      />
    );
  };

  // get total cash value of all bankrupt trade properties
  const total = bankruptTrade.properties.reduce((acc, curr) => {
    return acc + curr.propertyValue;
  }, 0);

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <MainView>
          <TradeView>
            <TheirView>
              <UserText>
                {"The Bank Gives You "}
                <GreenSubHeadingText>${total}</GreenSubHeadingText>
              </UserText>
            </TheirView>
            <SeperatorBar />
            <MyView>
              <UserText>Properties To Sell: </UserText>
              {renderUserProperties()}
            </MyView>
          </TradeView>
          <ViewTradeButtonView>
            <AcceptButton onPress={onAccept} />
            <DeclineButton onPress={onDecline} />
          </ViewTradeButtonView>
        </MainView>
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ReviewManagePropertiesTradeScreen;
