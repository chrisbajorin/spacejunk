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

function randomLonLat() {
    return [Math.random() * 360 - 180, Math.random() * 180 - 90];
}


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


function makeGeoObject(positionArray) {
        object = [{
            "type":"Feature",
            "geometry":{
                "type":"LineString",
                "coordinates": positionArray
            }
        }];
        return object;

}
