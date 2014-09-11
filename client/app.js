var domready = require('domready');
var Router = require('./router');
var MainView = require('./views/main.js');
var DeckCollection = require('./models/deck-collection');

window.app = {
  init: function () {
    var self = this;

    this.decks = new DeckCollection();
    this.decks.fetch();

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
