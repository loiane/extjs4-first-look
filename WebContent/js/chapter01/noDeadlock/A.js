Ext.define('noDeadlock.A', {
    extend: 'noDeadlock.B',
    
    mixins: {
        console: 'noDeadlock.Mixin'
    }
});