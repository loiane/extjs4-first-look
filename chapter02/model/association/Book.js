Ext.regModel('Book', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'title', type: 'string'},
        {name: 'pages', type: 'int'},
        {name: 'numChapters', type: 'int'},
        {name: 'authorId', type: 'int'}
    ],
    
    hasMany: {model: 'Chapter', foreignKey: 'bookId'}
});