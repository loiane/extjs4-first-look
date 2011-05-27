Ext.require(['*']);

Ext.onReady(function(){

	var table = Ext.create('Ext.window.Window', {
		title: 'Table Layout',
		width: 250,
		height: 200,
		layout: {
            type: 'table',
            columns: 3,
            tableAttrs: {
                style: {
                    width: '100%',
                    height: '100%'
                }
            }
        },
        defaults: {
        	bodyStyle: 'padding:10px'
        },
        items:[{
            html:'Panel 1',
            rowspan: 3
        },{
            html:'Panel 2'
        },{
            html:'Panel 3'
        },{
            html:'Panel 4'
        },{
            html:'Panel 5'
        },{
            html:'Panel 6',
            colspan: 2
        },{
            html:'Panel 7'
        },{
            html:'Panel 8'
        },{
            html:'Panel 9'
        }]
	});
	table.show();
});