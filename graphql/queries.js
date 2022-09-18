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

export const USER_EXISTS = gql`
  query USER_EXISTS($firebaseId: String!) {
    userExists(firebaseId: $firebaseId)
  }
`;

export const SEARCH_USERS = gql`
  query SEARCH_USERS($searchString: String!) {
    searchUsers(searchString: $searchString) {
      id
      username
    }
  }
`;
