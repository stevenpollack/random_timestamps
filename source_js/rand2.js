#!/usr/local/bin/node

var runs = process.argv[2];
var regularInterval = 1000;
var maxRandomInterval = 2000;
var postponed = [];

var startTime = now = 10000000; Date.now();

for (i=0; i<runs; i++) {

    // push a new Interal-value to Array
    postponed.push(Math.floor( Math.random() * maxRandomInterval + 1 ));

    // select all intervals that belong to the current Cycle (and print).
    var currentCycle = postponed.filter( function(item) {
        return item < regularInterval;
    }).sort(function(a,b){
        return a - b;
    }).map( function(item) {
        return item + now;
    });

    if (currentCycle.length) {
        console.log( currentCycle.join("\n") );
    };

    // prepare for next cycle
    postponed = postponed.filter( function(item) {
        return item >= regularInterval;
    }).map( function(item) {
        return item - regularInterval;
    });

    now += regularInterval;

}

