"use strict";

module.exports = {
    env  : "test",
    port : 5000,
    email: {
        admins: ["christopher.bajorin@gmail.com"]
    },
    mongo: {
        uri: "mongodb://localhost/sj-test"
        // session_db_uri: "mongodb://localhost/sj-local"
    }
};
