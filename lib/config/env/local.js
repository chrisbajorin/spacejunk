'use strict';

module.exports = {
  env: 'local',
  https: false,
  hostURL: 'localhost:3000',
  email: {
  admins: ['christopher.bajorin@gmail.com']
  },
  mongo: {
    uri: 'mongodb://localhost/sj-local',
    session_db_uri: 'mongodb://localhost/sj-local'
  }
};
