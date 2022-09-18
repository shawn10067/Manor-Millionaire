// apollo client setup, with cache and subscription setup
import { ApolloClient, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import cache from "../infrastructure/cache/cache";

// configs for apollo client depending on the laptop
const macConfigs = {
  home: "http://10.0.0.243:4000/graphql",
  university: "http://192.168.0.128:4000/graphql",
};
const linuxConfigs = {
  home: "idkYet",
  university: "http://192.168.0.247:4000/graphql",
};

const ipConfigs = {
  ...macConfigs,
  heroku: "https://manor-millionaire-server.herokuapp.com/graphql",
};

const CreateApolloClient = (firebaseIdToken) => {
  if (firebaseIdToken) {
    const httpLink = createHttpLink({
      uri: ipConfigs.university,
    });
    console.log("fibaseIDTOKEN", firebaseIdToken);
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
    console.log("creating NORMAL client");
    const client = new ApolloClient({
      uri: ipConfigs.university,
      cache,
    });
    return client;
  }
};

export default CreateApolloClient;
