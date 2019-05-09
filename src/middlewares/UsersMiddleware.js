import Validation from '../helpers/Validation';
import Response from '../helpers/Response';
import Email from '../helpers/Email';

/**
 * Class Users Middleware
 */
class UsersMiddleware {
  /**
   * Validate Signup
   * @param {object} req Request Object
   * @param {object} res Response Object
   * @param {function} next
   * @returns {object} error object if fields are empty
   */
  static async validateSignup(req, res, next) {
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

    const checkIfEmailExists = await Email.checkIfEmailExists(email);
    if (checkIfEmailExists) {
      const response = new Response(
        'Bad Request',
        400,
        'The user already exists, try a different email',
      );
      return res.status(response.code).json(response);
    }

    const fields = [
      { name: 'Firstname', value: firstname },
      { name: 'Surname', value: surname },
      { name: 'Username', value: username },
      { name: 'Description', value: description },
      { name: 'Email', value: email },
      { name: 'Phone Number', value: phoneNumber },
      { name: 'Password', value: password },
      { name: 'Address', value: address },
      { name: 'Date Of Birth', value: dob },
      { name: 'Role', value: role }
    ];

    const validation = Validation.checkEmptyFields(fields);
    if (validation.status === false) {
      const response = new Response(
        'Bad Request',
        400,
        `${validation.errors.field} field cannot be empty`,
      );
      return res.status(response.code).json(response);
    }

    const validateEmail = Validation.validateEmail(email);
    if (validateEmail === false) {
      const response = new Response(
        'Bad Request',
        400,
        'The email is invalid',
      );
      return res.status(response.code).json(response);
    }

    next();
  }
}

export default UsersMiddleware;
