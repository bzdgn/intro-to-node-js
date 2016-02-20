var request = require('request');
var fs = require('fs');

request('http://www.tcmb.gov.tr/kurlar/201601/14012016.xml').pipe(fs.createWriteStream('./output/dolar_kuru.html'));