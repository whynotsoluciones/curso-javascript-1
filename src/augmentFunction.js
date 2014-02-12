/**
 * Mediante el uso del prototype, podemos 'aumentar' los tipos básicos de JS.
 * De esta forma cada vez que tengamos una variable de ese tipo, tendrá el nuevo método
 */
var winston = require('winston');

// Nos cepillamos el método foreach de Array (Node implementa ECMAScript 5 y ya viene con él)
// Tabla de compatibilidad Navegadores: http://kangax.github.io/es5-compat-table/
delete Array.prototype.forEach;

//var cons = console; // WTF !!

// Nos lo definimos nosotros
Array.prototype.forEach = function(callback) {
    if (callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    }
}

var sal = '';
var people = ['Josué', 'Laura', 'Alex', 'Matto', 'Diego', 'Javi', 'Eze'];
people.forEach(function(el) {
    //console.log('Hola ' + el);
    winston.info('Hola ' + el);
});

console.log('hola');
