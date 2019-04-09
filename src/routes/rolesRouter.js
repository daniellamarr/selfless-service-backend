import express from 'express';
import RolesController from '../controllers/RolesController';
import RolesMiddleware from '../middlewares/RolesMiddleware';

const rolesRouter = express.Router();

rolesRouter.post(
  '/create',
  RolesMiddleware.verifyCreate,
  RolesController.create
);

export default rolesRouter;
