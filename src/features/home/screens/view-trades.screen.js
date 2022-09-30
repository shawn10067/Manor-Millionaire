import { useQuery } from "@apollo/client";
import React from "react";
import { FlatList, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";
import { GET_MY_TRADES } from "../../../../graphql/personal";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import theme from "../../../infrastructure/theme";
import { CenterView } from "../components/home.screen.styles";
import {
  PropertiesView,
  SeperatorBar,
} from "../components/view-properties.screen.styles";

const UserTradeView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 40px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 30px;
`;

const UserText = styled(Text)`
  font-family: FuturaPTMedium;
  font-size: 23px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 10px;
`;

const UserView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const EmptyTradeView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const EmptyTradeText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 40px;
  color: ${({ theme }) => theme.colours.main.white};
  text-align: center;
  padding: 5px;
`;

const ViewTradeButton = styled(RoundedButton)`
  width: 130px;
  height: 55px;
`;

const ViewTradesScreen = ({ navigation }) => {
  const { data, error, loading } = useQuery(GET_MY_TRADES);

  const renderUsers = ({ item }) => {
    const { senderUser } = item;
    const onTradePress = () => {
      console.log("you want to trade with id: ", item.id);
      navigation.navigate("Review Trade", {
        type: "view",
        tradeId: item.id,
        theirUsername: senderUser.username,
      });
    };
    return (
      <UserView>
        <UserText>{senderUser.username}</UserText>
        <ViewTradeButton
          colour="blue"
          text="view"
          fontSize={27}
          onPress={onTradePress}
        />
      </UserView>
    );
  };

  // returning the appropriate views
  // if we're loading, return the loading view
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
              <MainText>{error.message}</MainText>
            </CenterView>
            <BackArrowPressable navigation={navigation} />
          </PropertiesView>
        </SafeAreaView>
      </BackgroundBlackView>
    );
  }

  const trades = data.getMe.trades;

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <UserTradeView>
          <MainText>View Trades</MainText>
          <SeperatorBar />
          {trades && trades.length !== 0 ? (
            <FlatList
              data={trades}
              renderItem={renderUsers}
              keyExtractor={(trade) => trade.id}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptyTradeView>
              <EmptyTradeText>No trades</EmptyTradeText>
              <Icon
                name="cube-send"
                size={100}
                color={theme.colours.main.white}
              />
            </EmptyTradeView>
          )}
        </UserTradeView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewTradesScreen;
