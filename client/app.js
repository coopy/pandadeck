var domready = require('domready');
var Router = require('./router');
var MainView = require('./views/main.js');
var CardCollection = require('./models/card-collection');

window.app = {
  init: function () {
    var self = this;

    this.cards = new CardCollection();
    this.cards.fetch();

    this.router = new Router();

    domready(function () {
      self.view = new MainView({
        el: document.body
      });

      self.router.history.start({ pushState: true });
    });

  }
};

window.app.init();
