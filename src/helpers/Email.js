import models from '../db/models';

const { User } = models;

/**
 * Email Class
 */
class Email {
  /**
   * checks if an email exist
   * @param {string} email
   * @returns {boolean} true | false
   */
  static async checkIfEmailExists(email) {
    const check = await User.findOne({
      where: {
        email
      },
      attributes: ['email']
    });
    return check;
  }
}

export default Email;
