import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';


const cache = new InMemoryCache(
    {
        cacheRedirects: {
          Query: {
            movie: (_, { id }, { getCacheKey }) =>
              getCacheKey({ __typename: 'Movie', id })
          }
        }
      }
);
const httpLink = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
        uri: process.env.REACT_APP_BACKEND_URL,
      credentials: 'same-origin'
    })
  ])

export default new ApolloClient({
  link: httpLink,
  cache
})
