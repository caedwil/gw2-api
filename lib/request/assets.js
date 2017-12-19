const util = require('../util');

module.exports = function(endpoint, base) {
  util.endpoint.extend(endpoint, base, function(ids, cb) {
    // Initialise parameters as an empty object.
    let params = {};

    if (ids && typeof ids === 'function') {
      // If the first argument is a function, disregard any remaining
      // arguments and pass an empty set of parameters.
      cb = ids;
    } else {
      // Pass the 'ids' parameter (null is fine).
      params.ids = ids;
    }

    util.endpoint.request(endpoint, params, cb);
  });
};
