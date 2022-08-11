import React, { useContext, useRef, useState } from "react";
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
  const { friends } = useContext(UserContext);
  const { setTrade } = useContext(TradeContext);

  const [userData, setUserData] = useState(friends);
  const [loading, setLoading] = useState(false);
  const usernameString = useRef("");

  let pollingInterval;

  const filterUsers = (text) => {
    "searched with", text;
    if (text) {
      const newUsers = friends.filter((user) => {
        return user.username.toLowerCase().includes(text.toLowerCase());
      });
      setUserData(newUsers);
    } else {
      setUserData(friends);
    }
  };

  const searchUsers = (text) => {
    if (usernameString.current !== text) {
      usernameString.current = text;
      clearTimeout(pollingInterval);
      pollingInterval = setTimeout(() => {
        filterUsers(usernameString.current);
      }, 1500);
    }
  };

  // initiating trade
  const startTrade = (user) => {
    setTrade({
      theirUsername: user.username,
      theirId: "546adf654",
      myProperties: [],
      myCash: 0,
      theirProperties: [],
      theirCash: 0,
    });
    navigation.navigate("My Trade Cash", {
      property: defaultProperty,
    });
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

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <UserSearchView>
          <MainText>Send Trade</MainText>
          <RoundedTextInput
            placeholder="username"
            borderColour="blue"
            onChange={(text) => {
              searchUsers(text);
            }}
            onEnd={() => setTimeout(() => clearTimeout(pollingInterval), 1750)}
          />
          <SeperatorBar />
          {friends && friends.length !== 0 ? (
            <FlatList
              data={userData}
              renderItem={renderUsers}
              keyExtractor={(item) => item.username}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptySearchView>
              <EmptySearchText>Search friends</EmptySearchText>
              <Icon
                name="account-search"
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
