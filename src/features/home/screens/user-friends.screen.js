import React, { useContext, useState } from "react";
import { FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
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

const ViewFriendsScreen = ({ navigation }) => {
  const { friends, setFriends } = useContext(UserContext);

  // render method
  const renderFriends = ({ item }) => {
    const onRemove = () => {
      const newFriends = friends.filter(
        (val) => val.username !== item.username
      );
      setFriends(newFriends);
    };
    return (
      <UserView>
        <UserText>{item.username}</UserText>
        <RemoveFriendButton
          colour="red"
          text="remove"
          fontSize={27}
          onPress={onRemove}
        />
      </UserView>
    );
  };

  // returning view
  return (
    <BackgroundBlackView>
      <SafeAreaView>
        <UserTradeView>
          <MainText>Friends</MainText>
          <SeperatorBar />
          {friends && friends.length !== 0 ? (
            <FlatList
              data={friends}
              renderItem={renderFriends}
              keyExtractor={(item) => item.username}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptyTradeView>
              <EmptySearchText>No friends</EmptySearchText>
              <Icon
                name="user-friends"
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

export default ViewFriendsScreen;
