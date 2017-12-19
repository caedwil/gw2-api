const util = require('../util');

module.exports = function(endpoint, base) {
  util.endpoint.extend(endpoint, base, function(ids, page, pageSize, lang, cb) {
    // Initialise parameters as an empty object.
    let params = {};

    if (ids && typeof ids === 'function') {
      // If the first argument is a function, disregard any remaining
      // arguments and pass an empty sets of parameters to the request.
      cb = ids;
    } else if (page && typeof page === 'function') {
      // If the second argument is a function, disregard any remaining
      // arguments and pass just the 'ids' parameter.
      cb = page;
      params.ids = ids;
    } else {
      // Pass all parameters (null is fine).
      params.ids = ids;
      params.page = page;
      params.page_size = pageSize;
      params.lang = lang;
    }

    util.endpoint.request(endpoint, params, cb);
  });
};
