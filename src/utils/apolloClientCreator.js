// apollo client setup, with cache and subscription setup
import { ApolloClient, createHttpLink, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import cache from "../infrastructure/cache/cache";

// configs for apollo client depending on the laptop
const macConfigs = {
  home: "http://10.0.0.243:4000/graphql",
  basement: "http://192.168.3.106:4000/graphql",
  university: "http://192.168.0.128:4000/graphql",
  siaPlace: "http://192.168.0.24:4000/graphql",
  pearson: "http://10.27.87.111:4000/graphql",
};

const linuxConfigs = {
  home: "idkYet",
  university: "http://192.168.0.247:4000/graphql",
  siaPlace: "http://192.168.0.11:4000/graphql",
};

const ipConfigs = {
  ...macConfigs,
  heroku: "https://manor-millionaire-server.herokuapp.com/graphql",
  railway: "https://manor-millionaire-backend-production.up.railway.app/graphql",
  localhost: "http://localhost:4000/graphql",
};

const CreateApolloClient = (firebaseIdToken) => {
  console.log("creating firebase client with id token of: ", firebaseIdToken);
  if (firebaseIdToken) {
    const httpLink = createHttpLink({
      uri: ipConfigs.railway,
    });
    const authLink = setContext((_, { headers }) => {
      console.log("firebaseToken", firebaseIdToken);
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: firebaseIdToken ? `Bearer ${firebaseIdToken}` : "",
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache,
    });

    console.log("client's link is: ", client.link);
    return client;
  } else {
    const link = new HttpLink({
      uri: ipConfigs.railway,
    });
    const client = new ApolloClient({
      link,
      cache,
    });
    console.log("client's link is: ", client.link);
    return client;
  }
};

export default CreateApolloClient;
