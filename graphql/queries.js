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
