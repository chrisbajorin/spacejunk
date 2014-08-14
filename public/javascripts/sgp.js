// not currently hooked up to the data. Will add once this is made into a module.

function degToRad(deg) {
    return deg * Math.PI / 180;
}

function radToDeg(rad) {
    return rad * 180 / Math.PI;
}

function sgpModel(satellite, TSINCE) {

  // formulas from http://celestrak.com/NORAD/documentation/spacetrk.pdf

  var XNO    = satellite.mean_motion * 2 * Math.PI / 1440,
      EO     = satellite.eccentricity,
      XINCL  = degToRad(satellite.inclination),
      XMO    = degToRad(satellite.mean_anomaly),
      OMEGAO = degToRad(satellite.perigee),          // lowercase omega in the formulas
      XNODEO = degToRad(satellite.RAAN),             // uppercase omega
      XND1   = satellite.first_derivative,
      XND2   = satellite.second_derivative,
      // Bs  = satellite.b_star,
      CK2    = 5.41308e-4,                           // = 1/2 * J2 AE^2
      CK4    = 0.62098875e-6,                        // = 1/2 * J4 AE^2
      E6A    = 1e-6,
      AE     = 1,
      PI     = Math.PI,
      PIO2   = Math.PI / 2,
      S      = 1.01222928,
      XJ3    = -.253881e-5,
      XKE    = .0743669161,
      XKMPER = 6378.135,
      XMNPDA = 1440,
      QOMS2T = 1.88027916e-9,
      DE2RA  = Math.PI / 180,
      TWOPI  = Math.PI * 2,
      X3PIO2 = 3 * Math.PI / 2,
      T      = TSINCE // Date.now()/86400000 - satellite.epoch_date,    // need to correct this one.
      XNDT2O = XND1 * TWOPI / 1440 / 1440,
      XNDD6O = XND2 * TWOPI / 1440 / 1440 / 1440;

  var C1, C2, C3, C4, COSIO, SINIO, D1, AO, PO, QO,
      XLO, D10, D20, D30, D40, PO2NO, OMGDT, XNODOT,
      C5, C6;

  // Init constants

  C1    = CK2 * 1.5;
  C2    = CK2 / 4.0;
  C3    = CK2 / 2.0;
  C4    = XJ3 * Math.pow(AE, 3) / (4.0 * CK2);
  COSIO = Math.cos(XINCL);
  SINIO = Math.sin(XINCL);
  A1    = Math.pow((XKE / XNO), 2/3);
  D1    = C1 / A1 / A1 * (3 * COSIO * COSIO - 1) / Math.pow((1 - EO * EO), 1.5);
  AO    = A1 * (1 - 1/3*D1 - D1*D1 - 134/81*D1*D1*D1);
  PO    = AO * (1 - EO*EO);
  QO    = AO * (1 - EO);
  XLO   = XMO + OMEGAO + XNODEO;
  D1O   = C3 * SINIO*SINIO;
  D2O   = C2 * (7*COSIO*COSIO - 1);
  D3O   = C1 * COSIO;
  D4O   = D3O * SINIO;
  PO2NO = XNO / (PO*PO);
  XNODOT= -2 * D3O * PO2NO;
  OMGDT = C1 * PO2NO * (5 * COSIO*COSIO - 1);
  C5    = 5 * C4 * SINIO * (3 + 5*COSIO) / (1 + COSIO);
  C6    = C4 * SINIO;

  // Gravity and atmospheric drag

  var Ax, A, E, P, XNODES, OMGAS, XLS;

  Ax  = XNO + (2*XNDT2O + 3*XNDD6O*T) * T;
  A   = AO * Math.pow(XNO/Ax, 2/3);
  E   = (A > QO) ? 1 - QO/A : E6A;
  P   = A * (1 - E*E);
  XNODES = XNODEO + XNODOT*T;
  OMGAS  = OMEGAO + OMGDT*T;
  XLS = (XLO + (XNO + OMGDT + XNODOT + (XNDT2O + XNDD6O*T)*T)*T) % (TWOPI);

  // Long period periodics

  var AXNSL, AYNSL, XL;

  AXNSL = E * Math.cos(OMGAS);
  AYNSL = E * Math.sin(OMGAS) - C6/P;
  XL    = (XLS - C5 / P * AXNSL) % (TWOPI);

  // Kepler's equation iteration

  var U      = (XL - XNODES) % (TWOPI),
      Ki     = 0,
      EO1    = U,
      KEP    = 1,
      SINEO1, COSIO1;

  while (Math.abs(KEP) >= E6A) {
    SINEO1 = Math.sin(EO1);
    COSEO1 = Math.cos(EO1);
    KEP = 1 - COSEO1*AXNSL - SINEO1*AYNSL;
    KEP = (U - AYNSL*COSEO1 + AXNSL*SINEO1 - EO1) / KEP;
    KEP = (Math.abs(KEP) > 1) ? Math.abs(KEP)/KEP : KEP;
    EO1 = EO1 + KEP
  }

  // intermediate partially osculating quantities

  var ECOSE, ESINE, EL2, PL, PL2, R, RDOT, TEMP,
      SINU, COSU, SU;

  ECOSE = AXNSL*COSEO1 + AYNSL*SINEO1
  ESINE = AXNSL*SINEO1 - AYNSL*COSEO1
  EL2   = AXNSL*AXNSL + AYNSL*AYNSL
  PL    = A * (1 - EL2)
  PL2   = PL*PL
  R     = A * (1 - ECOSE)
  RDOT  = XKE * Math.sqrt(A) / R * ESINE
  RVDOT = XKE * Math.sqrt(PL) / R
  TEMP  = ESINE/(1 + Math.sqrt(1 - EL2))
  SINU  = A/R * (SINEO1 - AYNSL - AXNSL*TEMP)
  COSU  = A/R * (COSEO1 - AXNSL + AYNSL*TEMP)
  SU    = Math.atan2(SINU,COSU)

  // Short period perturbations

  var SIN2U, COS2U, RK, UK, XNODEK, XINCK;

  SIN2U   = (COSU + COSU)*SINU
  COS2U   = 1 - 2*SINU*SINU
  RK      = R + D1O/PL*COS2U
  UK      = SU - D2O/PL2*SIN2U
  XNODEK  = XNODES + D3O*SIN2U/PL2
  XINCK   = XINCL + D4O/PL2*COS2U

  // Orientation vectors

  var SINUK, COSUK, SINNOK, COSNOK,
      SINIK, COSIK, XMX, XMY, UX, UY,
      UZ, VX, VY, VZ;

  SINUK  = Math.sin(UK)
  COSUK  = Math.cos(UK)
  SINNOK = Math.sin(XNODEK)
  COSNOK = Math.cos(XNODEK)
  SINIK  = Math.sin(XINCK)
  COSIK  = Math.cos(XINCK)
  XMX    = -1 * SINNOK*COSIK
  XMY    = COSNOK*COSIK
  UX     = XMX*SINUK + COSNOK*COSUK
  UY     = XMY*SINUK + SINNOK*COSUK
  UZ     = SINIK*SINUK
  VX     = XMX*COSUK - COSNOK*SINUK
  VY     = XMY*COSUK - SINNOK*SINUK
  VZ     = SINIK*COSUK

  // Position and velocity

  var X, Y, Z, XDOT, YDOT, ZDOT;

  X    = RK*UX * XKMPER;
  Y    = RK*UY * XKMPER;
  Z    = RK*UZ * XKMPER;
  XDOT = (RVDOT*VX + RDOT*UX) * XKMPER * XMNPDA / 86400;
  YDOT = (RVDOT*VY + RDOT*UY) * XKMPER * XMNPDA / 86400;
  ZDOT = (RVDOT*VZ + RDOT*UZ) * XKMPER * XMNPDA / 86400;

  return xyz_lla(X,Y,Z);

}


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

  lng = Math.atan2(Y,X);
  lat = Math.atan2(Z + e2*e2*b*Math.pow(Math.sin(theta), 3), p - e1*e1*a*Math.pow(Math.cos(theta),3));
  var N = a / Math.sqrt(1 - e1*e1*Math.pow(Math.sin(lat),2));
  alt = (p / Math.cos(lat)) - N;

  return [radToDeg(lng), radToDeg(lat), alt];
}

module.exports = sgpModel
