module.exports = {
  extend: 'apostrophe-pieces-widgets',
  label: 'Events Widget',
  byAllLabel: 'Upcoming Events',
  byTagLabel: 'Upcoming Events by Tag',

  //Create functions for pushing assets and create singleton in browser
  afterConstruct: function(self) {
  self.pushAssets();
  },

  construct: function(self, options) {
    // Append upcoming flag by extending widgetCursor.
    var superWidgetCursor = self.widgetCursor;
    self.widgetCursor = function(req, criteria) {
      return superWidgetCursor(req, criteria).upcoming(true);
    };
  }
}