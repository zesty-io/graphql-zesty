
import { ApolloServer, gql } from 'apollo-server';
import { MvrpAPI } from './datasource';

const fs = require('fs');
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/definitions/apolloSchema.graphql'), 'utf8')}`;

function resolverObject (obj) {
  // get keys from obj

  // Object.keys(obj).reduce((acc, key) =>{

  //   acc[key] = obj[key].reduce((acc, key) =>{
  //     acc[key] = (root, { zuid }, { dataSources }) =>
  //       dataSources.mvrpAPI.[`get${key.toUpperCase()}`](zuid)
  //     return acc
  //   })

  //   return acc
  // }, {})

  return {
    Query: {
      article: (root, { zuid }, { dataSources }) =>
        dataSources.mvrpAPI.getArticle(zuid),
      articles: (root, args, { dataSources }) => {
        let search = args.hasOwnProperty('search') ? args.search : "";
        return dataSources.mvrpAPI.getAllArticles(search)
      },
      author: (root, { zuid }, { dataSources }) =>
        dataSources.mvrpAPI.getAuthor(zuid),
      authors: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllAuthors(),
    },
    Article: {
      author: (root, args, { dataSources }) => {
        // one to one relationship
        return dataSources.mvrpAPI.getAuthor(root.author)
      },
    },
    Author: {
      articles: (root, args, { dataSources }) => root.articles.map(zuid => dataSources.mvrpAPI.getArticle(zuid)),
    },
  };
}


// build this json 
const resolvers = resolverObject();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    mvrpAPI: new MvrpAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});