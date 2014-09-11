var Collection = require('ampersand-localstorage-collection');
var DeckModel = require('./deck');

module.exports = Collection.extend({
  model: DeckModel,
  namespace: 'deck-collection'
});
