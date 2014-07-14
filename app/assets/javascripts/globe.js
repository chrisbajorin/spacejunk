// function globeInit() {

//   d3.json("http://host/data/load", function(error, countries) {
//   console.log(countries)
//   });

// }





//// potential physics


var rAsc,
    lmst,
    dec,
    hAngle,
    sinDec,
    cosDec,
    cosHA,
    aA,
    bB,
    rR,
    alpha;

sinDec = Math.sin(dec);
cosDec = Math.cos(dec);
cosHA = Math.cos(hAngle);

aA = cosDec*cosHA;
bB = cosDec;
rR = Math.sqrt((aA*aA)+(bB*bB));

// all equal
alpha = Math.acos(aA/rR)
gam2 = Math.asin(bB/rR)
gam3 = Math.atan(bB/aA)

//

// rR * cos(x - gam) = 1
// cos(x-gam) = 1/rR
// cos()
