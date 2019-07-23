import express from 'express';
import UsersController from '../controllers/UsersController';
import UsersMiddleware from '../middlewares/UsersMiddleware';

const usersRouter = express.Router();

usersRouter.post(
  '/signup',
  UsersMiddleware.validateSignup,
  UsersController.signup
);

usersRouter.post(
  '/login',
  UsersMiddleware.validateLogin,
  UsersController.login
);

export default usersRouter;
