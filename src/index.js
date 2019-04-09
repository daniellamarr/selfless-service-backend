/* eslint-disable import/prefer-default-export */
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('/api/v1', routes);

const port = process.env.PORT || 2400;

server.listen(port);

export { server };
