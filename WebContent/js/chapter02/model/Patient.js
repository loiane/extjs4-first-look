Ext.regModel('Patient', {
    fields: [
        {name: 'name'},
        {name: 'age',      type: 'int'},
        {name: 'phone',    type: 'string'},
        {name: 'gender',   type: 'string'},
        {name: 'birthday', type: 'date', dateFormat: 'd/m/Y'},
        {name: 'alive',    type: 'boolean', defaultValue: true},
        {name: 'weight', type: 'float'},
        {name: 'weightKg', type: 'float',
        	convert: function(value, record) {
        		var weightPounds = record.get('weight');
                return Math.round(weightPounds * 0.45359237);
            }
        }
    ]
});

var Patient = Ext.data.Record.create([
	{name: 'name'},
    {name: 'age',      type: 'int'},
    {name: 'phone',    type: 'string'},
    {name: 'gender',   type: 'string'},
    {name: 'birthday', type: 'date', dateFormat: 'd/m/Y'},
    {name: 'alive',    type: 'boolean', defaultValue: true},
    {name: 'weight', type: 'float'},
    {name: 'weightKg', type: 'float',
      	convert: function(value, record) {
       		var weightPounds = record.get('weight');
            return Math.round(weightPounds * 0.45359237);
        }
    }
]);