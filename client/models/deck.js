var Model = require('ampersand-state');
var CardCollection = require('./card-collection');

module.exports = Model.extend({
  props: {
    name: 'string'
  },
  derived: {
    cardsURL: {
      deps: [],
      fn: function () {
        return ['/deck', app.decks.indexOf(this), 'cards'].join('/');
      }
    }
  },
  children: {
    cards: CardCollection
  }
});