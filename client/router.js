var Router = require('ampersand-router');
var DecksPage = require('./pages/decks');
var CardsPage = require('./pages/cards');
var FlashPage = require('./pages/flash');

module.exports = Router.extend({
  routes: {
    ''                       : 'decks',
    'decks'                  : 'decks',
    'decks/:deckIndex'       : 'cards',
    'decks/:deckIndex/flash' : 'flash'
  },

  decks: function () {
    this.trigger('page', new DecksPage());
  },

  cards: function (deckIndex) {
    deckIndex = window.parseInt(deckIndex, 10);
    this.trigger('page', new CardsPage({
      deckIndex: deckIndex
    }));
  },

  flash: function (deckIndex) {
    deckIndex = window.parseInt(deckIndex, 10);
    this.trigger('page', new FlashPage({
      deckIndex: deckIndex
    }));
  }
});
