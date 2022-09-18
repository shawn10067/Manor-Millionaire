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
