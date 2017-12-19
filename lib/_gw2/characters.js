const request = require('../request');
const init = require('../init');

module.exports = {
  characters: function(ids, token, cb) {
    request('/characters', {
      ids: ids,
      access_token: token
    }, cb);
  }
};

const endpoints = [
  'backstory',
  'core',
  'crafting',
  'equipment',
  'heropoints',
  'inventory',
  'recipes',
  'sab',
  'skills',
  'specializations',
  'training'
];

for (let endpoint of endpoints) {
  init(endpoint, module.exports.characters, function(id, token, cb) {
    // Convert regular spaces in the character ID to URL-safe spaces.
    id = id.replace(' ', '%20');

    // Request information for the specified character.
    request('/characters/' + id + '/' + endpoint, { access_token: token }, cb);
  });
}
