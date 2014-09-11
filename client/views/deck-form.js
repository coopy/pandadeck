var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');


module.exports = FormView.extend({
  fields: function () {
    return [
      new InputView({
        label: 'Name your deck!',
        name: 'name',
        type: 'text',
        value: this.model && this.model.name,
        parent: this
      })
    ];
  }
});