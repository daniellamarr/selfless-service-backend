import jwt from 'jsonwebtoken';
import Response from './Response';

/**
 * Token Helper Class - Generates and verifies tokens
 */
class Token {
  /**
   * Generate Token Method
   * @static
   * @param {object} payload
   * @param {string} expires
   * @returns {string} returns token
   * @memberof Token
   */
  static generateToken(payload, expires) {
    const token = jwt.sign(
      payload,
      process.env.TOKENSECRET,
      { expiresIn: expires }
    );
    return token;
  }

  /**
   * Verfify Token Method
   * @static
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} returns the token object payload
   * @memberof Token
   */
  static async verifyToken(req, res, next) {
    const token = req.headers.authorization
      || req.headers['x-access-token'] || req.query.token || req.body.token;
    if (!token) {
      const response = new Response(
        'Unauthorized',
        401,
        'You did not provide a token'
      );
      return res.status(response.code).json(response);
    }
    try {
      const payload = await jwt.verify(token, process.env.TOKENSECRET);
      req.payload = payload;

      return next();
    } catch (err) {
      const response = new Response(
        'Unauthorized',
        401,
        'Your token is invalid or expired'
      );
      return res.status(response.code).json(response);
    }
  }
}

export default Token;
