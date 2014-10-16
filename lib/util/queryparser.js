"use strict";

exports.buildQuery = function(query, filters) {

    for (var ii = 0; ii < filters.length; ii++) {

        var filter = filters[ii];
        if (filter.queryType === "EQL") {
            query.where(filter.field).equals(filter.value);
        }

        if (filter.queryType === "GTE") {
            query.where(filter.field).gte(filter.value);
        }
    }
};