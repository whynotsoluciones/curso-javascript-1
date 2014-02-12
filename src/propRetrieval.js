/**
 * Podemos declarar un objeto como un literal. Las propiedades pueden
 * tener como valor cualquier primitiva
 */
var myObject = {
    prop1: 'Hola mundo',
    prop2: 101
};

/**
 * También cualquier otro objeto (incluso funciones)
 */
var myObject2 = {
    prop: myObject,
    prop2: {
        prop21: 'Hello world',
        prop22: 202
    },
    method: function () {
        // Podemos acceder a las propiedades con notación de corchetes
        console.log(this["prop"]["prop1"] + '>>' + this.prop2.prop21);
    }
};

// métodos
myObject2["method"]();

// Si intentamos acceder a propiedades de objetos que no existen, tendremos un TypeError Exception

try {
    console.log(myObject.prop3.prop31);
} catch (e) {
    // Mostramos el error
    console.log("ERROR: " + e.toString());
    // Asignamos la propiedad
    myObject.prop3 = {
        prop31: 'Esta propiedad sí existe'
    };
    // Esta es la forma adecuada de acceder a propiedades de objetos
    // que no estamos seguros si existen
    myObject.prop3 && console.log(myObject.prop3.prop31);
}