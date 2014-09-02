var CardView = require('./card');
var CardForm = require('../views/card-form');
var CardModel = require('../models/card');
var templates = require('../templates');

var forEach = Array.prototype.forEach;


module.exports = CardView.extend({
  template: templates.includes['card-form-wrapper'],
  autoRender: true,
  events: {
    'click .edit-front': 'handleClickEdit',
    'click .edit-back': 'handleClickEdit'
  },
  initialize: function () {
    this.model = new CardModel();
  },
  render: function () {
    var self = this;

    this.renderWithTemplate();
    this.form = new CardForm({
      model: this.model,
      el: this.queryByHook('card-form'),
      submitCallback: function (data) {
        app.cards.create(data);
        var inputs = self.form.el.getElementsByTagName('textarea');
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].value = '';
        }
      }
    });
    this.registerSubview(this.form);
    this.focusForm();
  },
  focusForm: function () {
    var questionInput = this.query('textarea[name="question"]');
    questionInput.focus();
  },
  handleClickEdit: function (event) {
    event.preventDefault();
    var shouldEditBack = event.target.classList.contains('edit-back');
    this.model.backIsActive = shouldEditBack;
  }
});