var View = require('ampersand-view');
var CardFormWrapper = require('../views/card-form-wrapper');
var CardListItemView = require('../views/card-list-item');
var templates = require('../templates');


module.exports = View.extend({
  template: templates.pages.cards,
  autoRender: true,
  initialize: function (options) {
    this.deckIndex = options.deckIndex;
    this.model = app.decks.at(this.deckIndex);
    this.model.cards.fetch();
  },

  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.model.cards, CardListItemView, this.queryByHook('card-collection'));
    this.cardFormWrapper = new CardFormWrapper({
      el: this.queryByHook('card-form-wrapper'),
      deckIndex: this.deckIndex
    });
    this.registerSubview(this.cardFormWrapper);
  }
});

