import bcrypt from 'bcryptjs';
import models from '../db/models';
import Response from '../helpers/Response';

const { User } = models;

/**
 * Class Users Controller
 */
class UsersController {
  /**
   * Creates a new user
   * @param {object} req request object for signup function
   * @param {object} res response object for signup function
   * @returns {object} new user created
   */
  static async signup(req, res) {
    try {
      const {
        firstname,
        surname,
        username,
        description,
        email,
        phoneNumber,
        password,
        address,
        dob,
        role,
      } = req.body;

      const hashPassword = bcrypt.hashSync(password, 10);

      const signup = await User.create({
        firstname,
        surname,
        username,
        description,
        email,
        phoneNumber,
        password: hashPassword,
        address,
        dob,
        role,
        status: 'Active',
        verified: false,
      });

      if (!signup) {
        const response = new Response(
          'Bad Request',
          400,
          'Signup was not successful'
        );
        return res.status(response.code).json(response);
      }

      const data = {
        firstname,
        surname,
        username,
        email,
        phoneNumber,
        role: signup.dataValues.role,
        status: 'Active',
        verified: false,
      };

      const response = new Response(
        'Created',
        201,
        'Signup successful',
        data
      );
      return res.status(response.code).json(response);
    } catch (err) {
      const response = new Response(
        'Internal server error',
        500,
        'There was an error while processing your request'
      );
      return res.status(response.code).json(response);
    }
  }
}

export default UsersController;
