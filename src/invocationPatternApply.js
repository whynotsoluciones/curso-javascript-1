/**
 * Definimos una función con un número de argumentos variable, que suma todos los argumentos que
 * recibe
 */
var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    // --begin test
    if (this.obj) {
        console.log(this.obj);
    }
    // -- end test
    return sum;
};

console.log(sum(1, 2, 3, 4));
debugger;

// Vamos a ver el patrón de invocación de apply, y cómo podemos establecer el valor de this
sum.apply({
    obj: 'Esto es una propiedad de objeto'
}, [1, 2, 3, 4]);