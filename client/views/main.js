var CardView = require('./card');
var View = require('ampersand-view');
var templates = require('../templates');

var forEach = Array.prototype.forEach;


module.exports = View.extend({
  autoRender: true,
  template: templates.main,
  events: {
    'submit form': 'handleSubmitCard'
  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(app.cards, CardView, this.queryByHook('card-collection'));
    this.focusForm();
  },
  handleSubmitCard: function (event) {
    event.preventDefault();

    var inputs = document.getElementsByTagName('input', event.srcElement);
    var props = {};
    var propName, propValue;

    forEach.call(inputs, function (input) {
      propName = input.attributes.getNamedItem('name').value;
      propValue = input.value;

      // Simple validation
      if (!propValue.length) {
        return;
      }

      props[propName] = propValue;
    });

    app.cards.create(props);
    this.render();
  },
  focusForm: function () {
    var questionInput = this.query('input[name="question"]');
    questionInput.focus();
  }
});