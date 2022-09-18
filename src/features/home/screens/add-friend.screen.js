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
import { UserContext } from "../../../services/user/user.context";
import { SeperatorBar } from "../components/view-properties.screen.styles";

const UserSearchView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled(Text)`
  font-family: FuturaPTHeavy;
  font-size: 35px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 25px;
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
  width: 100px;
  height: 50px;
`;

const AddFriendsScreen = ({ navigation }) => {
  const { searchUsers, searchedUsers, sendFriendRequest, loading } =
    useContext(UserContext);

  const usernameString = useRef("");
  const [idSent, setIdSent] = useState(null);
  let pollingInterval;

  const sendSearch = (text) => {
    if (usernameString.current !== text) {
      usernameString.current = text;
      clearTimeout(pollingInterval);
      pollingInterval = setTimeout(() => {
        searchUsers({
          variables: {
            searchString: usernameString.current,
          },
        });
      }, 1500);
    }
  };

  // user render
  const renderUsers = ({ item }) => {
    const { id, username } = item;

    return (
      <UserView>
        <UserText>{username}</UserText>
        <SendTradeButton
          colour="green"
          text="send"
          fontSize={27}
          onPress={() => {
            sendFriendRequest({
              variables: {
                userId: id,
              },
            });
            setIdSent(id);
          }}
          loading={loading && idSent === id}
        />
      </UserView>
    );
  };

  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <UserSearchView>
          <MainText>Send Friend Requests</MainText>
          <RoundedTextInput
            placeholder="username"
            borderColour="blue"
            onChange={(text) => {
              sendSearch(text);
            }}
            onEnd={() => setTimeout(() => clearTimeout(pollingInterval), 1750)}
          />
          <SeperatorBar />
          {searchUsers && searchUsers.length !== 0 ? (
            <FlatList
              data={searchedUsers}
              renderItem={renderUsers}
              keyExtractor={(item) => item.username}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptySearchView>
              <EmptySearchText>Search for a user</EmptySearchText>
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

export default AddFriendsScreen;
