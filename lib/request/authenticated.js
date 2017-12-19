const util = require('../util');

module.exports = function(endpoint, base) {
  util.endpoint.extend(endpoint, base, function(token, cb) {
    util.endpoint.request(endpoint, { access_token: token }, cb);
  });
};
