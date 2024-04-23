const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const port = 4000;

// ID: a unique identifier that's often used to refetch an object or as the key for a cache (GraphQL)
const schema = buildSchema(`
    type Query {
        todo: [Todo]
        comments: [Comment]
    }

    type Todo {
      id: ID!
      date: String!
      todo: String
      likes: Int
      comments: [Comment]
    }

    type Comment {
      id: ID!
      text: String!
      likes: Int
    }
`);

const root = {
  todo: [
    {
      id: "post1",
      date: "2023-04-24",
      todo: "graphql 공부하기",
      likes: 100,
      comments: [{ id: "comment1", text: "정말 재밌겠네요", likes: 11 }],
    },
    {
      id: "post2",
      date: "2023-04-24",
      todo: "고양이 놀아주기",
      likes: 1000000,
      comments: [{ id: "comment2", text: "정말 부럽네요", likes: 22 }],
    },
  ],
  comments: [
    { id: "comment1", text: "정말 재밌겠네요", likes: 11 },
    { id: "comment2", text: "정말 부럽네요", likes: 22 },
  ],
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(
    `Running a GraphQL API server at http://localhost:${port}/graphql`
  );
});
