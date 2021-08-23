function dateFormatter(arg, ascending)
{
    date = moment( arg, 'DD-MM-YYYY', 'nl', true );
 
    if ( ! date.isValid() )
    {
        return ascending ? Infinity : -Infinity;
    }
 
    return parseInt(date.format( 'x' ), 10);
}
 
$.extend( $.fn.dataTable.ext.type.order, {
    'moment-asc': function ( a, b ) {
        a = dateFormatter(a, true);
        b = dateFormatter(b, true);
 
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
   
    'moment-desc': function ( a, b ) {
        a = dateFormatter(a);
        b = dateFormatter(b);
 
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    }
});