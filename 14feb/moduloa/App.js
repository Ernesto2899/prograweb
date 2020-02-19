var greet = require('./greet');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet(); //accedo al metodo greet mediante la notacion del punto greet3
//porque greet3 regresa la isntancia de un objeto
greet3.greeting = ('Changed the world');

var greet3b = require ('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();