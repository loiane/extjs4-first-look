Ext.regModel('Author', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'blog_id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'}
    ],
    belongsTo: 'Blog',
    proxy: {
		type: 'ajax',
		url : '../../js/chapter02/data/author.json',
		reader: {
			type: 'json',
			root: 'authors'
		}
	}
});