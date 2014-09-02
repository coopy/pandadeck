var Router = require('ampersand-router');
var CardsPage = require('./pages/cards');
var FlashPage = require('./pages/flash');

module.exports = Router.extend({
  routes: {
    ''      : 'cards',
    'cards' : 'cards',
    'flash' : 'flash'
  },

  cards: function () {
    this.trigger('page', new CardsPage());
  },

  flash: function () {
    this.trigger('page', new FlashPage());
  }
});
