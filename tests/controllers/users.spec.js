import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';
import {
  mockValidUserSignup,
  mockUserWithoutFirstname,
  mockUserWithExistingEmail,
  mockUserWithInvalidEmail,
  mockUserWithoutUsername,
  mockUserWithoutPassword
} from '../mocks/users.mock';

chai.use(chaiHttp);
const { expect } = chai;

const testPath = '/api/v1/auth/';

describe('Users Endpoint Test', () => {
  describe('/POST Request', () => {
    it('should signup a user', (done) => {
      chai.request(server)
        .post(`${testPath}signup`)
        .send(mockValidUserSignup)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('Signup successful');
          done(err);
        });
    });

    it('should return error when firstname field is null', (done) => {
      chai.request(server)
        .post(`${testPath}signup`)
        .send(mockUserWithoutFirstname)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Firstname field cannot be empty');
          done(err);
        });
    });

    it('should return error when username field is null', (done) => {
      chai.request(server)
        .post(`${testPath}signup`)
        .send(mockUserWithoutUsername)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Username field cannot be empty');
          done(err);
        });
    });

    it('should return error when password field is null', (done) => {
      chai.request(server)
        .post(`${testPath}signup`)
        .send(mockUserWithoutPassword)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Password field cannot be empty');
          done(err);
        });
    });

    it('should return error when user already exists', (done) => {
      chai.request(server)
        .post(`${testPath}signup`)
        .send(mockUserWithExistingEmail)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            'The user already exists, try a different email'
          );
          done(err);
        });
    });

    it('should return error when email is invalid', (done) => {
      chai.request(server)
        .post(`${testPath}signup`)
        .send(mockUserWithInvalidEmail)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            'The email is invalid'
          );
          done(err);
        });
    });
  });
});
