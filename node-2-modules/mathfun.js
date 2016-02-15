"using strict";

var maxTime = 1000;

var evenDoubler = function(input, callbackFunction) {
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if(input % 2) {
        setTimeout(function() {
            callbackFunction(new Error("Odd input"));
        }, waitTime);
    } else {
        setTimeout(function() {
            callbackFunction(null, input*2, waitTime);
        }, waitTime);
    }
};

// functions
module.exports.evenDoubler = evenDoubler;

// variables
module.exports.foo = 'bar';