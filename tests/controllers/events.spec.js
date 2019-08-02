import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../src/index';
import {
  mockCreateEvent,
  mockEventsWithoutTitleField,
  mockAlreadyExistingEvents
} from '../mocks/events.mock';

chai.use(chaiHttp);
const { expect } = chai;

const testPath = '/api/v1/roles/';

describe('Events Endpoints test', () => {
  describe('/POST Request', () => {
    it('should create an event data', (done) => {
      chai.request(server)
        .post(`${testPath}events`)
        .send(mockCreateEvent)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('Event created');
          done(err);
        });
    });

    it('should not create an event when title field is empty', (done) => {
      chai.request(server)
        .post(`${testPath}events`)
        .send(mockEventsWithoutTitleField)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Kindly fill in all the details!');
          done(err);
        });
    });

    it('should not update event if ID is not found', (done) => {
      const id = "o"
      chai.request(server)
        .post(`${testPath}events/:${id}`)
        .end((err, res) => {
          expect(res.body).to.be.a('object');
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Not Found!');
          done(err);
        });
    });
  });
});
