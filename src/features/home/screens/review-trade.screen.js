import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import styled from "styled-components/native";
import { SEND_TRADE } from "../../../../graphql/mutations";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { TradeContext } from "../../../services/trade/trade.context";
import propertiesToIDArray from "../../../utils/propertiesToIDArray";
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
  flex: 1;
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

const ReviewTradeScreen = ({ navigation, route }) => {
  const { trade } = useContext(TradeContext);
  const { type } = route.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // mutation and useEffect
  const [sendTrade, { data, error: tradeError, loading: tradeLoading }] =
    useMutation(SEND_TRADE, {
      fetchPolicy: "no-cache",
    });
  useEffect(() => {
    if (tradeLoading && !loading) {
      setLoading(true);
    } else if (!tradeLoading && loading) {
      setLoading(false);
    }
  }, [tradeLoading]);
  useEffect(() => {
    if (tradeError && !error) {
      console.log("tradeError", tradeError);
      setError(tradeError);
    } else if (!tradeError && error) {
      setError(null);
    }
  }, [tradeError]);

  // if there is data, navigate to home screen
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigation.navigate("Home");
      }, 500);
    }
  }, [data]);

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
    //console.log("submitting trade", trade);
    const { myCash, myProperties, theirCash, theirProperties, theirId } = trade;
    sendTrade({
      variables: {
        theirUserId: theirId,
        propertiesYouWant: propertiesToIDArray(theirProperties),
        cashYouWant: theirCash,
        propertiesGiving: propertiesToIDArray(myProperties),
        cashGiving: myCash,
      },
    });
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

  // render their trade if they only have properties
  const renderTheirProperties = () => {
    if (trade.theirProperties.length > 0) {
      return (
        <FlatList
          horizontal
          data={trade.theirProperties}
          renderItem={renderPropertySection}
          keyExtractor={(item) => item.id}
        />
      );
    }
  };

  // render my trade if I only have properties
  const renderMyProperties = () => {
    // if I have only properties and no cash, include my username
    if (trade.myProperties.length > 0) {
      return (
        <FlatList
          horizontal
          data={trade.myProperties}
          renderItem={renderPropertySection}
          keyExtractor={(item) => item.id}
        />
      );
    }
  };

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <MainView>
          <TradeView>
            <TheirView>
              <UserText>
                {trade.theirUsername}{" "}
                {trade.theirCash !== 0 && (
                  <GreenSubHeadingText>${trade.theirCash}</GreenSubHeadingText>
                )}
              </UserText>
              {renderTheirProperties()}
            </TheirView>
            <SeperatorBar />
            <MyView>
              <UserText>
                You{" "}
                {trade.myCash !== 0 && (
                  <GreenSubHeadingText>${trade.myCash}</GreenSubHeadingText>
                )}
              </UserText>
              {renderMyProperties()}
            </MyView>
          </TradeView>
          {!isView ? (
            <SendButton onPress={onSubmit} loading={loading} />
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
