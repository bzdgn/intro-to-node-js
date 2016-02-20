var fs = require('fs');
var zlib = require('zlib');

// request('http://www.tcmb.gov.tr/kurlar/201601/14012016.xml').pipe(fs.createWriteStream('./output/dolar_kuru.html'));
fs.createReadStream('./output/dolar_kuru.html.gz').pipe(zlib.Gunzip()).pipe(fs.createWriteStream('./output/dolar_kuru_unzipped.html'));