var path = require('path');

var apos = require('apostrophe')({
  shortName: 'fullpage-cms',
  baseUrl: process.env.BASE_URL,

  modules: {

    //Style modules
    'smartscroll': {},
    'apostrophe-video-widgets': {},
    'apostrophe-favicons': {},
    'background-widgets': {},
    'materialize': {},
    'texts': {},
    'texts-widgets': {},
    'card-widgets': {},
    'double-widgets': {},
    'materialize-video-widgets': {},
    'materialize-events': {},
    'materialize-events-widgets': {},

    //Production modules
    'apostrophe-seo': {},
    'apostrophe-open-graph': {},
    'apostrophe-global': {
      seoGoogleFields: true
    },
    'apostrophe-site-map': {
      excludeTypes: []
    },
    'apostrophe-optimizer': {
      enable: true,
      stats: false,
      debug: false
    },
    'apostrophe-favicons': {},
    'apostrophe-favicons-global': {
      destinationDir: '/fav/',
      faviconConfig : {
        icons: {
          windows: false
        }
      }
    },

    // Serve Attacments over SSL only
    'apostrophe-attachments': {
      uploadfs: {
        https: true
      }
    },

    //Templates
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') }
  }
});
