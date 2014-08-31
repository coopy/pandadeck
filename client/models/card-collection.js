var Collection = require('ampersand-rest-collection');
var CardModel = require('./card');
var store = window.localStorage;

module.exports = Collection.extend({
  model: CardModel,
  index: 0,

  sync: function (method, model, options) {
    var data;
    var id;

    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
        data = options.attrs || model.toJSON(options);
        id = data.id;
    }

    if (method === 'read') {
      return store.getItem(this.getKey(id));
    }

    if (method === 'delete') {
      return store.removeItem(id);
    }

    if (method === 'create') {
      id = this.getNextId();
    }

    return store.setItem(this.getKey(id), data);
  },

  getKey: function (id) {
    return 'card_' + id;
  },

  getNextId: function () {
    var id = this.index;
    this.index = this.index + 1;
    return id;
  }
});

var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
};