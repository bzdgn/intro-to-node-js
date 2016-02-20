var request = require('request');
var fs = require('fs');
var zlib = require('zlib');

// request('http://www.tcmb.gov.tr/kurlar/201601/14012016.xml').pipe(fs.createWriteStream('./output/dolar_kuru.html'));
request('http://www.tcmb.gov.tr/kurlar/201601/14012016.xml').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./output/dolar_kuru.html.gz'));

// check it with zcat;
// zcat <file>