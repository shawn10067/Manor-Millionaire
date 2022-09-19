import { useMutation } from "@apollo/client";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled from "styled-components/native";
import {
  ACCEPT_FRIEND_REQUEST,
  DENY_FRIEND_REQUEST,
} from "../../../../graphql/mutations";
import {
  GET_MY_FRIENDS,
  GET_MY_FRIEND_REQUESTS,
} from "../../../../graphql/personal";
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
  fontSize: 22,
})`
  width: 80px;
  height: 45px;
`;

const LoadingFriendButton = styled(RoundedButton).attrs({
  fontSize: 32,
})`
  width: 100px;
  height: 45px;
`;

const OptionsRow = styled.View`
  flex-direction: row;
  justify-content: center;
  flex: 0.5;
`;

const ViewFriendRequestsScreen = ({ navigation }) => {
  // getting request info and calling getFriendRequests using useEffect
  const { friendRequests, getFriendRequests } = useContext(UserContext);
  useEffect(() => {
    console.log("calling getFriendRequests");
    getFriendRequests();
  }, []);

  const [acceptFriendRequst, { loading: acceptLoading, error: acceptError }] =
    useMutation(ACCEPT_FRIEND_REQUEST);

  const [denyFriendRequest, { error: denyError }] =
    useMutation(DENY_FRIEND_REQUEST);

  // log any errors from the mutations above
  useEffect(() => {
    if (acceptError) {
      console.log(acceptError);
    }
    if (denyError) {
      console.log(denyError);
    }
  }, [acceptError, denyError]);

  // holding loading and id state for the accept button
  const [loading, setLoading] = useState(false);
  const [acceptId, setAcceptId] = useState(null);

  // useffect to set loading state
  useEffect(() => {
    if (acceptLoading) {
      setLoading(true);
    } else {
      setLoading(false);
      setAcceptId(null);
    }
  }, [acceptLoading]);

  // render method
  const renderFriends = ({ item }) => {
    const { fromUser, id } = item;
    const onDeny = () => {
      console.log("deny", id);
      denyFriendRequest({
        variables: {
          friendRequestId: id,
        },
        refetchQueries: [
          {
            query: GET_MY_FRIEND_REQUESTS,
          },
          {
            query: GET_MY_FRIENDS,
          },
        ],
      });
    };
    const onAccept = () => {
      console.log("accept", id);
      setAcceptId(id);
      acceptFriendRequst({
        variables: {
          friendRequestId: id,
        },
        refetchQueries: [
          {
            query: GET_MY_FRIEND_REQUESTS,
          },
          {
            query: GET_MY_FRIENDS,
          },
        ],
      });
    };
    return (
      <UserView>
        <UserTextView>
          <UserText>{fromUser.username}</UserText>
        </UserTextView>
        <OptionsRow>
          {loading && id === acceptId ? (
            <LoadingFriendButton title="Loading..." loading={true} />
          ) : (
            <>
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
            </>
          )}
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
          {friendRequests && friendRequests.length !== 0 ? (
            <FlatList
              data={friendRequests}
              renderItem={renderFriends}
              keyExtractor={(item) => item.id}
              style={{
                width: "100%",
              }}
            />
          ) : (
            <EmptyTradeView>
              <MainText>No requests</MainText>
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
