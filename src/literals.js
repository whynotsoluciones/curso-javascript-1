/**
 * Podemos declarar un objeto como un literal. Las propiedades pueden
 * tener como valor cualquier primitiva
 */
var myObject = {
    prop1: 'Hola mundo',
    prop2: 101
}

/**
 * También cualquier otro objeto (incluso funciones)
 */
var myObject2 = {
    prop: myObject,
    prop2: {
        prop21: 'Hello world',
        prop22: 202
    },
    method: function() {
        console.log(this.prop.prop1 + '>>' + this.prop2.prop21);
    }
}

myObject2.method(); 
