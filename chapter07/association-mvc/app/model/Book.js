Ext.define('App.model.Book',{
	extend: 'Ext.data.Model',

	fields: [
        {name: 'id', type: 'int'},
        {name: 'title', type: 'string'},
        {name: 'pages', type: 'int'},
        {name: 'numChapters', type: 'int'},
        {name: 'authorId', type: 'int'}
    ],
    
    hasMany: {
    	model: 'App.model.Chapter',
    	//model: 'Chapter', 
    	foreignKey: 'bookId', 
    	name: 'chapters'
    }
});