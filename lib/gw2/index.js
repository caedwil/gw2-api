const request = require('../request');

module.exports = {};

const endpoints = {
  authenticated: [
    'account',
    'account/achievements',
    'account/bank',
    'account/dungeons',
    'account/dyes',
    'account/finishers',
    'account/home/cats',
    'account/home/nodes',
    'account/inventory',
    'account/masteries',
    'account/materials',
    'account/minis',
    'account/outfits',
    'account/raids',
    'account/recipes',
    'account/skins',
    'account/titles',
    'account/wallet',
    'commerce/transactions',
    'commerce/transactions/current',
    'commerce/transactions/current/buys',
    'commerce/transactions/current/sells',
    'commerce/transactions/history',
    'commerce/transactions/history/buys',
    'commerce/transactions/history/sells',
    'tokeninfo'
  ],
  paginated: [
    'outfits',
    'pets',
    'professions',
    'legends',
    'titles'
  ],
  unpaginated: [
    'achievements',
    'achievements/categories',
    'achievements/groups',
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
  ],
  other: [
    'achievements/daily',
    'achievements/daily/tomorrow',
    'build'
  ]
};

for (let key in endpoints) {
  for (let endpoint of endpoints[key]) {
    request[key](endpoint, module.exports);
  }
}
