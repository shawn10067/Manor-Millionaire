// apollo client setup, with cache and subscription setup
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const CreateApolloClient = (firebaseIdToken) => {
  if (firebaseIdToken) {
    console.log("creating client using firebaseIdToken: ", firebaseIdToken);
    const httpLink = new HttpLink({
      uri: "https://manor-millionaire-server.herokuapp.com/graphql",
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
      cache: new InMemoryCache(),
    });
    return client;
  } else {
    console.log("using no firebaseIdToken");
    const client = new ApolloClient({
      uri: "https://manor-millionaire-server.herokuapp.com/graphql",
      cache: new InMemoryCache(),
    });
    return client;
  }
};

export default CreateApolloClient;
