/**
 * Declaramos una función que crea objetos
 */
var factory = function () {

    var privateAttribute = 'Privado';
    var privateMethod = function () {
        console.log(privateAttribute);
    };

    return {
        get: function () {
            return privateAttribute;
        },
        set: function (val) {
            privateAttribute = val;
        },
        print: function () {
            privateMethod();
        }
    };

};

var obj = factory();
debugger;

console.log('Acceso a attributo privado => ' + obj.privateAttribute);
debugger;

console.log('Acceso a método privado => ' + obj.privateiMethod);
debugger;

obj.print();
debugger;

obj.set('Cambiamos atributo privado');
obj.print();
debugger;

// Creamos otro objeto con nuestro 'Factory'
var obj2 = factory();
obj2.print();