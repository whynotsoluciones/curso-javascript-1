/**
 * La construcción de módulos evita una de las peores características
 * de JS: el uso de variables globales;
 */

// Por ejemplo vamos a redefinir el método toString de Number:
// Ahora imprimirá antes del número, la cantidad de veces que
// se ha ejecutado toString 
Number.prototype.toString = function() {

    var counter = 0;

    return function() {
        counter++;
        return (counter + ':' + this);
    }

}();

var num1 = 1;
var num2 = 2;

console.log('Imprimimos los números: ' + num2.toString() + ', ' + num1.toString());
