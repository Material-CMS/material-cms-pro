var path = require('path');

var apos = require('apostrophe')({
  shortName: 'material-cms-pro',
  modules: {
    // Lean frontend
    'apostrophe-assets': {
        lean: true
    },
    // Ordering Module for Pieces
    'apostrophe-pieces-orderings-bundle': {},
    // Custom Modules
    'card-widgets': {},
    'card-anime-widgets': {},
    'card-link-widgets': {},
    'button-widgets':{},
    'call-to-action-widgets': {},
    'double-widgets': {},
    'events': {},
    'events-widgets': {},
    'footer-widgets':{},
    'galleries':{
      orderings: true
    },
    'galleries-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'galleries-pages': {
      orderings: true
    },
    'galleries-widgets': {},
    'grid-widgets': {},
    'header-widgets': {},
    'iframe-widgets': {},
    'link-widgets': {},
    'link-page-widgets': {},
    'link-subpages-widgets': {},
    'navigations':{},
    'navigations-widgets': {},
    'people': {
      ordering: true
    },
    'people-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'people-pages': {
      orderings: true
    },
    'people-widgets': {},
    'sections': {
      orderings: true
    },
    'sections-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'sections-widgets': {},
    'shape-divider-path-widgets': {},
    'shape-divider-file-widgets': {},
    'slider-widgets':{},
    'swiper-widgets':{},
    'tables': {
      orderings: true
    },
    'tables-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'tables-pages': {
      orderings: true
    },
    'tables-widgets': {},
    'texts': {
      orderings: true
    },
    'texts-orderings': {
      extend: 'apostrophe-pieces-orderings'
    },
    'texts-pages': {
      orderings: true
    },
    'texts-widgets': {},
    'triple-widgets': {},
    'video-widgets': {},
    // CKEditor addons
    'apostrophe-rich-text-permalinks': {
      projection: {
        title: 1,
        _url: 1
      }
    },
    // CSS in context editing
    'apostrophe-palette-widgets': {},
    'apostrophe-palette': {},
    'apostrophe-palette-global': {},
    // Production Modules
    'apostrophe-db': {
      connect: {
        useUnifiedTopology: true
      }
    },
    'apostrophe-caches-redis': {},
    'apostrophe-caches': {
      redis: {}
    },
    'apostrophe-seo': {},
    'apostrophe-open-graph': {},
    'apostrophe-global': {
      seoGoogleFields: true
    },
    'apostrophe-site-map': {
      noPriority: true,
      excludeTypes: [
        'apostrophe-global',
        'contact-form'

      ],
      childPageDepth: 3
    },
    'apostrophe-optimizer': {
      enable: false,
      stats: false,
      debug: false
    },
    'apostrophe-attachments': {
      // Add more image sizes example:
      /*
      addImageSizes: [{
        name: 'side',
        width: 380,
        height: 600
      }]
      */
      // Serve Attacments over SSL only
      uploadfs: {
        https: true
      },
      fileGroups: [
        {
          name: 'images',
          label: 'Images',
          extensions: [ 'jpg', 'png', 'gif', 'svg'],
          extensionMaps: {
            jpeg: 'jpg'
          },
          // uploadfs should treat this as an image and create scaled versions
          image: true
        },
        {
          name: 'office',
          label: 'Office',
          extensions: [ 'txt', 'rtf', 'pdf', 'xls', 'ppt', 'doc', 'pptx', 'sldx', 'ppsx', 'potx', 'xlsx', 'xltx', 'csv', 'docx', 'dotx', 'mp4' ],
          extensionMaps: {},
          // uploadfs should just accept this file as-is
          image: false
        }
      ]
    },
    // Favicons
    'apostrophe-favicons': {},
    // Disable new alt field warning
    // This project is mostly using card-widgets
    // to display images, so this dosen't much effect
    'apostrophe-images': {
      enableAltField: true
    },
    // Forms
    'apostrophe-forms': {
      disableBaseStyles: true,
      optionLabelPosition: 'last'
    },
    'apostrophe-forms-widgets': {},
    'apostrophe-forms-text-field-widgets': {},
    'apostrophe-forms-textarea-field-widgets': {},
    'apostrophe-forms-file-field-widgets': {},
    'apostrophe-forms-select-field-widgets': {},
    'apostrophe-forms-radio-field-widgets': {},
    'apostrophe-forms-checkboxes-field-widgets': {},
    'apostrophe-forms-boolean-field-widgets': {},
    'apostrophe-forms-conditional-widgets': {},
    // Templates
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    // Apostrophe Workflow module
    'apostrophe-workflow': {
      alias: 'workflow',
    },
    'apostrophe-workflow-modified-documents': {}
  // << End of Modules
  }
});
