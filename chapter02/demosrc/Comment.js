Ext.regModel('Comment', {
    fields: ['id', 'post_id', 'name', 'message'],
 
    belongsTo: 'Post'
});