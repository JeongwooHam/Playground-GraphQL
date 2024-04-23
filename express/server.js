const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const port = 4000;

const loadedTypes = loadFilesSync("**/*", { extensions: ["graphql"] });

const schema = makeExecutableSchema({ typeDefs: loadedTypes });

const root = {
  todos: require("./todos/todos.model"),
  comments: require("./comments/comments.model"),
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
