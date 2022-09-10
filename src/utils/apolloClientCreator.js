// apollo client setup, with cache and subscription setup
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import cache from "../infrastructure/cache/cache";

const ipConfigs = {
  home: "http://10.0.0.243:4000/graphql",
  university: "http://192.168.0.128:4000/graphql",
  heroku: "https://manor-millionaire-server.herokuapp.com/graphql",
};

const CreateApolloClient = (firebaseIdToken) => {
  if (firebaseIdToken) {
    const httpLink = createHttpLink({
      uri: ipConfigs.home,
    });
    const authLink = setContext((_, { headers }) => {
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

    return client;
  } else {
    const client = new ApolloClient({
      uri: ipConfigs.home,
      cache,
    });
    return client;
  }
};

export default CreateApolloClient;
