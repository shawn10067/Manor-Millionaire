import React, { useContext, useEffect, useRef, useState } from "react";
import { FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import RoundedButton from "../../../components/RoundedButton";
import RoundedTextInput from "../../../components/RoundedTextInput";
import SafeAreaView from "../../../components/SafeAreaView";
import theme from "../../../infrastructure/theme";
import { defaultProperty } from "../../../services/property/property.service";
import { TradeContext } from "../../../services/trade/trade.context";
import { UserContext } from "../../../services/user/user.context";
import { SeperatorBar } from "../components/view-properties.screen.styles";

const UserSearchView = styled.View`
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

const EmptySearchView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const EmptySearchText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 40px;
  color: ${({ theme }) => theme.colours.main.white};
  text-align: center;
  padding: 5px;
`;

const SendTradeButton = styled(RoundedButton)`
  width: 130px;
  height: 55px;
`;

const UserTradeScreen = ({ navigation }) => {
  const { friends, getFriends, loading } = useContext(UserContext);
  const { setTrade } = useContext(TradeContext);

  // use effect on render
  useEffect(() => {
    getFriends();
  }, []);

  // initiating trade
  const startTrade = (user) => {
    const { id, username } = user;
    console.log("starting trade with", id, username);
    setTrade({
      theirUsername: username,
      theirId: id,
      myProperties: [],
      myCash: 0,
      theirProperties: [],
      theirCash: 0,
    });
    navigation.navigate("My Trade Cash");
  };

  // user render
  const renderUsers = ({ item }) => {
    return (
      <UserView>
        <UserText>{item.username}</UserText>
        <SendTradeButton
          colour="blue"
          text="send"
          fontSize={27}
          onPress={() => startTrade(item)}
        />
      </UserView>
    );
  };

  if (loading) {
    return (
      <BackgroundBlackView>
        <SafeAreaView>
          <UserSearchView>
            <MainText>loading...</MainText>
          </UserSearchView>
        </SafeAreaView>
      </BackgroundBlackView>
    );
  }

  console.log(friends);

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <UserSearchView>
          <MainText>Send Trade</MainText>
          <SeperatorBar />
          {friends && friends.length !== 0 ? (
            <FlatList
              data={friends}
              renderItem={renderUsers}
              keyExtractor={(item) => item.username}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptySearchView>
              <EmptySearchText>Add a friend!</EmptySearchText>
              <Icon
                name="account-group"
                size={100}
                color={theme.colours.main.white}
              />
            </EmptySearchView>
          )}
        </UserSearchView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default UserTradeScreen;
