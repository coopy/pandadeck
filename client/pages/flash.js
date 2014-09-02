var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var CardView = require('../views/card');
var templates = require('../templates');

module.exports = View.extend({
  template: templates.pages.flash,
  autoRender: true,
  cardIndex: 0,
  events: {
    'click .next-card': 'handleClickNextCard',
    'click .previous-card': 'handleClickPreviousCard',
  },
  render: function () {
    this.renderWithTemplate();
    this.cardSwitcher = new ViewSwitcher(this.queryByHook('card-container'));
    if (app.cards.length > 0) {
      this.renderCard();
    } else {
      this.listenToOnce(app.cards, 'sync', this.renderCard);
    }
  },
  renderCard: function () {
    this.cardSwitcher.set(new CardView({ model: app.cards.at(this.cardIndex) }));
  },
  handleClickNextCard: function (event) {
    event.preventDefault();
    if (this.cardIndex < app.cards.length - 1) {
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