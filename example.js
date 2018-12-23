'use strict';

const watcher = require('./watcher');

let w = new watcher({
    a: 'slm',
    b: 'hehehe',
    c: [
        {x: 'x', y: 'y'}
    ]
});

let obj = w.val();

w.watch(['c.*.x'], ['after'], ['update','delete', 'access', 'create'], (scope, propname, event, action, value, oldValue) => {
    console.log( scope + ' -- ' + event + ' -- ' + action + ' - ' + propname + ' - ' + value + ' - ' + oldValue);
    return false;
});

let a = obj.c[0].x;
console.log(a);

