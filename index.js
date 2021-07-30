
const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const  ZestyGQLAPI  =  require('./datasource.js');
const  { resolvers }  = require('./resolvers.js');
const { readFileSync } = require('fs')

const typeDefs = readFileSync('./schema.graphql').toString('utf-8') 

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})


const server = new ApolloServer({
  schema: schema,
  dataSources: () => ({
    zestyGQLAPI: new ZestyGQLAPI(),
  }),
  connectToDevTools: true
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});