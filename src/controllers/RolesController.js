import models from '../db/models';
import Response from '../helpers/Response';

const { Role } = models;

/**
 * Class Roles Controller
 */
class RolesController {
  /**
   * Creates a new user role
   * @param {object} req request object for create function
   * @param {object} res response object for create function
   * @returns {object} new role created
   */
  static async create(req, res) {
    const { title } = req.body;

    const createRole = await Role.findOrCreate({
      where: {
        title
      },
      attributes: ['id', 'title']
    });

    if (!createRole[1]) {
      const response = new Response(
        'Bad Request',
        400,
        'This role already exists'
      );
      return res.status(response.code).json(response);
    }

    const response = new Response(
      'Created',
      201,
      'Role created'
    );
    return res.status(response.code).json(response);
  }
}

export default RolesController;
