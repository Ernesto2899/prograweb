// //object properties and methods
// var obj = {
//     greet: 'Hello'
// }

// console.log(obj.greet);
// console.log(obj['greet']);
// var prop = 'greet';
// console.log(obj[prop]);



// var obj={
//     greet : 'hola',
//     greetr : function () {
//         console.log('hola desde la funcion');
//     }
// }

// var seleccion = 'greetr';

// obj[seleccion]();
// //obj['greetr']();



var arr = [];

arr.push(function(){
    console.log('Hello world 1');
});
arr.push(function() {
    console.log('Hello world 2');
});
arr.push(function() {
    console.log('Helllo world 3');
});

arr.forEach(function(item) {
    item();
});