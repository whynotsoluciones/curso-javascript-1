//
// Nuestro objeto prototipo
//
var myPrototype = {
    prop: 'Hola mundo',
    method: function () {
        console.log(this.prop);
    }
};

// Seleccionamos el objeto anterior como prototipo de nuestro nuevo constructor
var Constructor = function () {};
Constructor.prototype = myPrototype;

// Creamos nuestro nuevo objeto
var myObject = new Constructor();
// Heredará los atributos de nuestro prototipo
myObject.method();
debugger;

// El enlace al prototipo es sólo usado en la recuperación, no en la actualización
myObject.prop = 'Cambiamos el texto';
console.log(myObject.hasOwnProperty('prop'));
// Cremos un segundo objeto que herede del mismo prototipo
var myObject2 = new Constructor();
myObject2.method();
debugger;

// Sin embargo, los cambios en el prototipo, se propagan a todos los objetos que heredan de él y no
// han modificado el prototipo
myPrototype.prop = 'Cambio de texto en el prototipo';

myObject.method();
myObject2.method();
debugger;

myObject2.method = function () {
    console.log('Cambio del método en el objeto myObject2');
};

// Si cambiamos el método en el prototipo, cambiará en aquellos objetos que no hayan modificado el método
myPrototype.method = function () {
    console.log('Cambio del método en el prototipo');
};

myObject.method();
myObject2.method();