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
// reversed the haversine formula.
function getArcs(inclination, startLongitude){
    var i1 = 90 - inclination,
        i2 = 270 + inclination,
        la1 = 0,
        lo1 = startLongitude,
        d = 180/360 * 40075,
        R = 6371;

    i1 = degToRad(i1);
    i2 = degToRad(i2);
    φ1 = degToRad(la1);
    λ1 = degToRad(lo1);

    var φ2 = Math.asin( Math.sin(φ1)*Math.cos(d/R) + Math.cos(φ1)*Math.sin(d/R)*Math.cos(i1) );
    var λ2 = λ1 + Math.atan2(Math.sin(i1)*Math.sin(d/R)*Math.cos(φ1), Math.cos(d/R)-Math.sin(φ1)*Math.sin(φ2));
    var λ2d = λ1 + Math.atan2(Math.sin(i2)*Math.sin(d/R)*Math.cos(φ1), Math.cos(d/R)-Math.sin(φ1)*Math.sin(φ2));

    array = [[radToDeg(λ2), radToDeg(φ2)], [startLongitude, 0], [radToDeg(λ2d), -radToDeg(φ2)]]
    return makeGeoObject(array);
};


// creates the orbital path line object for a given satellite
function makeGeoObject(positionArray) {
        var object = {
            "type":"Feature",
            "geometry":{
                "type":"LineString",
                "coordinates": positionArray
            }
        };
        return object;
}


// random position along 'equator' of the satellite path
function makeSatelliteObject() {
    var object = {
        "type":"Feature",
        "geometry":{
            "type": "Point",
            "coordinates": [360*Math.random(), 0],
            "radius": 40 }
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
