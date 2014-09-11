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
        return ['/decks', app.decks.indexOf(this)].join('/');
      }
    },
    flashURL: {
      deps: [],
      fn: function () {
        return ['/decks', app.decks.indexOf(this), 'flash'].join('/');
      }
    }
  },
  children: {
    cards: CardCollection
  }
});