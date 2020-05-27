module.exports = {
  extend: 'apostrophe-pieces-pages',
  name: 'tables-pages',
  label: 'Tables',
  perPage: 3,
  addFields: [
    {
      name: 'tableHeaders',
      type: 'array',
      label: 'Table Headers',
      help: 'Choose headers for table',
      titleField: 'text',
      schema: [
        {
          name: 'text',
          type: 'string',
          label: 'Header Name'
        },
      ]
    }
	],
  arrangeFields: [
    {
      name: 'options',
      label: 'Options',
      fields: ['tableHeaders', 'withTags', '_ordering', 'buttonOn', 'shadow', 'links']
    }
  ]
};