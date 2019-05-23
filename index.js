const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

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
        authors: () => {
            return fetch(`${baseURL}/author.json`).then(res => res.json())
        },
        author:  (parent, args) => {
            const { id } = args
            return fetch(`${baseURL}/author.json?zuid=${id}`).then(res => res.json())
        },
    }
}

const server  = new GraphQLServer({
  typeDefs: './definitions/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))