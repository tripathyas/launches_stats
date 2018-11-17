const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js');

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5000, () => {
  console.log('Server is running on port 5000....');
})
