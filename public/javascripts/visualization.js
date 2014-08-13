// // var fs = require('fs')
// // var satellites = fs.readFileSync('satellites.json')
// var satellites = [{"name":"TESTER","norad_id":"88888","launch_date":"Sat Mar 30 1974","epoch_date":2444514.487084641,"first_derivative":0.00073094,"second_derivative":0.00013844,"b_star":0.000066816,"inclination":72.8435,"RAAN":115.9689,"eccentricity":0.0086731,"perigee":52.6988,"mean_anomaly":110.5714,"mean_motion":16.05824518,"orbit_number":99910},{"name":"OSCAR 7","norad_id":"07530","launch_date":"Sat Mar 30 1974","epoch_date":2456863.463751609,"first_derivative":-4.7e-7,"second_derivative":0,"b_star":-0.000024049,"inclination":101.4747,"RAAN":186.5555,"eccentricity":0.0011584,"perigee":219.5433,"mean_anomaly":206.3737,"mean_motion":12.5360614,"orbit_number":81625},{"name":"OSCAR 8","norad_id":"10703","launch_date":"Thu Jan 26 1978","epoch_date":2456863.4392070486,"first_derivative":-0.00000235,"second_derivative":0,"b_star":-0.00013371,"inclination":98.7446,"RAAN":192.6008,"eccentricity":0.0006558,"perigee":37.4982,"mean_anomaly":15.4941,"mean_motion":13.99088408,"orbit_number":85660},{"name":"RADIO 3","norad_id":"12997","launch_date":"Thu Apr 30 1981","epoch_date":2456863.41340478,"first_derivative":1.9e-7,"second_derivative":0,"b_star":0.000099595,"inclination":82.9621,"RAAN":154.9723,"eccentricity":0.0058762,"perigee":7.5765,"mean_anomaly":46.2588,"mean_motion":12.15799628,"orbit_number":44689},{"name":"RADIO 8","norad_id":"12998","launch_date":"Thu Apr 30 1981","epoch_date":2456861.908201389,"first_derivative":2.6e-7,"second_derivative":0,"b_star":0.00020085,"inclination":82.9619,"RAAN":314.413,"eccentricity":0.0017785,"perigee":11.4113,"mean_anomaly":52.2484,"mean_motion":12.03133172,"orbit_number":43166},{"name":"RADIO 5","norad_id":"12999","launch_date":"Thu Apr 30 1981","epoch_date":2456863.480350243,"first_derivative":-0.00000117,"second_derivative":0,"b_star":-0.0014695,"inclination":82.9605,"RAAN":287.6283,"eccentricity":0.0013822,"perigee":223.8575,"mean_anomaly":198.7517,"mean_motion":12.05245581,"orbit_number":43435},{"name":"RADIO 4","norad_id":"13000","launch_date":"Thu Apr 30 1981","epoch_date":2456861.62922066,"first_derivative":4.5e-7,"second_derivative":0,"b_star":0.00040514,"inclination":82.9609,"RAAN":270.2671,"eccentricity":0.0020428,"perigee":120.9973,"mean_anomaly":264.3824,"mean_motion":12.06859243,"orbit_number":43605},{"name":"RADIO 7","norad_id":"13001","launch_date":"Thu Apr 30 1981","epoch_date":2456862.0035685184,"first_derivative":-0.00000102,"second_derivative":0,"b_star":-0.0012402,"inclination":82.9558,"RAAN":242.6844,"eccentricity":0.002329,"perigee":358.171,"mean_anomaly":174.0678,"mean_motion":12.0888364,"orbit_number":43845},{"name":"RADIO 6","norad_id":"13002","launch_date":"Thu Apr 30 1981","epoch_date":2456862.9267391087,"first_derivative":-5.9e-7,"second_derivative":0,"b_star":-0.00071889,"inclination":82.9602,"RAAN":181.0993,"eccentricity":0.0052598,"perigee":114.5735,"mean_anomaly":40.9402,"mean_motion":12.13776994,"orbit_number":44442},{"name":"OSCAR 10","norad_id":"14129","launch_date":"Sun Feb 27 1983","epoch_date":2456862.4871321297,"first_derivative":7.2e-7,"second_derivative":0,"b_star":0,"inclination":26.2487,"RAAN":209.0333,"eccentricity":0.600748,"perigee":15.4261,"mean_anomaly":18.6013,"mean_motion":2.05869005,"orbit_number":20600},{"name":"OSCAR 11 (UoSAT 2)","norad_id":"14781","launch_date":"Sat Jan 21 1984","epoch_date":2456863.6212800927,"first_derivative":0.00000263,"second_derivative":0,"b_star":0.00004004,"inclination":97.8493,"RAAN":265.5047,"eccentricity":0.0009735,"perigee":64.6223,"mean_anomaly":295.5997,"mean_motion":14.81655827,"orbit_number":63358},{"name":"JAS 1 (FUJI 1)","norad_id":"16909","launch_date":"Sun Mar 02 1986","epoch_date":2456861.9476307407,"first_derivative":-0.0000013,"second_derivative":0,"b_star":-0.00023367,"inclination":50.013,"RAAN":196.8004,"eccentricity":0.0011127,"perigee":264.1752,"mean_anomaly":261.4188,"mean_motion":12.44462117,"orbit_number":27085},{"name":"COSMOS 1861","norad_id":"18129","launch_date":"Mon Feb 23 1987","epoch_date":2456862.3321182523,"first_derivative":5.1e-7,"second_derivative":0,"b_star":0.000038579,"inclination":82.9281,"RAAN":299.4539,"eccentricity":0.0012736,"perigee":149.088,"mean_anomaly":345.9634,"mean_motion":13.729228,"orbit_number":35710},{"name":"OSCAR 14 (UOSAT 3)","norad_id":"20437","launch_date":"Fri Jan 05 1990","epoch_date":2456863.5874317824,"first_derivative":4.3e-7,"second_derivative":0,"b_star":0.00003214,"inclination":98.5506,"RAAN":142.4573,"eccentricity":0.0011598,"perigee":60.7393,"mean_anomaly":5.3066,"mean_motion":14.31995196,"orbit_number":27975},{"name":"OSCAR 15 (UOSAT 4)","norad_id":"20438","launch_date":"Fri Jan 05 1990","epoch_date":2456862.5543533564,"first_derivative":-1.2e-7,"second_derivative":0,"b_star":0.000011991,"inclination":98.5949,"RAAN":141.6706,"eccentricity":0.0011149,"perigee":105.879,"mean_anomaly":314.072,"mean_motion":14.3079036,"orbit_number":27881},{"name":"OSCAR 16 (PACSAT)","norad_id":"20439","launch_date":"Fri Jan 05 1990","epoch_date":2456863.6033577197,"first_derivative":4e-7,"second_derivative":0,"b_star":0.000030708,"inclination":98.5078,"RAAN":142.7278,"eccentricity":0.0011681,"perigee":52.5476,"mean_anomaly":15.009,"mean_motion":14.3236951,"orbit_number":27991},{"name":"OSCAR 17 (DOVE)","norad_id":"20440","launch_date":"Fri Jan 05 1990","epoch_date":2456863.604192222,"first_derivative":5e-7,"second_derivative":0,"b_star":0.00003404,"inclination":98.4884,"RAAN":143.4281,"eccentricity":0.0011511,"perigee":41.8646,"mean_anomaly":25.91,"mean_motion":14.32729637,"orbit_number":28011},{"name":"OSCAR 18 (WEBERSAT)","norad_id":"20441","launch_date":"Fri Jan 05 1990","epoch_date":2456862.9116021297,"first_derivative":3.1e-7,"second_derivative":0,"b_star":0.0000274,"inclination":98.4936,"RAAN":142.1058,"eccentricity":0.0012277,"perigee":50.1892,"mean_anomaly":96.9658,"mean_motion":14.32424565,"orbit_number":27989},{"name":"OSCAR 19 (LUSAT)","norad_id":"20442","launch_date":"Fri Jan 05 1990","epoch_date":2456862.5930613424,"first_derivative":1.9e-7,"second_derivative":0,"b_star":0.00002292,"inclination":98.4788,"RAAN":142.2799,"eccentricity":0.0012494,"perigee":44.6947,"mean_anomaly":315.5242,"mean_motion":14.32570868,"orbit_number":27996},{"name":"JAS 1B (FUJI 2)","norad_id":"20480","launch_date":"Sat Jan 13 1990","epoch_date":2456862.6539480323,"first_derivative":-4.2e-7,"second_derivative":0,"b_star":-0.000013558,"inclination":99.0468,"RAAN":161.3422,"eccentricity":0.0539373,"perigee":270.0552,"mean_anomaly":155.5374,"mean_motion":12.83394542,"orbit_number":14587},{"name":"INFORMATOR 1","norad_id":"21087","launch_date":"Sun Jan 06 1991","epoch_date":2456862.659421609,"first_derivative":6.2e-7,"second_derivative":0,"b_star":0.000047847,"inclination":82.9441,"RAAN":105.9471,"eccentricity":0.0036523,"perigee":125.3783,"mean_anomaly":27.9398,"mean_motion":13.75174437,"orbit_number":17844},{"name":"COSMOS 2123","norad_id":"21089","launch_date":"Mon Jan 07 1991","epoch_date":2456863.445955197,"first_derivative":4.3e-7,"second_derivative":0,"b_star":0.000029244,"inclination":82.9265,"RAAN":323.3446,"eccentricity":0.0029718,"perigee":174.1764,"mean_anomaly":321.1604,"mean_motion":13.74587325,"orbit_number":17722},{"name":"OSCAR 22 (UoSAT 5)","norad_id":"21575","launch_date":"Tue Feb 19 1991","epoch_date":2456862.600758368,"first_derivative":3.8e-7,"second_derivative":0,"b_star":0.000026307,"inclination":98.7016,"RAAN":181.9246,"eccentricity":0.0007025,"perigee":203.5889,"mean_anomaly":289.6226,"mean_motion":14.40400203,"orbit_number":20879},{"name":"OSCAR 23 (KITSAT 1)","norad_id":"22077","launch_date":"Fri Feb 21 1992","epoch_date":2456863.639584549,"first_derivative":-6.7e-7,"second_derivative":0,"b_star":-0.000021006,"inclination":66.0863,"RAAN":22.7626,"eccentricity":0.0007442,"perigee":208.7139,"mean_anomaly":266.2899,"mean_motion":12.86493757,"orbit_number":3128},{"name":"ARASENE","norad_id":"22654","launch_date":"Sun Jan 31 1993","epoch_date":2456863.1858440507,"first_derivative":-0.00000117,"second_derivative":0,"b_star":0,"inclination":3.3188,"RAAN":297.383,"eccentricity":0.285864,"perigee":275.5641,"mean_anomaly":66.7967,"mean_motion":1.42205818,"orbit_number":10561},{"name":"KITSAT B","norad_id":"22825","launch_date":"Tue Mar 02 1993","epoch_date":2456862.428720706,"first_derivative":1.4e-7,"second_derivative":0,"b_star":0.000022814,"inclination":98.6639,"RAAN":150.8171,"eccentricity":0.0008546,"perigee":182.3644,"mean_anomaly":219.7751,"mean_motion":14.29730833,"orbit_number":8603},{"name":"POSAT 1","norad_id":"22826","launch_date":"Tue Mar 02 1993","epoch_date":2456862.8979332987,"first_derivative":1.7e-7,"second_derivative":0,"b_star":0.000023668,"inclination":98.6581,"RAAN":151.4974,"eccentricity":0.0009259,"perigee":174.1274,"mean_anomaly":186.0018,"mean_motion":14.30032195,"orbit_number":8623},{"name":"ITAMSAT","norad_id":"22828","launch_date":"Tue Mar 02 1993","epoch_date":2456862.912684977,"first_derivative":2.2e-7,"second_derivative":0,"b_star":0.000025409,"inclination":98.6503,"RAAN":150.8121,"eccentricity":0.0010723,"perigee":147.3167,"mean_anomaly":212.868,"mean_motion":14.30323658,"orbit_number":5456},{"name":"EYESAT A","norad_id":"22829","launch_date":"Tue Mar 02 1993","epoch_date":2456863.4333435996,"first_derivative":2.5e-7,"second_derivative":0,"b_star":0.000026336,"inclination":98.6515,"RAAN":153.1516,"eccentricity":0.0010705,"perigee":138.7657,"mean_anomaly":263.4271,"mean_motion":14.30696273,"orbit_number":8673},{"name":"RADIO ROSTO","norad_id":"23439","launch_date":"Sat Mar 26 1994","epoch_date":2456860.666970602,"first_derivative":-3.9e-7,"second_derivative":0,"b_star":0.0001,"inclination":64.8161,"RAAN":135.1614,"eccentricity":0.0145435,"perigee":75.733,"mean_anomaly":285.9696,"mean_motion":11.27561419,"orbit_number":80594},{"name":"JAS 2","norad_id":"24278","launch_date":"Thu Feb 15 1996","epoch_date":2456862.7831632523,"first_derivative":-1.2e-7,"second_derivative":0,"b_star":0.000024228,"inclination":98.5123,"RAAN":214.0249,"eccentricity":0.0350329,"perigee":201.2212,"mean_anomaly":281.9975,"mean_motion":13.5302639,"orbit_number":88568},{"name":"TMSAT","norad_id":"25396","launch_date":"Thu Feb 12 1998","epoch_date":2456863.457432743,"first_derivative":2.1e-7,"second_derivative":0,"b_star":0.000027284,"inclination":98.4411,"RAAN":166.2773,"eccentricity":0.0003244,"perigee":152.261,"mean_anomaly":239.5816,"mean_motion":14.24180672,"orbit_number":83353},{"name":"TECHSAT 1B","norad_id":"25397","launch_date":"Thu Feb 12 1998","epoch_date":2456862.635499491,"first_derivative":-1.1e-7,"second_derivative":0,"b_star":0.000013632,"inclination":98.4714,"RAAN":161.7507,"eccentricity":0.0001587,"perigee":153.4767,"mean_anomaly":271.6222,"mean_motion":14.23451599,"orbit_number":83312},{"name":"SEDSAT 1","norad_id":"25509","launch_date":"Mon Mar 02 1998","epoch_date":2456862.9971136805,"first_derivative":0.00000279,"second_derivative":0,"b_star":0.000044578,"inclination":31.4315,"RAAN":308.9815,"eccentricity":0.0349331,"perigee":81.2826,"mean_anomaly":5.5287,"mean_motion":14.2955853,"orbit_number":82249},{"name":"PAN SAT","norad_id":"25520","launch_date":"Thu Mar 05 1998","epoch_date":2456862.998916979,"first_derivative":0.00001045,"second_derivative":0,"b_star":0.000033816,"inclination":28.4586,"RAAN":337.1861,"eccentricity":0.000432,"perigee":156.8725,"mean_anomaly":275.9106,"mean_motion":15.23681991,"orbit_number":87233},{"name":"ISS (ZARYA)","norad_id":"25544","launch_date":"Sun Mar 08 1998","epoch_date":2456863.8950050464,"first_derivative":-0.00006884,"second_derivative":0,"b_star":-0.00011088,"inclination":51.6468,"RAAN":270.2027,"eccentricity":0.0006351,"perigee":284.6078,"mean_anomaly":177.9931,"mean_motion":15.50426181,"orbit_number":89725},{"name":"ORSTED","norad_id":"25635","launch_date":"Fri Jan 08 1999","epoch_date":2456863.4941474423,"first_derivative":8.8e-7,"second_derivative":0,"b_star":0.000029064,"inclination":96.4694,"RAAN":343.0682,"eccentricity":0.014073,"perigee":21.6698,"mean_anomaly":91.0894,"mean_motion":14.47189148,"orbit_number":81313},{"name":"SUNSAT","norad_id":"25636","launch_date":"Fri Jan 08 1999","epoch_date":2456863.534845093,"first_derivative":4.1e-7,"second_derivative":0,"b_star":0.000017927,"inclination":96.4793,"RAAN":330.7598,"eccentricity":0.0148017,"perigee":78.571,"mean_anomaly":20.5397,"mean_motion":14.44205437,"orbit_number":81202},{"name":"OSCAR 36 (UOSAT 12)","norad_id":"25693","launch_date":"Thu Jan 21 1999","epoch_date":2456863.634343079,"first_derivative":5.6e-7,"second_derivative":0,"b_star":0.000026589,"inclination":64.5572,"RAAN":145.4347,"eccentricity":0.0048614,"perigee":283.6453,"mean_anomaly":166.2397,"mean_motion":14.79989157,"orbit_number":82353},{"name":"KITSAT 3","norad_id":"25756","launch_date":"Fri Jan 29 1999","epoch_date":2456863.1868557753,"first_derivative":0.00000103,"second_derivative":0,"b_star":0.000036034,"inclination":98.4507,"RAAN":103.6814,"eccentricity":0.0012865,"perigee":244.3071,"mean_anomaly":168.1173,"mean_motion":14.53230856,"orbit_number":80372},{"name":"TUBSAT","norad_id":"25757","launch_date":"Fri Jan 29 1999","epoch_date":2456862.7396863657,"first_derivative":-2.5e-7,"second_derivative":0,"b_star":0.0000054392,"inclination":98.4873,"RAAN":96.9442,"eccentricity":0.001364,"perigee":299.4,"mean_anomaly":60.583,"mean_motion":14.51160661,"orbit_number":80287},{"name":"IRS P4 (OCEANSAT 1)","norad_id":"25758","launch_date":"Fri Jan 29 1999","epoch_date":2456862.669999375,"first_derivative":0.00000134,"second_derivative":0,"b_star":0.000044171,"inclination":98.2299,"RAAN":292.6076,"eccentricity":0.0001986,"perigee":290.8749,"mean_anomaly":94.7865,"mean_motion":14.51750429,"orbit_number":80303},{"name":"TIUNGSAT 1","norad_id":"26548","launch_date":"Sat Feb 26 2000","epoch_date":2456863.1510880208,"first_derivative":0.00000347,"second_derivative":0,"b_star":0.00003864,"inclination":64.5548,"RAAN":62.6649,"eccentricity":0.0010814,"perigee":202.1147,"mean_anomaly":158.0002,"mean_motion":14.86816029,"orbit_number":74857},{"name":"AMSAT OSCAR 40","norad_id":"26609","launch_date":"Sun Mar 12 2000","epoch_date":2456860.6954812845,"first_derivative":-0.00000256,"second_derivative":0,"b_star":0,"inclination":8.2536,"RAAN":42.6502,"eccentricity":0.7937518,"perigee":131.4298,"mean_anomaly":329.3877,"mean_motion":1.25586959,"orbit_number":6301},{"name":"PCSAT","norad_id":"26931","launch_date":"Mon Feb 12 2001","epoch_date":2456863.5195634374,"first_derivative":8e-8,"second_derivative":0,"b_star":0.000035188,"inclination":67.0528,"RAAN":300.8982,"eccentricity":0.0006967,"perigee":281.3406,"mean_anomaly":78.6912,"mean_motion":14.30131572,"orbit_number":66901},{"name":"SAPPHIRE","norad_id":"26932","launch_date":"Mon Feb 12 2001","epoch_date":2456863.286828125,"first_derivative":2.8e-7,"second_derivative":0,"b_star":0.000042728,"inclination":67.0577,"RAAN":302.4901,"eccentricity":0.0005446,"perigee":293.3892,"mean_anomaly":66.6636,"mean_motion":14.30016428,"orbit_number":66902},{"name":"RUBIN 2","norad_id":"27605","launch_date":"Wed Feb 27 2002","epoch_date":2456863.6559781367,"first_derivative":6.5e-7,"second_derivative":0,"b_star":0.000030852,"inclination":64.5566,"RAAN":97.576,"eccentricity":0.005231,"perigee":0.3281,"mean_anomaly":153.1314,"mean_motion":14.73959369,"orbit_number":62347},{"name":"SAUDISAT 1C","norad_id":"27607","launch_date":"Wed Feb 27 2002","epoch_date":2456863.6515244213,"first_derivative":0.00000211,"second_derivative":0,"b_star":0.000052657,"inclination":64.5568,"RAAN":116.6137,"eccentricity":0.0052309,"perigee":359.9503,"mean_anomaly":0.1584,"mean_motion":14.73830354,"orbit_number":62307},{"name":"CUTE-1","norad_id":"27844","launch_date":"Fri Jan 31 2003","epoch_date":2456862.513056609,"first_derivative":7.9e-7,"second_derivative":0,"b_star":0.000055969,"inclination":98.698,"RAAN":213.2544,"eccentricity":0.0010284,"perigee":162.8159,"mean_anomaly":250.7601,"mean_motion":14.2152861,"orbit_number":57381},{"name":"CUBESAT XI-IV","norad_id":"27848","launch_date":"Fri Jan 31 2003","epoch_date":2456863.5127676157,"first_derivative":7.5e-7,"second_derivative":0,"b_star":0.00005448,"inclination":98.7076,"RAAN":213.9712,"eccentricity":0.0010189,"perigee":166.487,"mean_anomaly":252.7559,"mean_motion":14.21213006,"orbit_number":57387},{"name":"MOZHAYETS 4","norad_id":"27939","launch_date":"Tue Feb 11 2003","epoch_date":2456863.565370729,"first_derivative":0.00000206,"second_derivative":0,"b_star":0.000046496,"inclination":97.8125,"RAAN":18.3333,"eccentricity":0.0013503,"perigee":352.3417,"mean_anomaly":7.7575,"mean_motion":14.65253634,"orbit_number":57827},{"name":"AMSAT ECHO","norad_id":"28375","launch_date":"Sun Jan 25 2004","epoch_date":2456863.608080845,"first_derivative":3.9e-7,"second_derivative":0,"b_star":0.000024927,"inclination":98.2525,"RAAN":151.7316,"eccentricity":0.0082154,"perigee":237.1469,"mean_anomaly":122.1793,"mean_motion":14.41404446,"orbit_number":52936},{"name":"HAMSAT","norad_id":"28650","launch_date":"Mon Jan 17 2005","epoch_date":2456862.9693742013,"first_derivative":0.00000528,"second_derivative":0,"b_star":0.000066591,"inclination":97.5605,"RAAN":208.574,"eccentricity":0.0025629,"perigee":38.7828,"mean_anomaly":321.5222,"mean_motion":14.85597277,"orbit_number":49876},{"name":"CUBESAT XI-V","norad_id":"28895","launch_date":"Sat Feb 12 2005","epoch_date":2456862.6016515396,"first_derivative":0.00000205,"second_derivative":0,"b_star":0.00004981,"inclination":97.8328,"RAAN":45.0501,"eccentricity":0.001612,"perigee":251.826,"mean_anomaly":108.1187,"mean_motion":14.61941237,"orbit_number":46564},{"name":"CUTE-1.7+APD II","norad_id":"32785","launch_date":"Mon Jan 21 2008","epoch_date":2456862.6475987732,"first_derivative":0.00000337,"second_derivative":0,"b_star":0.000045109,"inclination":97.6965,"RAAN":255.2267,"eccentricity":0.0014993,"perigee":71.74,"mean_anomaly":348.0377,"mean_motion":14.85394886,"orbit_number":33751},{"name":"COMPASS 1","norad_id":"32787","launch_date":"Mon Jan 21 2008","epoch_date":2456863.593070984,"first_derivative":0.00000763,"second_derivative":0,"b_star":0.0000887,"inclination":97.6987,"RAAN":258.5381,"eccentricity":0.0014804,"perigee":61.4179,"mean_anomaly":298.8526,"mean_motion":14.88070941,"orbit_number":33782},{"name":"DELFI C3","norad_id":"32789","launch_date":"Mon Jan 21 2008","epoch_date":2456863.634877593,"first_derivative":0.00001474,"second_derivative":0,"b_star":0.00014435,"inclination":97.7186,"RAAN":266.4827,"eccentricity":0.0012517,"perigee":46.1733,"mean_anomaly":12.6752,"mean_motion":14.93729683,"orbit_number":33816},{"name":"SEEDS","norad_id":"32791","launch_date":"Mon Jan 21 2008","epoch_date":2456863.5840535997,"first_derivative":0.00000625,"second_derivative":0,"b_star":0.000076113,"inclination":97.6982,"RAAN":257.215,"eccentricity":0.0015519,"perigee":64.6356,"mean_anomaly":295.6465,"mean_motion":14.86700055,"orbit_number":33768},{"name":"YUBELEINY","norad_id":"32953","launch_date":"Fri Jan 25 2008","epoch_date":2456863.478920243,"first_derivative":1e-7,"second_derivative":0,"b_star":0,"inclination":82.5067,"RAAN":177.7116,"eccentricity":0.0020595,"perigee":73.9916,"mean_anomaly":286.3429,"mean_motion":12.43049242,"orbit_number":27995},{"name":"PRISM (HITOMI)","norad_id":"33493","launch_date":"Fri Jan 02 2009","epoch_date":2456863.6675580326,"first_derivative":0.00000613,"second_derivative":0,"b_star":0.000070436,"inclination":98.2506,"RAAN":23.4389,"eccentricity":0.0016829,"perigee":324.6848,"mean_anomaly":35.3231,"mean_motion":14.89630618,"orbit_number":29783},{"name":"STARS (KUKAI)","norad_id":"33498","launch_date":"Fri Jan 02 2009","epoch_date":2456862.831671215,"first_derivative":0.00000556,"second_derivative":0,"b_star":0.000089179,"inclination":98.1974,"RAAN":336.7779,"eccentricity":0.0012766,"perigee":138.3907,"mean_anomaly":274.2935,"mean_motion":14.75655008,"orbit_number":29553},{"name":"KKS-1 (KISEKI)","norad_id":"33499","launch_date":"Fri Jan 02 2009","epoch_date":2456862.596339919,"first_derivative":0.00000248,"second_derivative":0,"b_star":0.000046165,"inclination":98.1944,"RAAN":333.1559,"eccentricity":0.0010555,"perigee":145.1122,"mean_anomaly":263.4902,"mean_motion":14.73454012,"orbit_number":29528},{"name":"SWISSCUBE","norad_id":"35932","launch_date":"Fri Feb 20 2009","epoch_date":2456863.59635772,"first_derivative":0.00000312,"second_derivative":0,"b_star":0.00008401,"inclination":98.3827,"RAAN":318.4673,"eccentricity":0.000677,"perigee":260.8132,"mean_anomaly":99.2299,"mean_motion":14.5449373,"orbit_number":25640},{"name":"BEESAT","norad_id":"35933","launch_date":"Fri Feb 20 2009","epoch_date":2456862.8170721526,"first_derivative":0.0000025,"second_derivative":0,"b_star":0.000069043,"inclination":98.3825,"RAAN":318.4562,"eccentricity":0.0004719,"perigee":279.7297,"mean_anomaly":80.3367,"mean_motion":14.54791936,"orbit_number":25637},{"name":"UWE-2","norad_id":"35934","launch_date":"Fri Feb 20 2009","epoch_date":2456863.5837275693,"first_derivative":0.00000181,"second_derivative":0,"b_star":0.000053234,"inclination":98.377,"RAAN":318.2409,"eccentricity":0.000541,"perigee":278.9452,"mean_anomaly":81.1132,"mean_motion":14.54523539,"orbit_number":25647},{"name":"ITUPSAT 1","norad_id":"35935","launch_date":"Fri Feb 20 2009","epoch_date":2456862.7263637963,"first_derivative":0.0000015,"second_derivative":0,"b_star":0.000046487,"inclination":98.3925,"RAAN":318.5944,"eccentricity":0.0007156,"perigee":267.5937,"mean_anomaly":92.444,"mean_motion":14.54089727,"orbit_number":25625},{"name":"XIWANG-1 (HOPE-1)","norad_id":"36122","launch_date":"Fri Mar 13 2009","epoch_date":2456863.5372677892,"first_derivative":-4.3e-7,"second_derivative":0,"b_star":0,"inclination":100.245,"RAAN":256.7557,"eccentricity":0.0007731,"perigee":149.7859,"mean_anomaly":210.3705,"mean_motion":13.16317038,"orbit_number":22141},{"name":"JUGNU","norad_id":"37839","launch_date":"Sun Feb 27 2011","epoch_date":2456863.3383346414,"first_derivative":0.00000333,"second_derivative":0,"b_star":0.000035963,"inclination":19.9627,"RAAN":26.7437,"eccentricity":0.0019143,"perigee":38.9148,"mean_anomaly":64.6357,"mean_motion":14.12321108,"orbit_number":14388},{"name":"SRMSAT","norad_id":"37841","launch_date":"Sun Feb 27 2011","epoch_date":2456863.460531007,"first_derivative":0.00000312,"second_derivative":0,"b_star":0.000026417,"inclination":19.9732,"RAAN":46.0819,"eccentricity":0.0011969,"perigee":338.9181,"mean_anomaly":137.7218,"mean_motion":14.10360885,"orbit_number":14369},{"name":"AUBIESAT-1","norad_id":"37854","launch_date":"Wed Mar 02 2011","epoch_date":2456863.6104085185,"first_derivative":0.00001046,"second_derivative":0,"b_star":0.000078242,"inclination":101.7151,"RAAN":255.8476,"eccentricity":0.0212993,"perigee":304.0026,"mean_anomaly":107.4212,"mean_motion":14.91157204,"orbit_number":14836},{"name":"M-CUBED/EXP-1 PRIME","norad_id":"37855","launch_date":"Wed Mar 02 2011","epoch_date":2456863.617754271,"first_derivative":0.00001309,"second_derivative":0,"b_star":0.000096401,"inclination":101.7155,"RAAN":255.1628,"eccentricity":0.0215184,"perigee":305.3717,"mean_anomaly":109.8382,"mean_motion":14.90445832,"orbit_number":14833},{"name":"MASAT-1","norad_id":"38081","launch_date":"Fri Jan 06 2012","epoch_date":2456863.7212785534,"first_derivative":0.00038808,"second_derivative":0.0000039366,"b_star":0.00041936,"inclination":69.455,"RAAN":250.1659,"eccentricity":0.0350839,"perigee":299.9116,"mean_anomaly":119.1368,"mean_motion":15.14376368,"orbit_number":12922}]
// // satellites = [satellites[0], satellites[1], satellites[2], satellites[3]]


// satellites.forEach(function(d) {
//   d.adjustedRAAN = getSiderealAscension(d);
//   d.projectionOffset = getOffset(d);
//   d.rotationVelocity = getVelocity(d);
// })


// var width = $(document).width(),
//     height = $(document).height(),
//     t0 = Date.now(),
//     globeScale = (height)/2.8,
//     scaleRatio = 1.1568,                              // assumes satellites have 1000km orbit height
//     satScale = globeScale*scaleRatio,
//     starScale = height,
//     centerH = height/2,
//     centerW = width/2,
//     satClip = 90 + radToDeg(Math.acos(1/scaleRatio)), // auto adjust clip angle for satellites revolving around globe
//     earthSpeed = 360/24/60/60,                        // rotation degrees per second
//     spdFactor = 24*10,                                // 24 = 1hour-day, 24*10 = 6minute-day, 24*60 = 1minute-day
//     displayTime;

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);


// ////////// GLOBE PROJECTION //////////////
// var projection = d3.geo.orthographic()
//     .scale(globeScale)
//     .translate([centerW, centerH])
//     .rotate([0,0,0])
//     .clipAngle(90);

// var path = d3.geo.path()
//     .projection(projection);


// /////// SATELLITE PROJECTION ////////////

//   var satObjects = []
//   satellites.forEach(function(d) {
//     d.topoObject = makeSatelliteObject()
//     satObjects.push(makeSatelliteObject())
//   });

// ///////

// satProjections = []
// satPaths = [];
// satellites.forEach(function(d) {
//   var satProjection = d3.geo.orthographic()
//     .scale(satScale)
//     .translate([centerW,centerH])
//     .clipAngle(satClip);

//   var satPath = d3.geo.path()
//       .projection(satProjection)
//       .pointRadius(5);

//   d.satPath = satPath;
//   d.satProjection = satProjection;
//   satPaths.push(satPath);
//   satProjections.push(satProjection);
// });


// //////

// var rotationVelocity = [30, 0]


// //////////// STAR BACKGROUND //////////////
// var starProjection = d3.geo.azimuthalEquidistant()
//     .scale(height)
//     .translate([width/2,height/2])

// var starPath = d3.geo.path()
//     .projection(starProjection)
//     .pointRadius(Math.random() + 1)


// ////////////// STAR CREATION ////////////////
// var starList = createStars(800);

// var stars = svg.append("g")
//         .attr("id", "stars")
//     .selectAll("g")
//     .data(starList)
//     .enter()
//     .append("path")
//         .attr("class", "star")
//         .attr("d", function(d){ return starPath(d); })
//         .attr("opacity", function(d){ return randOpacity(.35, 1) });

// /////////////// ATMOSPHERE /////////////////////
// var backgroundCircle = svg.append("svg:circle")
//     .attr('cx', centerW)
//     .attr('cy', centerH)
//     .attr('r', globeScale)
//     .attr('class', 'atmosphere')
//     .attr("filter", "url(#glow)")


//   ////////////// TOPO FEATURES /////////////////

// queue()
//     .defer(d3.json, "world.json")
//     .await(ready);

//   function ready(error, world){

//     var ocean = svg.append("path")
//         .datum(topojson.feature(world, world.objects.ocean))
//         .attr("class", "globe")
//         .attr("id", "ocean")
//         .attr("d", path);

//     var land = svg.append("path")
//         .datum(topojson.feature(world, world.objects.land))
//         .attr("class", "globe")
//         .attr("id", "land")
//         .attr("d", path);

//     var satElements = svg.selectAll("path.satellite")
//         .data(satObjects)
//         .enter()
//         .append("path")
//         .attr("class", "satellite")
//         .attr("id", function(d, i) { return satellites[i].norad_id; })

//     ////// ROTATION TIMER ///////////
//     d3.timer(function() {
//       var t = (Date.now()-t0)/1000;
//       projection.rotate([0 + earthSpeed*spdFactor*t, 0, 0]);
//       ocean.attr("d", path);
//       land.attr("d", path);

//       // flipped latitude and longitude to deal with offset
//       satProjections.forEach(function(d,i) {
//         d.rotate([satellites[i].projectionOffset[1] + satellites[i].rotationVelocity*spdFactor*t, satellites[i].projectionOffset[0], satellites[i].inclination])
//         d3.select($("#"+satellites[i].norad_id)[0]).attr("d", function(d) {
//           return satPaths[i](d)
//         });
//       });
//     });
// };

// setInterval(timer, 1000/spdFactor);
