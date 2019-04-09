import Response from '../helpers/Response';

/**
 * Class RoleMiddleware
 */
class RolesMiddleware {
  /**
   * Verifies a role before being created
   * @param {object} req request object for create function
   * @param {object} res response object for create function
   * @param {function} next
   * @returns {object} error object
   */
  static verifyCreate(req, res, next) {
    const { title } = req.body;

    if (!title) {
      const response = new Response(
        'Bad Request',
        400,
        'The title field cannot be empty'
      );
      return res.status(response.code).json(response);
    }

    next();
  }
}

export default RolesMiddleware;
