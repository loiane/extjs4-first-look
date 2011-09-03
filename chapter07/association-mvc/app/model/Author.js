Ext.define('App.model.Author',{
	extend: 'Ext.data.Model',
	
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
    ],
    
    hasMany: {
    	model: 'App.model.Book',
    	//model: 'Book', 
    	foreignKey: 'authorId', 
    	name: 'books'
    },
    
    proxy: {
		type: 'ajax',
		url : 'data/authors/1.json',
		reader: {
			type: 'json',
			root: 'authors'
		}
	}
});