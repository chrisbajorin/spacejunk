
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


// satellite projection offset to adjust for RAAN
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

function getSiderealAscension(satellite) {
    return (satellite.right_asc + getMST()) % 360;
}

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
