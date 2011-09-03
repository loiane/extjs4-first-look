Ext.require(['Ext.data.*', 'Ext.grid.*']);
Ext.onReady(function() {
	
    Ext.define('Book', {
        extend: 'Ext.data.Model',
        fields: ['name', 'topic']
    });

    var Books = Ext.create('Ext.data.Store', {
        model: 'Book',
        data: [{
            name: 'Learning Ext JS',
            topic: 'Ext JS'
        },{
            name: 'Learning Ext JS 3.2',
            topic: 'Ext JS'
        },{
            name: 'Ext JS 3.0 Cookbook',
            topic: 'Ext JS'
        },{
            name: 'Expert PHP 5 Tools',
            topic: 'PHP'
        },{
            name: 'NetBeans IDE 7 Cookbook',
            topic: 'Java'
        },{
            name: 'iReport 3.7',
            topic: 'Java'
        },{
            name: 'Python Multimedia',
            topic: 'Python'
        },{
            name: 'NHibernate 3.0 Cookbook',
            topic: '.NET'
        },{
            name: 'ASP.NET MVC 2 Cookbook',
            topic: '.NET'
        }]
    });
    
    Ext.create('Ext.grid.Panel', {
        renderTo: 'grid-example',
        frame: true,
        store: Books,
        width: 350,
        height: 300,
        title: 'Books',
        features: [{
        	ftype: 'rowbody',
        	getAdditionalData: function(data, idx, record, orig) {
	        	return {
		        	rowBody: Ext.String.format(
		        			'<div>->topic:<span> {0}</span></div>',
		        			data.topic)
	        	};
        	}
        }, {
        	ftype: 'rowwrap'
        }],
        columns: [{
            text: 'Name',
            flex: 1,
            dataIndex: 'name'
        }]
    });
});
