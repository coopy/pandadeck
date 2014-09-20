var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    front: 'string',
    back: 'string',
    backIsActive: false
  },
  derived: {
    // 1-based collection index.
    cardNumber: {
      deps: [],
      fn: function () {
        if (this.collection) {
          return 1 + this.collection.indexOf(this);
        }
      }
    }
  }
});