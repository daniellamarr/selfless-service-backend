import express from 'express';
import rolesRouter from './rolesRouter';
import usersRouter from './usersRouter';

const routes = express.Router();

routes.use('/roles', rolesRouter);
routes.use('/auth', usersRouter);

export default routes;
