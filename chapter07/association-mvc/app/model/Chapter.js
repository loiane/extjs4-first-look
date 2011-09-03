Ext.define('App.model.Chapter',{
	extend: 'Ext.data.Model',

	fields: [
        {name: 'id', type: 'int'},
        {name: 'number', type: 'int'},
        {name: 'title', type: 'string'},
        {name: 'bookId', type: 'int'}
    ]
});