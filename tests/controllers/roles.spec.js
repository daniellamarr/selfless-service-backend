import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';
import {
  mockCreateRole,
  mockRoleWithoutTitleField,
  mockAlreadyExistingRole
} from '../mocks/roles.mock';

chai.use(chaiHttp);
const { expect } = chai;

const testPath = '/api/v1/roles/';

describe('Roles Endpoints test', () => {
  describe('/POST Request', () => {
    it('should create a user role', (done) => {
      chai.request(server)
        .post(`${testPath}create`)
        .send(mockCreateRole)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('Role created');
          done(err);
        });
    });

    it('should not create a role when title field is empty', (done) => {
      chai.request(server)
        .post(`${testPath}create`)
        .send(mockRoleWithoutTitleField)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('The title field cannot be empty');
          done(err);
        });
    });

    it('should not create a role when that role already exists', (done) => {
      chai.request(server)
        .post(`${testPath}create`)
        .send(mockAlreadyExistingRole)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('This role already exists');
          done(err);
        });
    });
  });
});
