var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
  template: templates.includes.card,
  events: {
    'click': 'handleClick'
  },
  bindings: {
    'model.backIsActive': {
      type: 'booleanClass',
      name: 'back-is-active'
    }
  },
  handleClick: function (event) {
    this.model.backIsActive = !this.model.backIsActive;
  }
});
