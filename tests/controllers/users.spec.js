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
  mockUserWithoutPassword,
  mockUserLogin,
  mockUserLoginMissingEmail,
  mockUserLoginMissingPassword,
  mockUserLoginInvalidCredentials
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

    it('should login a valid user', (done) => {
      chai.request(server)
        .post(`${testPath}login`)
        .send(mockUserLogin)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal(
            'Login successful'
          );
          done(err);
        });
    });

    it('should return error if email is missing', (done) => {
      chai.request(server)
        .post(`${testPath}login`)
        .send(mockUserLoginMissingEmail)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            'Email field cannot be empty'
          );
          done(err);
        });
    });

    it('should return error if password is missing', (done) => {
      chai.request(server)
        .post(`${testPath}login`)
        .send(mockUserLoginMissingPassword)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            'Password field cannot be empty'
          );
          done(err);
        });
    });

    it('should return error if credntial is wrong', (done) => {
      chai.request(server)
        .post(`${testPath}login`)
        .send(mockUserLoginInvalidCredentials)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal(
            'Your credentials are incorrect'
          );
          done(err);
        });
    });
  });
});
