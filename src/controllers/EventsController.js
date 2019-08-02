import models from '../db/models';
import Response from '../helpers/Response';

const { Event } = models;

/**
 * Class Roles Controller
 */
class EventsController {
  /**
   * Creates a new user role
   * @param {object} req request object for create function
   * @param {object} res response object for create function
   * @returns {object} new role created
   */
  static async create(req, res) {
    const { title, location, imageURL, rsvp } = req.body;
    if(!title || !location || !imageURL || !rsvp) {
      const response = new Response(
        'Field Error',
        400,
        'Kindly fill in all the details!'
      );
      return res.status(response.code).json(response);
    }
    const createEvent = await Event.create({
      title,
      location,
      imageURL,
      rsvp
    });
    const response = new Response(
      'Created',
      201,
      'Event created',
      createEvent
    );
    return res.status(response.code).json(response);
  }

  static async find(req, res) {
    const findEvents = await Event.findAll()
    if(!findEvents) {
      res.status(400).json({
        status: "error",
        message: "data not found!"
      });
    }
    if(!findEvents[0]) {
      res.status(200).json({
        status: "success",
        message: "No Item in the database"
      });
    }
    const response = new Response(
      'Created',
      201,
      'Event created',
      findEvents
    );
    return res.status(response.code).json(response);
  }

  static async findOne(req, res) {
    const { id } = req.params;
    const findOneEvent = await Event.findOne({ 
      where: {
        id
      }
    });
    if(!findOneEvent) {
      const response = new Response(
        'error',
        400,
        'Event not found',
      );
      return res.status(response.code).json(response);
    }
    const response = new Response(
      'Created',
      201,
      'Event created',
      findOneEvent
    );
    return res.status(response.code).json(response);
  }

  static async update(req, res) {
    const { id } = req.params;
    const { title, location, imageURL, rsvp } = req.body;
    const findOneEvent = await Event.findOne({ 
      where: {
        id
      }
    });
    if(!findOneEvent) {
      const response = new Response(
        'Error',
        400,
        'Not Found!',
      );
      return res.status(response.code).json(response);
    }
    await Event.update(
      {
        title: title,
        location: location,
        imageURL: imageURL,
        rsvp: rsvp
      },
      { where: {
        id
        }
      }
    )
    const response = new Response(
      'Updated',
      201,
      'Successfully Updated',
    );
    return res.status(response.code).json(response);
  }

  static async delete(req, res) {
    const { id } = req.params;
    const findOneEvent = await Event.findOne({ 
      where: {
        id
      }
    });
    if(!findOneEvent) {
      const response = new Response(
        'Error',
        400,
        'Event Not Found!',
      );
      return res.status(response.code).json(response);
    }
    await Event.destroy({ where: {id}})
    const response = new Response(
      'Deleted',
      201,
      'Successfully Deleted',
    );
    return res.status(response.code).json(response);
  }
}

export default EventsController;
