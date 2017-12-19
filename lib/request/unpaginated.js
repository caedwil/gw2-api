const util = require('../util');

module.exports = function(endpoint, base) {
  util.endpoint.extend(endpoint, base, function(ids, lang, cb) {
    // Initialise parameters as an empty object.
    let params = {};

    if (ids && typeof ids === 'function') {
      // If the first argument is a function, disregard any remaining
      // arguments and pass an empty set of parameters.
      cb = ids;
    } else if (lang && typeof lang === 'function') {
      // If the second argument is a function, disregard any remaining
      // arguments and pass just the 'ids' parameter.
      cb = lang;
      params.ids = ids;
    } else {
      // Pass all parameters (null is fine).
      params.ids = ids;
      params.lang = lang;
    }

    util.endpoint.request(endpoint, params, cb);
  });
};
