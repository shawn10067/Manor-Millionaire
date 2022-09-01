import { gql } from "@apollo/client";

export const CREATE_ACCOUNT = gql`
  mutation CREATE_ACCOUNT($firebaseId: String!, $username: String!) {
    signUp(firebaseId: $firebaseId, username: $username)
  }
`;
