var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var CardView = require('../views/card');
var templates = require('../templates');

module.exports = View.extend({
  template: templates.pages.flash,
  autoRender: true,
  // The currently displayed card's index.
  cardIndex: 0,
  events: {
    'click .next-card': 'handleClickNextCard',
    'click .previous-card': 'handleClickPreviousCard',
  },
  initialize: function (options) {
    this.deckIndex = options.deckIndex;
    this.model = app.decks.at(this.deckIndex);
    this.model.cards.fetch();
  },
  render: function () {
    this.renderWithTemplate();
    this.cardSwitcher = new ViewSwitcher(this.queryByHook('card-container'));
    if (this.model.cards.length > 0) {
      this.renderCard();
    } else {
      this.listenToOnce(this.model.cards, 'sync', this.renderCard);
    }
  },
  renderCard: function () {
    this.cardSwitcher.set(new CardView({ model: this.model.cards.at(this.cardIndex) }));
  },
  handleClickNextCard: function (event) {
    event.preventDefault();
    if (this.cardIndex < this.model.cards.length - 1) {
      // Increment cardIndex and render next card.
      this.cardIndex += 1;
      this.renderCard();
    } else {
      console.log('End of cards');
    }
  },
  handleClickPreviousCard: function (event) {
    event.preventDefault();
    if (this.cardIndex > 0) {
      // Decrement cardIndex and render previous card.
      this.cardIndex -= 1;
      this.renderCard();
    } else {
      console.log('Beginning of cards');
    }
  }

});