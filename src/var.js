/**
 * Con la palabra reservada var ---podemos--- debemos declarar las variables
 */

(function() {

    myVar = 'Esto es una variable global';

})();

console.log(myVar);
debugger;


(function() {

    // Con var limitamos el scope a la función
    var myOtherVar = 'Esto es una variable privada de la función';

})();

console.log(myOtherVar);
