"use strict";
//
// Query model for easy mongoose filters
//

var _ = require("lodash");

exports.queryModel = function() {

    var _filters = [];
    var _fields;
    var _options = {};
    var qm = {};

    Object.defineProperties(qm, {

        // Build filters and push to _filters
        addEqualsQuery: { value: addEqualsQuery },
        addGteQuery: { value: addGteQuery },
        addLteQuery: { value: addLteQuery },
        addOrQuery: { value: addOrQuery },
        addMatchQuery: { value: addMatchQuery },

        // Build and return filters for
        // construction within the OR array
        buildEqualsQuery: { value: buildEqualsQuery },
        buildGteQuery: { value: buildGteQuery },
        buildLteQuery: { value: buildLteQuery },
        buildOrQuery: { value: buildOrQuery },
        buildMatchQuery: { value: buildMatchQuery },

        // options
        setLean: { value: setLean },
        setUpsert: { value: setUpsert },
        setOptions: { value: setOptions },
        selectFields: { value: selectFields },

        // getters
        getFilters: { value: getFilters },
        buildQuery: { value: buildQuery },
        buildFilterObject: { value: buildFilterObject }
    });

    return qm;

    /**
     * @param {Object} Model - Mongoose Model
     * @returns {Object} - Mongoose Query
     */
    function buildQuery(Model) {

        if (!Model) {

            throw new Error("buildQuery() requires a mongoose model");
        }

        var query = constructQueryObject(_filters);
        var fields = _fields || null;
        return Model.find(query, fields, _options);
    }

    /**
     *
     * @returns {Object}
     */
    function buildFilterObject() {

        return constructQueryObject(_filters);
    }

    /**
     *
     * @param {String} field
     * @param {String|Number} value
     */
    function addEqualsQuery(field, value) {
        handleQueryError(field, value);

        var filter = buildEqualsQuery(field, value);
        _filters.push(filter);
    }

    /**
     *
     * @param {String} field
     * @param {String|Number} value
     */
    function addGteQuery(field, value) {
        handleQueryError(field, value);

        var filter = buildGteQuery(field, value);
        _filters.push(filter);
    }

    /**
     *
     * @param {String} field
     * @param {String|Number} value
     */
    function addLteQuery(field, value) {
        handleQueryError(field, value);

        var filter = buildLteQuery(field, value);
        _filters.push(filter);
    }

    /**
     *
     * @param {Array} conditions
     */
    function addOrQuery(conditions) {
        handleQueryError("", conditions);

        var filter = buildOrQuery(conditions);
        _filters.push(filter);
    }

    /**
     *
     * @param {String} field
     * @param {Array} value
     */
    function addMatchQuery(field, value) {
        handleQueryError(field, value);

        var filter = buildMatchQuery(field, value);
        _filters.push(filter);
    }

    //
    // Build filters
    //
    /**
     *
     * @param {String} field
     * @param value
     * @returns {{type: String, field: String, value: *}}
     */
    function buildEqualsQuery(field, value) {

        return buildFilter("EQUALS", field, value);
    }

    /**
     *
     * @param {String} field
     * @param value
     * @returns {{type: String, field: String, value: *}}
     */
    function buildLteQuery(field, value) {

        return buildFilter("LTE", field, value);
    }

    /**
     *
     * @param {String} field
     * @param value
     * @returns {{type: String, field: String, value: *}}
     */
    function buildGteQuery(field, value) {

        return buildFilter("GTE", field, value);
    }

    /**
     *
     * @param {Array} conditions
     * @returns {{type: String, conditions: Array}}
     */
    function buildOrQuery(conditions) {

        return buildConditionalFilter("OR", conditions);
    }

    /**
     *
     * @param {String} field
     * @param {Array} value
     * @returns {{type: String, field: String, value: Array}}
     */
    function buildMatchQuery(field, value) {

        return buildFilter("MATCH", field, value);
    }

    /**
     *
     * @returns {Array}
     */
    function getFilters() {
        return _filters;
    }

    /**
     *
     * @param {Boolean} lean
     */
    function setLean(lean) {
        _.merge(_options, {lean: lean});
    }

    /**
     *
     * @param {Boolean} upsert
     */
    function setUpsert(upsert) {
        _.merge(_options, {upsert: upsert});
    }

    /**
     *
     * @param {Object} options
     */
    function setOptions(options) {
        _options = options;
    }

    /**
     *
     * @param {Array|String} fields
     * @param {Boolean} include
     */
    function selectFields(fields, include) {

        fields = [].concat(fields);
        if (include) {
            _fields += fields.join(" ");
        } else {
            _fields += "-" + fields.join(" -");
        }
    }
};












//
// PRIVATES
//



/**
 *
 * @param {String} type
 * @param {String} field
 * @param {String|Number|Array} value
 * @returns {{type: String, field: String, value: *}}
 */

function buildFilter(type, field, value) {

    return {
        type: type,
        field: field,
        value: value
    };
}

/**
 *
 * @param {String} type
 * @param {Array} conditions
 * @returns {{type: String, conditions: Array}}
 */
function buildConditionalFilter(type, conditions) {

    return {
        type: type,
        conditions: conditions
    };
}


/**
 *
 * @param {String} field
 * @param {*} value
 * @returns {Error}
 */
function handleQueryError(field, value) {

    if (typeof field !== "string") {
        return new Error("field must be a string");
    }

    if (!value) {
        return new Error("requires both a field and a value");
    }
}


/**
 *
 * @param {Array} filters
 * @returns {Object}
 */
function constructQueryObject(filters) {

    var query = {};

    for (var i = 0; i < filters.length; i++) {

        var filter = filters[i];
        var param = {};

        if (filter.type === "EQUALS") {

            param[filter.field] = filter.value;
            _.merge(query, param);
        }

        if (filter.type === "NOT") {

            param[filter.field] = {$ne: filter.value};
            _.merge(query, param);
        }

        else if (filter.type === "GTE") {

            param[filter.field] = {$gte: filter.value};
            _.merge(query, param);
        }

        else if (filter.type === "LTE") {

            param[filter.field] = {$lte: filter.value};
            _.merge(query, param);
        }

        else if (filter.type === "OR") {

            param.$or = [];
            for (var j = 0; j < filter.conditions.length; j++) {

                var condition = [].concat(filter.conditions[j]);
                var q = constructQueryObject(condition);
                param.$or.push(q);
            }
            _.merge(query, param);
        }

        else if (filter.type === "MATCH") {

            //var matchArray = [].concat(filter.value);

            param[filter.field] = { $elemMatch: constructQueryObject(filter.value) };
            _.merge(query, param);
        }
    }
    return query;
}
