var domready = require('domready');
var MainView = require('./views/main.js');
var CardCollection = require('./models/card-collection');

window.app = {
  init: function () {
    var self = this;

    this.cards = new CardCollection();
    this.cards.fetch();

    domready(function () {
      self.view = new MainView({
        el: document.body
      });
    });

  }
};

window.app.init();
