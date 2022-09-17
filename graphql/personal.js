import { gql } from "@apollo/client";

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

export const GET_MY_PROPERTIES = gql`
  query GET_MY_PROPERTIES {
    getMe {
      properties {
        id
        status
        property {
          id
          country
          address
          price
          cost {
            tier1Cost
            tier2Cost
          }
          imageUrl
          income {
            alone
            set
            tier1
            tier2
          }
          propertyValue
        }
      }
    }
  }
`;

export const GET_MY_FRIENDS = gql`
  query GET_MY_FRIENDS {
    getMe {
      friends {
        id
        username
      }
    }
  }
`;

export const GET_MY_FRIEND_REQUESTS = gql`
  query GET_MY_FRIEND_REQUESTS {
    getMe {
      friendRequests {
        id
        fromUser {
          username
        }
      }
    }
  }
`;

export const GET_MY_TRADES = gql`
  query GET_MY_TRADES {
    getMe {
      trades {
        id
        fromUser {
          username
        }
      }
    }
  }
`;
