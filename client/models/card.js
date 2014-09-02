var Model = require('ampersand-model');

module.exports = Model.extend({
  props: {
    question: 'string',
    answer: 'string',
    backIsActive: false
  }
});