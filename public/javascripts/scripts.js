// conversion of date types
function unixToJulian(unix) {
  return unix/86400000 + 2440587.5;
}

function JulianToUnix(jul) {
  return (jul - 2440587.5)*86400000;
}

// converts current UTC time to sidereal time
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

/////////////////

var a  = 6378.137,
    f  = 1/298.257223563,
    b  = a*(1-f),
    e1 = Math.sqrt( (a*a - b*b) / (a*a) ),
    e2 = Math.sqrt( (a*a - b*b) / (b*b) ),
    toDeg = 180 / Math.PI,
    toRad = Math.PI / 180;


function XYZtoLLA(X, Y, Z) {

  var p, theta, lng, lat, N, alt;

  p = Math.sqrt(X*X + Y*Y);
  theta = Math.atan2(Z*a, p*b);
  lng = Math.atan2(Y,X)
  lat = Math.atan2(Z + e2*e2*b*Math.pow(Math.sin(theta), 3), p - e1*e1*a*Math.pow(Math.cos(theta),3))
  N   = a / Math.sqrt(1 - e1*e1*Math.pow(Math.sin(lat),2))
  alt = (p / Math.cos(lat)) - N

  return {"longitude": (lng*toDeg + 360) % 360, "latitude": lat*toDeg, "altitude": alt};
}


function LLAtoXYZ(lng, lat, alt) {

  var X, Y, Z, N,
      toRad  = Math.PI / 180
      coslng = Math.cos(lng*toRad),
      coslat = Math.cos(lat*toRad)
      sinlng = Math.sin(lng*toRad),
      sinlat = Math.sin(lat*toRad),
      boa    = (b*b)/(a*a);

  N = a / Math.sqrt(1 - e1*e1*Math.pow(sinlat,2))
  X = (N + alt) * coslat * coslng
  Y = (N + alt) * coslat * sinlng
  Z = (boa*N + alt) * sinlat

  return {"X": X, "Y": Y, "Z": Z};
}
//////////////////
function setSatTarget(x) {
  satTarget = satellites[x];
}
