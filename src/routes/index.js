import express from 'express';
import rolesRouter from './rolesRouter';

const routes = express.Router();

routes.use('/roles', rolesRouter);

export default routes;
