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

w.watch(['c'], ['after'], ['update','delete', 'access', 'create'], (scope, propname, event, action, value, oldValue) => {
    console.log( scope + ' -- ' + event + ' -- ' + action + ' - ' + propname + ' - ' + value + ' - ' + oldValue);
    return true;
});

console.log(obj);
