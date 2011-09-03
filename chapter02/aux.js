Ext.regModel('Author', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
    ],
    
    associatons:[
        {type: 'hasMany', model: 'Book', foreignKey: 'authorId'},
    ]
});

Ext.regModel('Book', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'title', type: 'string'},
        {name: 'pages', type: 'int'},
        {name: 'numChapters', type: 'int'},
        {name: 'authorId', type: 'int'}
    ],
    
    associatons:[
    	{type: 'hasMany', model: 'Chapter', foreignKey: 'bookId'},
    	{type: 'belongsTo', model: 'Author', foreignKey: 'authorId'}
    ]
});

Ext.regModel('Chapter', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'number', type: 'int'},
        {name: 'title', type: 'string'},
        {name: 'bookId', type: 'int'}
    ],
    
    associatons:[
        {type: 'belongsTo', model: 'Book', foreignKey: 'bookId'},
    ]
}); 
