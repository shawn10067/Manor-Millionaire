import { useMutation, useQuery } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";
import { SEND_TRADE } from "../../../../graphql/mutations";
import { GET_SPECIFIC_TRADE } from "../../../../graphql/queries";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import { TradeContext } from "../../../services/trade/trade.context";
import parseTrade from "../../../utils/parseTrade";
import mapProperties from "../../../utils/propertiesMapper";
import propertiesToIDArray from "../../../utils/propertiesToIDArray";
import { CenterView } from "../components/home.screen.styles";
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
  const { trade: contextTrade } = useContext(TradeContext);
  const { type, tradeId, theirUsername } = route.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isView = type === "view";

  const {
    data: getTradeData,
    loading: getTradeLoading,
    error: getTradeError,
  } = useQuery(GET_SPECIFIC_TRADE, {
    skip: !tradeId,
    variables: {
      tradeId: tradeId ? parseInt(tradeId) : null,
    },
  });

  // logging the trade error with useEffect
  useEffect(() => {
    if (getTradeError) {
      console.log("getTradeError", getTradeError);
    }
  }, [getTradeError]);

  let trade = isView ? getTradeData && getTradeData.getTradeId : contextTrade;
  const parsedTrade = trade && parseTrade(trade, isView);

  useEffect(() => {
    if (getTradeData) {
      console.log("getTradeData", getTradeData);
      trade = getTradeData.getTrade;
    }
  }, [getTradeData]);

  // mutation and useEffect
  const [sendTrade, { data, error: tradeError, loading: tradeLoading }] =
    useMutation(SEND_TRADE, {
      fetchPolicy: "no-cache",
    });
  useEffect(() => {
    console.log("loading state changed", tradeLoading, getTradeLoading);
    if ((tradeLoading || getTradeLoading) && !loading) {
      setLoading(true);
    } else if (!tradeLoading && !getTradeLoading && loading) {
      setLoading(false);
    }
  }, [tradeLoading, getTradeLoading]);
  useEffect(() => {
    console.log("trade error", tradeError, error);
    if (tradeError && !error) {
      console.log("tradeError", tradeError);
      setError(tradeError);
    }
  }, [tradeError]);

  // if we sent the trade (whether successfully or not), navigate to home screen
  useEffect(() => {
    if (data) {
      setTimeout(() => {
        navigation.navigate("Home");
      }, 500);
    }
  }, [data]);

  // decline view trade button
  const onDecline = () => {
    navigation.navigate("Home");
  };

  // accept view trade button
  const onAccept = () => {
    navigation.navigate("Home");
  };

  // submit function for sending a trade
  const onSubmit = () => {
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

  if (isView && getTradeLoading) {
    return (
      <BackgroundBlackView>
        <CenterView>
          <ActivityIndicator size="large" color="#fff" />
        </CenterView>
      </BackgroundBlackView>
    );
  }

  const renderTheirProperties = () => {
    const { theirProperties } = parsedTrade;
    if (theirProperties.length > 0) {
      return (
        <FlatList
          horizontal
          data={isView ? mapProperties(theirProperties) : theirProperties}
          renderItem={renderPropertySection}
          keyExtractor={(item) => item.id}
        />
      );
    }
  };

  // render my trade if I only have properties
  const renderMyProperties = () => {
    const selectedProperties = parsedTrade.myProperties;
    // if I have only properties and no cash, include my username
    if (selectedProperties.length > 0) {
      return (
        <FlatList
          horizontal
          data={isView ? mapProperties(selectedProperties) : selectedProperties}
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
                {isView ? theirUsername : trade.theirUsername}
                {" gives "}
                {parsedTrade.theirCash !== 0 && (
                  <GreenSubHeadingText>
                    ${parsedTrade.theirCash}
                  </GreenSubHeadingText>
                )}
              </UserText>
              {renderTheirProperties()}
            </TheirView>
            <SeperatorBar />
            <MyView>
              <UserText>
                You{" give "}
                {parsedTrade.myCash !== 0 && (
                  <GreenSubHeadingText>
                    ${parsedTrade.myCash}
                  </GreenSubHeadingText>
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
