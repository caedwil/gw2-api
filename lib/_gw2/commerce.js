const request = require('../request');
const init = require('../init');

module.exports = {
  commerce: {}
};

const endpoints = [
  'transactions',
  'transactions/current',
  'transactions/current/buys',
  'transactions/current/sells',
  'transactions/history',
  'transactions/history/buys',
  'transactions/history/sells'
];

for (let endpoint of endpoints) {
  init(endpoint, module.exports.commerce, function(token, cb) {
    request('/commerce/' + endpoint, { access_token: token }, cb);
  });
}
