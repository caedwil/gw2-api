const request = require('../request');
const init = require('../init');

module.exports = {
  account: function(token, cb) {
    request('/account', { access_token: token }, cb);
  }
};

const endpoints = [
  'achievements',
  'bank',
  'dungeons',
  'dyes',
  'finishers',
  'home/cats',
  'home/nodes',
  'inventory',
  'masteries',
  'materials',
  'minis',
  'outfits',
  'raids',
  'recipes',
  'skins',
  'titles',
  'wallet'
];

for (let endpoint of endpoints) {
  init(endpoint, module.exports.account, function(token, cb) {
    request('/account/' + endpoint, { access_token: token }, cb);
  });
}

for (let endpoint of endpoints) {
  request.authenticated(endpoint, module.exports.account);
}
