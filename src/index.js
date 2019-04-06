import express from 'express';

const server = express();

const port = 2400 || process.env.PORT;

server.listen(port);
