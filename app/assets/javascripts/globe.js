// // function globeInit() {

// //   d3.json("http://host/data/load", function(error, countries) {
// //   console.log(countries)
// //   });

// // }





// //// potential physics



// GREENWICH MEAN SIDERIAL TIME

// t0 = sat.epoch_date/36525
// t01 =
// t02 =
// gmst = 100.46061837 + (36000.770053608 * t0) + (0.000387933 * (t0 * t0)) - ((t0*t0*t0) / 38710000)

// gmst

// constants

// formula source: http://celestrak.com/NORAD/documentation/spacetrk.pdf

t0 = sat.epoch_date // need to make epoch the gmst from 1950, not 2000 (add 50*365.25)
n0 = sat.mean_motion
e0 = sat.eccentricity
M0 = sat.mean_anomoly
w0 = sat.perigee
om0 = sat.right_ascention
i0 = sat.inclination
j2 = (5.41308*Math.pow(10, -4))
j4 = (0.62098875*Math.pow(10, -6))
E6 = Math.pow(10, -6)
t = // julian now

nd0
ndd0

Ke = Math.sqrt(398600.4418)
a1 = Math.pow((Ke/n0), 2/3)
d1 = ((3/2)*(j2/Math.pow(a1, 2)*((3*Math.pow(Math.cos(t0), 2) - 1)/Math.pow(1-Math.pow(e0, 2), 3/2))))
a0 = a1 * (1 - (1/3*d1) - Math.pow(d1, 2) - (134/81*Math.pow(d1, 3)))
p0 = a0 * (1 - Math.pow(e0, 2))
q0 = a0 * (1-e0)
L0 = M0 + w0 + om0
dOm = (-3 * j2 * n0 * Math.cos(i0) / Math.pow(p0, 2))
dw = (3/2 * j2 * n0 * ((5 * Math.pow(Math.cos(i0), 2)) - 1) / Math.pow(p0, 2))
aA = a0 * Math.pow((n0 / (n0 + (nd0 *(t - t0)) + (ndd0 / 2 * Math.pow((t- t0), 2)))), 2/3)
// eE
if (aA > q0) {
    eE = (1 - (q0/aA))
} else {
    eE = Math.pow(10, -6)
}
pP = aA * (1 -Math.pow(eE, 2))
omS0 = om0 + (dOm * (t - t0))
wS0 = w0 + (dw * (t = t0))
LS = L0  + ((n0 + dw + dOm) * (t - t0)) + (nd0 / 2 * Math.pow((t-t0), 2)) + (ndd0 / 6 * Math.pow((t-t0), 3))


