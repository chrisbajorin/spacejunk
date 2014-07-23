function getMST() {
    var now    = new Date();
    var year   = now.getUTCFullYear();
    var month  = now.getUTCMonth() + 1;
    var day    = now.getUTCDate();
    var hour   = now.getUTCHours();
    var minute = now.getUTCMinutes();
    var second = now.getUTCSeconds();

    if( month == 1 || month == 2 ) {
        year = year - 1;
        month = month + 12;
    }

    var a = Math.floor( year/100 );
    var b = 2 - a + Math.floor( a/4 );
    var c = Math.floor(365.25 * year);
    var d = Math.floor(30.6001 * (month + 1));

    // days since J2000.0
    var jd = b + c + d - 730550.5 + day + (hour + minute/60.0 + second/3600.0)/24.0;
    var jt   = jd/36525.0;                   // julian centuries since J2000.0
    var GMST = 280.46061837 + 360.98564736629*jd + 0.000387933*jt*jt - jt*jt*jt/38710000;
    if ( GMST > 0.0 )
    {
        while( GMST > 360.0 )
            GMST -= 360.0;
    } else {
        while( GMST < 0.0 )
            GMST += 360.0;
    }
    return GMST;
}
