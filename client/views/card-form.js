var FormView = require('ampersand-form-view');
var CardInputView = require('./card-input');

module.exports = FormView.extend({
  fields: function () {
    return [
      new CardInputView({
        label: 'Front of card',
        name: 'question',
        type: 'textarea',
        value: this.model && this.model.question,
        placeholder: 'Enter front of card text here',
        parent: this,
        tests: [
          function (val) {
            var length = val.trim().length;
            if (length === 0) return "Please enter some text.";
          }
        ]
      }),
      new CardInputView({
        label: 'Back of card',
        name: 'answer',
        type: 'textarea',
        value: this.model && this.model.answer,
        placeholder: 'Enter back of card text here',
        parent: this,
        tests: [
          function (val) {
            var length = val.trim().length;
            if (length === 0) return "Please enter some text.";
          }
        ]
      })
    ];
  }
});