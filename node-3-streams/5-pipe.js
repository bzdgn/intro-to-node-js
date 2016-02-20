var request = require('request');

//var s = request('http://www.tcmb.gov.tr/kurlar/201601/14012016.xml');
//s.pipe(process.stdout);

request('http://www.tcmb.gov.tr/kurlar/201601/14012016.xml').pipe(process.stdout);