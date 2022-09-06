// apollo client setup, with cache and subscription setup
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

const CreateApolloClient = (firebaseIdToken) => {
  if (firebaseIdToken) {
    console.log("creating client using firebaseIdToken: ", firebaseIdToken);
    const httpLink = new HttpLink({
      uri: "https://manor-millionaire-server.herokuapp.com/graphql",
    });

    const authMiddleware = new ApolloLink((operation, forward) => {
      // add the authorization to the headers
      operation.setContext({
        headers: {
          authorization: firebaseIdToken ? `Bearer ${firebaseIdToken}` : "",
        },
      });
      return forward(operation);
    });

    const client = new ApolloClient({
      link: authMiddleware.concat(httpLink),
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
