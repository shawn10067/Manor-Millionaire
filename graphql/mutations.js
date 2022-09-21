import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = gql`
  mutation CREATE_ACCOUNT($firebaseId: String!, $username: String!) {
    signUp(firebaseId: $firebaseId, username: $username)
  }
`;

export const SEND_FRIEND_REQUEST = gql`
  mutation SEND_FRIEND_REQUEST($userId: ID!) {
    sendFriendRequest(userId: $userId) {
      id
    }
  }
`;

export const ACCEPT_FRIEND_REQUEST = gql`
  mutation ACCEPT_FRIEND_REQUEST($friendRequestId: ID!) {
    acceptFriendRequest(friendRequestId: $friendRequestId) {
      id
    }
  }
`;

export const DENY_FRIEND_REQUEST = gql`
  mutation DENY_FRIEND_REQUEST($friendRequestId: ID!) {
    deleteFriendRequest(friendRequestId: $friendRequestId)
  }
`;

export const REMOVE_FRIEND = gql`
  mutation REMOVE_FRIEND($friendId: ID!) {
    removeFriend(friendId: $friendId)
  }
`;

export const SEND_TRADE = gql`
  mutation SEND_TRADE(
    $theirUserId: ID!
    $propertiesYouWant: [ID!]!
    $cashYouWant: Float!
    $propertiesGiving: [ID!]!
    $cashGiving: Float!
  ) {
    sendTrade(
      theirUserId: $theirUserId
      propertiesYouWant: $propertiesYouWant
      cashYouWant: $cashYouWant
      propertiesGiving: $propertiesGiving
      cashGiving: $cashGiving
    ) {
      id
    }
  }
`;
