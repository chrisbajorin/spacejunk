'use strict';

exports.parseQueryString = function (req, res, next) {
  var filters = req.query.filters;

  if (filters && filters.length) {
    req.query.filters = parseArrayAsJSON(filters);
  }

  next();
}

//
// PRIVATES
//

function parseArrayAsJSON(array) {
  if (!Array.isArray(array)) {
    array = [].concat(array);
  }

  return array.map(function (array) {
    return JSON.parse(array);
  });

}

