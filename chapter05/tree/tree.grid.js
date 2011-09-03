/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
Ext.require([
    'Ext.data.*',
    'Ext.grid.*',
    'Ext.tree.*'
]);

Ext.onReady(function() {

	Ext.define('Book', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'book',     type: 'string'},
            {name: 'pages',     type: 'string'}
        ]
    });

    var store = Ext.create('Ext.data.TreeStore', {
        model: 'Book',
        proxy: {
            type: 'ajax',
            url: '../../../js/chapter05/data/treegrid.json'
        },
        folderSort: true
    });

    Ext.create('Ext.tree.Panel', {
        title: 'Books',
        width: 500,
        height: 300,
        renderTo: Ext.getBody(),
        collapsible: true,
        useArrows: true,
        rootVisible: false,
        store: store,
        multiSelect: true,
        singleExpand: true,
        columns: [{
            xtype: 'treecolumn',
            text: 'Task',
            flex: 2,
            sortable: true,
            dataIndex: 'task'
        },{
            text: 'Assigned To',
            flex: 1,
            dataIndex: 'user',
            sortable: true
        }]
    });
});
