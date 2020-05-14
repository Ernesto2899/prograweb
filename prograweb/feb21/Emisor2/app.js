var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
    console.log('Somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, function() {
    console.log('Agreeting ocurred');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);

//Un magic string es una cadena especial pero cadenas pueden aceptar 
//errores como typos sin marcarte error, esto puede ser dificil cuando
//un programa se basa en cadenas. Para combatir esto se usan palabras en toda
//Mayuscula asi te lee y guarda el valor o variable