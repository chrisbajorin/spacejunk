app = require('../../server');

chai = require('chai');
should = chai.should();
expect = chai.expect;
assert = chai.assert;

request = require('supertest');
server = request.agent('http://localhost:5000');

mongoose = require('mongoose');
Satellite = mongoose.model('Satellite');