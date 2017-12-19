const request = require('../request');
const init = require('../init');

module.exports = {
  pvp: function(cb) {
    request('/pvp', null, cb);
  }
};

let endpoints = {
  authenticated: [
    'stats',
    'standings'
  ],
  
};
