var Emitter = require('./emiter.js');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Somewhere, someone said hello');
});

emtr.on('greet', function() {
    console.log('Agreeting ocurred');
});

console.log('Hello!');
emtr.emit('greet');