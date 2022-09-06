import { gql } from "@apollo/client";

export const GET_SPIN_OUTCOME = gql`
  query GET_SPIN_OUTCOME {
    spin
  }
`;

export const LOGIN = gql`
  query LOGIN($firebaseId: ID!) {
    login(firebaseId: $firebaseId)
  }
`;

export const GET_ME = gql`
  query GET_ME {
    getMe {
      username
      cash
      id
      jailed
      frozen
      lastSpin
    }
  }
`;

export const USER_EXISTS = gql`
  query USER_EXISTS($firebaseId: String!) {
    userExists(firebaseId: $firebaseId)
  }
`;
