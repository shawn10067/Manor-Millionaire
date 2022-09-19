import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import styled from "styled-components/native";
import { REMOVE_FRIEND } from "../../../../graphql/mutations";
import { GET_MY_FRIENDS } from "../../../../graphql/personal";
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

const UserTextView = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

const UserText = styled(Text)`
  font-family: FuturaPTMedium;
  font-size: 23px;
  color: ${({ theme }) => theme.colours.main.white};
  margin: 10px;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
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

const RemoveFriendButton = styled(RoundedButton).attrs({
  fontSize: 24,
})`
  width: 100px;
  height: 50px;
`;

const OptionsRow = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  flex: 0.5;
`;

const ViewFriendsScreen = ({ navigation }) => {
  const { friends, getFriends } = useContext(UserContext);

  // holding loading and id state for the accept button
  const [loading, setLoading] = useState(false);
  const [removeId, setRemoveId] = useState(null);

  const [
    removeFriend,
    { loading: removeFriendLoading, error: removeFriendError },
  ] = useMutation(REMOVE_FRIEND);

  // logging error
  useEffect(() => {
    if (removeFriendError) {
      console.log(removeFriendError);
    }
  }, [removeFriendError]);

  // set loading state
  useEffect(() => {
    if (removeFriendLoading && !loading) {
      setLoading(true);
    } else {
      setLoading(false);
      setRemoveId(null);
    }
  }, [removeFriendLoading]);

  useEffect(() => {
    getFriends();
  }, []);

  // render method
  const renderFriends = ({ item }) => {
    const { username, id } = item;
    const onRemove = () => {
      setRemoveId(id);
      removeFriend({
        variables: { friendId: id },
        refetchQueries: [
          {
            query: GET_MY_FRIENDS,
          },
        ],
      });
    };
    return (
      <UserView>
        <UserTextView>
          <UserText>{username}</UserText>
        </UserTextView>
        <OptionsRow>
          <RemoveFriendButton
            colour="red"
            text="remove"
            fontSize={27}
            onPress={onRemove}
            loading={removeId === id && removeFriendLoading}
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
          <MainText>Friends</MainText>
          <SeperatorBar />
          {friends && friends.length !== 0 ? (
            <FlatList
              data={friends}
              renderItem={renderFriends}
              keyExtractor={(item) => item.id}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptyTradeView>
              <Icon
                name="user-friends"
                size={100}
                color={theme.colours.main.white}
              />
              <MainText>No friends</MainText>
            </EmptyTradeView>
          )}
        </UserTradeView>
        <BackArrowPressable onPress={() => navigation.goBack()} />
      </SafeAreaView>
    </BackgroundBlackView>
  );
};

export default ViewFriendsScreen;
