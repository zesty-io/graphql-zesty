var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema

var graphQLModelSchema = require('./models.js');

console.log(graphQLModelSchema);

var schema = buildSchema(graphQLModelSchema);

var root = {
    course: getCourse,
    courses: getCourses
};

const baseURL = `https://ab90f66abb07cc8a49695b0b8cf92ab8-dev.preview.zestyio.com/graphql`

const resolvers = {
  Query: {
    articles: () => {
      return fetch(`${baseURL}/articles.json`).then(res => res.json())
    },
    article:  (parent, args) => {
      const { id } = args
      return fetch(`${baseURL}/articles.json?zuid=${id}`).then(res => res.json())
    },
}


// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));