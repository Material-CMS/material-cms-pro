module.exports = {
	extend: 'apostrophe-widgets',
	name: 'quadruple',
	label: 'Quadruple Widget',
	addFields: [
		{
			name: 'widgetsOne',
			type: 'area',
      contextual: true
		},
		{
			name: 'widgetsTwo',
			type: 'area',
			contextual: true
		},
		{
			name: 'widgetsThree',
			type: 'area',
      contextual: true
		},
		{
			name: 'widgetsFour',
			type: 'area',
			contextual: true
		},
		{
			name: 'forceAspectRatio',
			type: 'boolean',
			label: 'Force Aspect Ratio',
			htmlHelp: 'Force aspect ratio 1:1 for both widget areas. (default: No)' + '<br>' +
			'<span>Do not forget to crop high edge images</span>',
			def: false
		}
  ]
};