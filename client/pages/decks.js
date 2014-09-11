var View = require('ampersand-view');
var DeckView = require('../views/deck');
var DeckForm = require('../views/deck-form');
var DeckModel = require('../models/deck');
var templates = require('../templates');


module.exports = View.extend({
  template: templates.pages.decks,
  autoRender: true,
  events: {
    'click #add-new-deck': 'handleAddNewDeck'
  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(app.decks, DeckView, this.queryByHook('deck-collection'));
    this.createNewDeckForm();
  },
  createNewDeckForm: function () {
    var self = this;

    this.form = new DeckForm({
      model: new DeckModel(),
      el: this.queryByHook('deck-form'),
      submitCallback: function (data) {
        // TODO consider triggering an event instead
        app.decks.create(data);
        // `this` is the form view.
        this.el.classList.add('hidden');
      }
    });
    this.registerSubview(this.form);
  },
  // TODO why doesn't the second time around render the form? Perhaps hide button.
  handleAddNewDeck: function (event) {
    this.form.el.classList.remove('hidden');
  }
});
