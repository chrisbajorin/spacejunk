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


function zoomed(d){
    translate = zoom.translate();
    scale = zoom.scale();


}
