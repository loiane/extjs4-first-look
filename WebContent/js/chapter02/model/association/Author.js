Ext.regModel('Author', {
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
    ],
    
    hasMany: {model: 'Book', foreignKey: 'authorId'}
});