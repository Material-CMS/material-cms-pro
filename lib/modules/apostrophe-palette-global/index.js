// Add new CSS propertys for apostrophe palette here
module.exports = {
  paletteFields: [
    {
      name: 'backgroundColor',
      label: 'Background color of the website',
      type: 'color',
      selector: 'body',
      property: 'background-color',
    },
    {
      name: 'mainColor',
      label: 'Main Color',
      type: 'color',
      selector: [
        'nav',
        '.card',
        '.card-content',
        '.collapsible-body',
        '.collapsible-header'
      ],
      property: 'background-color'
    },
    {
      name: 'navColor',
      label: 'Nav Color',
      type: 'color',
      selector: 'nav',
      property: 'background-color'
    },
    {
      name: 'accentColor',
      label: 'Accent Color',
      type: 'color',
      selector: '.accent-color',
      property: 'color'
    },
    {
      name: 'borderRadius',
      label: 'Round Corners',
      type: 'range',
      selector: [
        '.radius'
      ],
      property: 'border-radius',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px'
    },
    {
      name: 'marginCards',
      label: 'Space Bottom',
      type: 'range',
      selector: '.margin',
      property: [
        'margin-bottom'
      ],
      min: 0,
      max: 50,
      step: 1,
      unit: 'px'
    }
  ]
};