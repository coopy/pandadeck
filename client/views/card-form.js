var FormView = require('ampersand-form-view');
var CardInputView = require('./card-input');

module.exports = FormView.extend({
  fields: function () {
    return [
      new CardInputView({
        label: 'Front of card',
        name: 'front',
        type: 'textarea',
        value: this.model && this.model.question,
        // placeholder: 'Front of card',
        parent: this,
        tests: [
          function (val) {
            var length = val.trim().length;
            if (length === 0) return "Enter a text to quiz someone on.";
          }
        ]
      }),
      new CardInputView({
        label: 'Back of card',
        name: 'back',
        type: 'textarea',
        value: this.model && this.model.front,
        // placeholder: 'Back of card',
        parent: this,
        tests: [
          function (val) {
            var length = val.trim().length;
            if (length === 0) return "Enter the answer to the quiz.";
          }
        ]
      })
    ];
  }
});