'use strict';

module.exports = {
  env: 'local',
  https: false,
  port: 5000,
  hostURL: 'localhost:5000',
  email: {
  admins: ['christopher.bajorin@gmail.com']
  },
  mongo: {
    uri: 'mongodb://localhost/sj-local'
    // session_db_uri: 'mongodb://localhost/sj-local'
  }
};
