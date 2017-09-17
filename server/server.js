var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors')


var schemaStr = require('./schema');
var resolvers = require('./resolvers');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(schemaStr);

var app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');