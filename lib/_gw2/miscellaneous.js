const request = require('../request');
const init = require('../init');

module.exports = {
  assets: {}
};

const endpoints = {
  paginated: [
    'outfits',
    'pets',
    'professions',
    'legends',
    'titles'
  ],
  other: [
    'colors',
    'currencies',
    'dungeons',
    'masteries',
    'minis',
    'races',
    'raids',
    'specializations',
    'skills',
    'traits',
    'worlds'
  ],
  assets: [
    'files',
    'quaggans'
  ]
};

module.exports.build = function(cb) {
  request('/build', null, cb);
};

module.exports.tokeninfo = function(token, cb) {
  request('/tokeninfo', { access_token: token }, cb);
};

for (let endpoint of endpoints.paginated) {
  init(endpoint, module.exports, function(ids, page, pageSize, lang, cb) {
    // Initialise parameters as an empty object.
    let params = {};

    if (ids && typeof ids === 'function') {
      // If the first argument is a function, disregard any remaining
      // arguments and pass an empty set of parameters to the request.
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

    request('/' + endpoint, params, cb);
  });
}

for (let endpoint of endpoints.other) {
  init(endpoint, module.exports, function(ids, lang, cb) {
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

    request('/' + endpoint, params, cb);
  });
}

for (let endpoint of endpoints.assets) {
  init(endpoint, module.exports.assets, function(ids, cb) {
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

    request('/' + endpoint, params, cb);
  });
}
