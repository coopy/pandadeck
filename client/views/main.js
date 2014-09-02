var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');


module.exports = View.extend({
  autoRender: true,
  template: templates.main,
  events: {
    'click a[href]': 'handleLinkClick',
  },
  initialize: function () {
    this.listenTo(app.router, 'page', this.handleNewPage);
  },
  render: function () {
    this.renderWithTemplate();
    this.pages = new ViewSwitcher(this.queryByHook('page-container'));
  },
  handleLinkClick: function (event) {
    var target = event.target;
    var isLocal = target.host === window.location.host;

    if (isLocal && !event.altKey && !event.metaKey && !event.shiftKey && !event.ctrlKey) {
      event.preventDefault();
      app.router.history.navigate(target.pathname, { trigger: true });
    }
  },
  handleNewPage: function (pageView) {
    this.pages.set(pageView);
  }
});