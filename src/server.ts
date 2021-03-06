import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import bodyParser from 'body-parser';

import resolvers from 'src/resolvers';
import context from 'src/context';
import typeDefs from 'src/typeDefs';
import constants from 'src/constants';

export default function server() {
  const expressApp = express();
  expressApp.use(bodyParser.json());
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });
  apolloServer.applyMiddleware({ app: expressApp });
  const port = Number(constants.PORT);
  expressApp.listen(port, '0.0.0.0', () => {
    console.log(`Server up and running on port ${port}`);
  });
}
