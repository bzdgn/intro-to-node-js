var request = require('request');

//var s = request('http://www.tcmb.gov.tr/kurlar/today.xml');
var s = request('http://www.tcmb.gov.tr/kurlar/201601/14012016.xml');

s.on('data', function(chunk) {
    console.log(" >>>Data>>> \n\n" + chunk);
});

s.on('end', function() {
    console.log(">>>Done!>>>");
});
