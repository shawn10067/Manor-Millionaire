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

export const GET_USER_PROPERTIES = gql`
  query GET_USER_PROPERTIES($userId: Int!) {
    getUserPropertiesId(userId: $userId) {
      id
      property {
        address
        id
        country
        imageUrl
        price
        income {
          alone
          set
          tier1
          tier2
        }
        propertyValue
        cost {
          tier1Cost
          tier2Cost
        }
      }
    }
  }
`;

export const GET_SPECIFIC_TRADE = gql`
  query GET_SPECIFIC_TRADE($tradeId: Int!) {
    getTradeId(id: $tradeId) {
      id
      theirProperties {
        id
        property {
          id
          country
          address
          imageUrl
          price
          income {
            alone
            set
            tier1
            tier2
          }
          propertyValue
          cost {
            tier1Cost
            tier2Cost
          }
        }
        status
      }
      requestedCash
      recievingCash
      recievingProperties {
        id
        status
        property {
          id
          country
          address
          imageUrl
          price
          income {
            alone
            set
            tier1
            tier2
          }
          propertyValue
          cost {
            tier1Cost
            tier2Cost
          }
        }
      }
    }
  }
`;
