const request = require('../request');
const init = require('../init');

module.exports = {};

const endpoints = {
  other: [
    'achievements',
    'achievements/groups',
    'achievements/categories'
  ],
  daily: [
    'achievements/daily',
    'achievements/daily/tomorrow'
  ]
};

for (let endpoint of endpoints.other) {
  init(endpoint, module.exports, function(ids, lang, cb) {
    // Setup an empty parameter object.
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

    request('/' + endpoint, params, cb);
  });
}

for (let endpoint of endpoints.daily) {
  init(endpoint, module.exports, function(cb) {
    request('/' + endpoint, null, cb);
  });
}
