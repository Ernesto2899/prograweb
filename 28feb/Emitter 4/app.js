'use strict';

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello World';
    }
    greet(data) {
        console.log(`${ this.greeting }: ${ data }`);
        this.emit('greet', data)
    }
}




var greeter1 = new Greetr();
var data = 'CoronaVirus';
greeter1.on('greet', function(data) {
    //el metodo on permite emitir esos movimientos
    console.log('Someone greeted!:' + data);
});

greeter1.greet(data);