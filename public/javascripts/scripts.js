
// strangely, it creates stars
function createStars(number){
    var data = [];
    for(var i = 0; i < number; i++){
        data.push({
            geometry: {
                type: 'Point',
                coordinates: randomLonLat()
            },
            type: 'Feature',
            properties: {
                radius: Math.random() * 1.5
            }
        });
    }
    return data;
}


// satellite projection offset to adjust for RAAN, manipulation of the haversine formula
function getOffset(satellite){
    var i1 = degToRad(-satellite.inclination),
        d = satellite.adjustedRAAN/360 * 40074,
        R = 6378;

    //  // these are the full formulas. Since my starting point is [0,0], I eliminated terms that evaluate to 0 or 1.
    // var φ2 = Math.asin( Math.sin(φ1)*Math.cos(d/R) + Math.cos(φ1)*Math.sin(d/R)*Math.cos(i1) );
    // var λ2 = λ1 + Math.atan2(Math.sin(i1)*Math.sin(d/R)*Math.cos(φ1), Math.cos(d/R)-Math.sin(φ1)*Math.sin(φ2));

    var φ2 = Math.asin(Math.sin(d/R)*Math.cos(i1));
    var λ2 = Math.atan2(Math.sin(i1)*Math.sin(d/R), Math.cos(d/R));
    return [radToDeg(λ2), radToDeg(φ2)];
};


// creates the orbital path line object for a given satellite
// function makeGeoObject(positionArray) {
//         var object = {
//             "type":"Feature",
//             "geometry":{
//                 "type":"LineString",
//                 "coordinates": positionArray
//             }
//         };
//         return object;
// }


// random position along 'equator' of the individual satellite path
function makeSatelliteObject() {
    var object = {
        "type":"Feature",
        "geometry":{
            "type": "Point",
            "coordinates": [360 * Math.random(), 0]
        }
    };
    return object;
}


// adjust absolute RAAN to earth-relative RAAN
function getSiderealAscension(satellite) {
    return (satellite.RAAN + getMST()) % 360;
}


// returns degrees per minute rotational velocity
function getVelocity(satellite) {
  degreesPerDay = satellite.mean_motion*360
  return degreesPerDay/86400
}


// degree/radian conversions
function degToRad(deg) {
    return deg*Math.PI/180;
}
function radToDeg(rad) {
    return rad*180/Math.PI;
}


// random with range for opacity
function randOpacity(min, max) {
  return Math.random() * (max - min) + min;
}


function timer() {
  var currentTime = Date.now();
  var timeElapsed = currentTime - t0;
  displayTime = new Date(currentTime + timeElapsed * spdFactor)//.toUTCString()
  year      = displayTime.getUTCFullYear();
  mon       = displayTime.getUTCMonth() + 1;
  dd        = displayTime.getUTCDate();
  hh        = displayTime.getUTCHours();
  mm        = displayTime.getUTCMinutes();

  mm = ((mm < 10) ? "0" + mm : mm);
  clock = year + "/" + mon + "/" + dd + " " + hh + ":" + mm + " UTC";
};


function randomLonLat() {
    return [Math.random() * 360 - 180, Math.random() * 180 - 90];
}


// converts xyz coordinates to latitude/longitude/altitude
function xyz_lla(X,Y,Z) {
  // function based on closed form algorithm found in http://microem.ru/files/2012/08/GPS.G1-X-00006.pdf

  var a  = 6378.137,
      f  = 1/298.257223563,
      b  = a*(1-f),
      e1 = Math.sqrt( (a*a - b*b) / (a*a) ),
      e2 = Math.sqrt( (a*a - b*b) / (b*b) ),
      lng, lat, alt;

  var p = Math.sqrt(X*X + Y*Y),
      theta = Math.atan2(Z*a, p*b);

  lng = Math.atan2(Y,X)
  lat = Math.atan2(Z + e2*e2*b*Math.pow(Math.sin(theta), 3), p - e1*e1*a*Math.pow(Math.cos(theta),3))

  var N = a / Math.sqrt(1 - e1*e1*Math.pow(Math.sin(lat),2))

  alt = (p / Math.cos(lat)) - N

  // console.log(radToDeg(lng));
  // console.log(radToDeg(lat));
  // console.log(alt)
  return [radToDeg(lng), radToDeg(lat), alt]
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
