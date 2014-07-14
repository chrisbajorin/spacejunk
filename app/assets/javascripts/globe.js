// function globeInit() {

//   d3.json("http://host/data/load", function(error, countries) {
//   console.log(countries)
//   });

// }





//// potential physics


var rAsc,
    lmst,
    decl,
    hAngle,
    sinDec,
    cosDec,
    cosHA
    rR,
    gam;

sinDec = Math.sin(decl);
cosDec = Math.cos(decl);
cosHA = Math.cos(hAngle);
rR = Math.sqrt((cosHA * cosDec) * (cosHA * cosDec) + (sinDec * sinDec))

