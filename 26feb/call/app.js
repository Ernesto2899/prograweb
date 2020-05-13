//El método apply() invoca una determinada función asignando explícitamente el objeto this 
//y un array o similar (array like object) como parámetros (argumentos) para dicha función.

//El método call() llama a una función con un valor this asignado y argumentos provistos
// de forma individual.
 
var obj = {
    name: 'John Doe',
    greet: function(param, param2) {
        console.log(`Hello ${ this.name},${param}`);
    }
}

obj.greet();
var param = 'something';
var param2 = 'something';
obj.greet.call({name: 'Jane Doe'}, param);
//obj.greet.call({name: 'Jane Doe'}, param, param2); este es funcin y abajo las vectores
obj.greet.apply({name: 'Jane Doe'}, [param, param2]);