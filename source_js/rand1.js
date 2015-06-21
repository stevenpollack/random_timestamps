#!/usr/local/bin/node

var runs = process.argv[2];
var maxInterval = 2000;

var startTime = now = Date.now();

for (i=0; i<runs; i++) {
    var interval = Math.floor( Math.random() * maxInterval + 1 );
    now += interval;
    console.log(now);
}

