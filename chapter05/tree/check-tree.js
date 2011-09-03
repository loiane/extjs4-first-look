Ext.require([
    'Ext.tree.*',
    'Ext.data.*'
]);

Ext.onReady(function() {
	
    var store = Ext.create('Ext.data.TreeStore', {
        proxy: {
            type: 'ajax',
            url: '../../../js/chapter05/data/check-nodes.json'
        },
        sorters: [{
            property: 'leaf',
            direction: 'ASC'
        }, {
            property: 'text',
            direction: 'ASC'
        }]
    });

    Ext.create('Ext.tree.Panel', {
        store: store,
        rootVisible: false,
        useArrows: true,
        frame: true,
        title: 'Charts I have studied',
        renderTo: 'tree-example',
        width: 200,
        height: 250
    });
});

