Ext.regModel('User', {
    fields: ['id', 'name', 'age'],
 
    hasMany: 'Post',
    
    proxy: {
        type: 'rest',
        url : '../../js/chapter02/data/users',
        format: 'json',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});