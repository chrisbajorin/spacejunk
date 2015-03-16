"use strict";

module.exports = {
    env    : "development",
    hostURL: "localhost:5000", // unknown currently
    email  : "chris.bajorin@gmail.com",
    mongo  : {
        uri: "mongodb://" + process.env.MONGOLAB_ID +  ":" + process.env.MONGOLAB_PW + "@ds031751.mongolab.com:31751/orbitaljunk"
    }
};
