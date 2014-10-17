"use strict";

exports.parseQueryString = function (req, res, next) {

    var filters = req.query.filters;

    if (filters && filters.length) {
        req.query.filters = JSON.parse(filters)
    }

    next();
};