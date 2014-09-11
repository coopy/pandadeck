var View = require('ampersand-view');
var templates = require('../templates');

console.log(templates.includes);

module.exports = View.extend({
  template: templates.includes['card-list-item']
});