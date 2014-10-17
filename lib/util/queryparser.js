"use strict";

exports.buildQuery = function(query, filters) {

    for (var ii = 0; ii < filters.length; ii++) {

        var filter = filters[ii];

        if (filter.queryType === "EQL") {
            query.where(filter.field).equals(filter.value);
        }
        else if (filter.queryType === "GTE") {
            query.where(filter.field).gte(filter.value);
        }
        else if (filter.queryType === "LTE") {
            query.where(filter.field).lte(filter.value);
        }
    }

};