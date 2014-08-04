// // ANGLE OF ANOMOLY CALCULATION
// // dp, decimal places is fixed at 4 from TLE data,
// // but want more specificity in the result
// var dp = 10;

// function EccAnom(ec,m,dp) {

// // arguments:
// // ec=eccentricity, m=mean anomaly,
// // dp=number of decimal places
// var pi=Math.PI, K=pi/180.0;

// var maxIter=30, i=0;

// var delta=Math.pow(10,-dp);

// var E, F;

// m=m/360.0;

// m=2.0*pi*(m-Math.floor(m));

// if (ec<0.8) E=m; else E=pi;

// F = E - ec*Math.sin(m) - m;

// while ((Math.abs(F)>delta) && (i<maxIter)) {

// E = E - F/(1.0-ec*Math.cos(E));
// F = E - ec*Math.sin(E) - m;

// i = i + 1;

// }

// E=E/K;

// return Math.round(E*Math.pow(10,dp))/Math.pow(10,dp);

// }

// function TrueAnom(ec,E,dp) {

// K=Math.PI/180.0;
// S=Math.sin(E);

// C=Math.cos(E);

// fak=Math.sqrt(1.0-ec*ec);

// phi=Math.atan2(fak*S,C-ec)/K;

// return Math.round(phi*Math.pow(10,dp))/Math.pow(10,dp);

// }



// function position(a, ec,E) {

// // a=semimajor axis, ec=eccentricity, E=eccentric anomaly
// // x,y = coordinates of the planet with respect to the Sun

// C = Math.cos(E);

// S = Math.sin(E);

// x = a*(C-ec);

// y = a*Math.sqrt(1.0-ec*ec)*S;

// }
