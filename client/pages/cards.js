var View = require('ampersand-view');
var CardView = require('../views/card');
var CardFormWrapper = require('../views/card-form-wrapper');
var templates = require('../templates');


module.exports = View.extend({
  template: templates.pages.cards,
  autoRender: true,

  render: function () {
    this.renderWithTemplate();
    this.renderCollection(app.cards, CardView, this.queryByHook('card-collection'));
    this.cardFormWrapper = new CardFormWrapper({
      el: this.queryByHook('card-form-wrapper')
    });
    this.registerSubview(this.cardFormWrapper);
  }
});

