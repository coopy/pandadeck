var Collection = require('ampersand-localstorage-collection');
var CardModel = require('./card');

module.exports = Collection.extend({
  model: CardModel,
  namespace: 'card-collection'
});
