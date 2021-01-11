import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import bodyParser from 'body-parser';

import resolvers from 'src/resolvers';
import context from 'src/context';
import typeDefs from "src/typeDefs";

export default function server() {
    const expressApp = express();
    expressApp.use(bodyParser.json());
    const server = new ApolloServer(
        {
            typeDefs: typeDefs,
            resolvers,
            context,
        },
    );
    server.applyMiddleware({ app: expressApp });
    const port = Number(process.env.PORT) || 4001;
    expressApp.listen(
        port, '0.0.0.0', () => {
            console.log(`Server up and running on port ${port}`);
        },
    );
}
