var CardView = require('./card');
var CardForm = require('../views/card-form');
var CardModel = require('../models/card');
var templates = require('../templates');

var forEach = Array.prototype.forEach;


module.exports = CardView.extend({
  template: templates.includes['card-form-wrapper'],
  autoRender: true,
  events: {
    'click .flip-card' : 'handleClickFlip',
    'keypress input'   : 'handleKeypressInput',
    'keypress textarea': 'handleKeypressInput'
  },
  initialize: function (options) {
    this.model = new CardModel();
    this.deckIndex = options.deckIndex;
  },
  render: function () {
    var self = this;

    this.renderWithTemplate();
    this.form = new CardForm({
      model: this.model,
      el: this.queryByHook('card-form'),
      submitCallback: this.handleSubmitForm
    });
    this.registerSubview(this.form);
    this.focusForm();
  },
  focusForm: function () {
    var name = this.model.backIsActive ? 'back' : 'front';
    var textarea = this.query('textarea[name="' + name + '"]');
    textarea.focus();
  },
  handleSubmitForm: function (data) {
    var deckModel = app.decks.at(self.deckIndex);
    deckModel.cards.create(data);
    self.form.reset();
    self.model.backIsActive = false;
    self.focusForm();
  },
  handleClickFlip: function (event) {
    event.preventDefault();
    this.model.backIsActive = !this.model.backIsActive;
  },
  handleKeypressInput: function (event) {
    // Do stuff on "return" keypress
    if (event.which === 13 && !event.shiftKey) {
      event.preventDefault();
      // If the front is showing, show the back.
      if (event.target.name === 'front') {
        this.model.backIsActive = true;
        this.focusForm();
      } else {
        // Calling submit() on the form element will not run event handlers.
        this.form.submit();
      }
    }
  }
});