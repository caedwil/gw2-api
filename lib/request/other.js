const util = require('../util');

module.exports = function(endpoint, base) {
  util.endpoint.extend(endpoint, base, function(cb) {
    util.endpoint.request(endpoint, null, cb);
  });
};
