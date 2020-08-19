import express from 'express';

import server from './server';

const PORT = 3300;

const app = express();

server.applyMiddleware({ app });

app.listen({port: PORT}, () => {
    console.log(`Already: http://localhost:${PORT}${server.graphqlPath}`);
});