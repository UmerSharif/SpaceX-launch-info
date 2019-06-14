const express = require("express");

const cors = require("cors");
const schema = require("./schema");

const graphqlHTTP = require("express-graphql");

const app = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
