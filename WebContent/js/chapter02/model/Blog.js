Ext.regModel('Blog', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'url', type: 'string'}
    ],
    proxy: {
		type: 'rest',
		url : '../../js/chapter02/data/blogs',
		format: 'json',
		reader: {
			type: 'json',
			root: 'blogs'
		}
	}
});