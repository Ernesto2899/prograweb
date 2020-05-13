var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter);
//inherits hace que el primer parametro herede los funci9ones del segudno parametro
//Eventemitter te permite asignar lo que va sacar el emtodo on
Greetr.prototype.greet = function(data) {
    console.log(this.greeting + '; ' + data);
    this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    //el metodo on permite emitir esos movimientos
    console.log('Someone greeted!:' + data);
});

greeter1.greet('Tony');