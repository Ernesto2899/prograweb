'use strict';
var EventEmitter = require('events');


class Greetr {
    constructor() {
        this.firstname = 'John';
        this.lastname = 'Connor';
        this.greeting = 'Hello ';
        
    }
    greet() {
        console.log(`${ this.greeting } ${ this.firstname } ${ this.lastname} ${this.badgenumber}`);
        
    }
}

class Person extends Greetr {
    constructor() {
        super();
        this.badgenumber = '1234';
    }
}





let P = new Person();


P.greet();
