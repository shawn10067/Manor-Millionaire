import React, { useContext, useState } from "react";
import { FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";
import BackArrowPressable from "../../../components/BackArrow";
import BackgroundBlackView from "../../../components/BackgroundBlackView";
import RoundedButton from "../../../components/RoundedButton";
import SafeAreaView from "../../../components/SafeAreaView";
import theme from "../../../infrastructure/theme";
import { UserContext } from "../../../services/user/user.context";
import { SeperatorBar } from "../components/view-properties.screen.styles";

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

const RemoveFriendButton = styled(RoundedButton)`
  width: 130px;
  height: 55px;
`;

const OptionsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ViewFriendRequestsScreen = ({ navigation }) => {
  const { friends, setFriends, friendRequests, setFriendRequests } =
    useContext(UserContext);

  // render method
  const renderFriends = ({ item }) => {
    const onDeny = () => {
      const newRequests = friendRequests.filter(
        (val) => val.username !== item.username
      );
      setFriendRequests(newRequests);
    };
    const onAccept = () => {
      const newFriends = [...friends, { username: item.username }];
      const newRequests = friendRequests.filter(
        (val) => val.username !== item.username
      );
      setFriends(newFriends);
      setFriendRequests(newRequests);
    };
    return (
      <UserView>
        <UserText>{item.username}</UserText>
        <OptionsRow>
          <RemoveFriendButton
            colour="green"
            text="accept"
            fontSize={27}
            onPress={onAccept}
          />
          <RemoveFriendButton
            colour="red"
            text="deny"
            fontSize={27}
            onPress={onDeny}
          />
        </OptionsRow>
      </UserView>
    );
  };

  // returning view
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <UserTradeView>
          <MainText>Friend Requests</MainText>
          <SeperatorBar />
          {friends && friends.length !== 0 ? (
            <FlatList
              data={friendRequests}
              renderItem={renderFriends}
              keyExtractor={(item) => item.username}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptyTradeView>
              <EmptySearchText>No requests</EmptySearchText>
              <Icon name="send" size={100} color={theme.colours.main.white} />
            </EmptyTradeView>
          )}
        </UserTradeView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewFriendRequestsScreen;
