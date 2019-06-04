
import { ApolloServer, gql } from 'apollo-server';
import { MvrpAPI } from './datasource';
import resolvers from './resolvers';

const fs = require('fs');
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8')}`;


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    mvrpAPI: new MvrpAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});