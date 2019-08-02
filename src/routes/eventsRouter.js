import express from 'express';
import EventsController from '../controllers/EventsController';

const eventsRouter = express.Router();

eventsRouter.get(
    '/',
    EventsController.find
);

eventsRouter.get(
    '/:id',
    EventsController.findOne
);

eventsRouter.post(
  '/',
  EventsController.create
);

eventsRouter.put(
    '/:id',
    EventsController.update
);

eventsRouter.delete(
    '/:id',
    EventsController.delete
);

export default eventsRouter;
