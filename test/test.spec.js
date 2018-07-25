let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

describe('/ url test', () => {
  it('it should GET main url', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        if (res) {
          res.should.have.status(200);
          res.body.should.have.property('message').eql('Hello World');
        }
        done();
      });
  });
});