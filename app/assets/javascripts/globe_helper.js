function randomLonLat() {
    return [Math.random() * 360 - 180, Math.random() * 180 - 90];
}

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

// equirectangular projection formula for latitude/longitude from inclination and starting point
// reversed the haversine formula.  Deprecated.




// satellite projection offset to adjust for RAAN
function getOffset(satellite){
    var i1 = degToRad(-satellite.inclination),
        d = satellite.adjustedRAAN/360 * 40030,
        R = 6371;

        // these are the full formulas. Since my starting point is [0,0], I elminated terms that evaluate to 0 or 1.
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

// degree/radian conversionss
function degToRad(deg) {
    return deg*Math.PI/180;
}
function radToDeg(rad) {
    return rad*180/Math.PI;
}

// random range for opacity
function randOpacity(min, max) {
  return Math.random() * (max - min) + min;
}
