/**
 * Class Response
 */
export default class Response {
  /**
   * Response Helper Class
   * @param {string} status response text
   * @param {number} code response code
   * @param {string} message additional response description
   * @param {object} data response object data
   */
  constructor(status, code, message, data) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
