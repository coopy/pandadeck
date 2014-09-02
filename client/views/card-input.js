var InputView = require('ampersand-input-view');
var templates = require('../templates');

module.exports = InputView.extend({
  template: templates.includes['card-input'],
  render: function () {
    InputView.prototype.render.call(this, arguments);
    this.el.dataset['name'] = this.name;
  }
});