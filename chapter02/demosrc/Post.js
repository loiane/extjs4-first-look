Ext.regModel('Post', {
    fields: ['id', 'user_id', 'title', 'body'],
 
    belongsTo: 'User',
    hasMany: 'Comment'
});