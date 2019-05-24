
import { ApolloServer, gql } from 'apollo-server';
import { MvrpAPI } from './datasource';

const fs = require('fs');
const typeDefs = gql`${fs.readFileSync(__dirname.concat('/definitions/apolloSchema.graphql'), 'utf8')}`;

const resolvers = {
  Query: {
    article: (root, { zuid }, { dataSources }) =>
      dataSources.mvrpAPI.getArticle(zuid),
    articles: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllArticles(),
    author: (root, { zuid }, { dataSources }) =>
      dataSources.mvrpAPI.getAuthor(zuid),
    authors: (root, args, { dataSources }) => dataSources.mvrpAPI.getAllAuthors(),
  },
  Article: {
    title: ({ title }) => title,
    body: ({ body }) => body,
    author: {
      authors(author) {
        return filter(authors, { zuid: author.zuid });
      },
    },
  },
};

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