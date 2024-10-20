// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x
module.exports = {
  jQuery: 3,
  stylesheets: [
    { name: 'vendor/materialize-small.min' },
    { name: 'vendor/swiper-bundle.min' },
    { name: 'components/mixins' },
    { name: 'components/basic' },
    { name: 'components/button' },
    { name: 'components/call-to-action' },
    { name: 'components/card-anime' },
    { name: 'components/card-link' },
    { name: 'components/cards' },
    { name: 'components/collapsibles' },
    { name: 'components/collection' },
    { name: 'components/double' },
    { name: 'components/expand' },
    { name: 'components/footer' },
    { name: 'components/forms' },
    { name: 'components/galleries' },
    { name: 'components/grid' },
    { name: 'components/iframe' },
    { name: 'components/navigation' },
    { name: 'components/people' },
    { name: 'components/sections' },
    { name: 'components/swiper' },
    { name: 'components/tables' },
    { name: 'components/texts' },
    { name: 'components/triple' },
    { name: 'components/video' },
    { name: 'components/language-menu' },
    { name: 'apostrophe-workflow-overrides', when: 'user' },
    { name: 'anon-overrides', when: 'anon' },
    { name: 'user-overrides', when: 'user' }
  ],
  scripts: [
    { name: 'infinity' },
    { name: 'lightbox' },
    { name: 'page' },
    { name: 'utils' },
    { name: 'vendor/materialize/vendor/cash' },
    { name: 'vendor/materialize/components/component' },
    { name: 'vendor/materialize/components/global' },
    { name: 'vendor/materialize/vendor/anime.min' },
    { name: 'vendor/materialize/components/buttons' },
    { name: 'vendor/materialize/components/cards' },
    { name: 'vendor/materialize/components/collapsible' },
    { name: 'vendor/materialize/components/component' },
    { name: 'vendor/materialize/components/dropdown' },
    { name: 'vendor/materialize/components/forms' },
    { name: 'vendor/materialize/components/modal' },
    { name: 'vendor/materialize/components/parallax' },
    { name: 'vendor/materialize/components/pushpin' },
    { name: 'vendor/materialize/components/select' },
    { name: 'vendor/materialize/components/sidenav' },
    { name: 'vendor/materialize/components/tabs' },
    { name: 'vendor/materialize/components/waves' },
    { name: 'vendor/materialize/admin-ui', when: 'user' },
    { name: 'vendor/lodash.custom.min', when: 'anon' },
    { name: 'vendor/svg-inject.min' },
    { name: 'vendor/swiper-bundle.min' }
  ]
};
