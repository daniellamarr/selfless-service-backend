import express from 'express';
import rolesRouter from './rolesRouter';
import usersRouter from './usersRouter';
import eventsRouter from './eventsRouter';

const routes = express.Router();

routes.use('/roles', rolesRouter);
routes.use('/auth', usersRouter);
routes.use('/events', eventsRouter);

export default routes;
