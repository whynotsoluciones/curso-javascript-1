/**
 * Un constructor es una Función. En JS, toda función es un objeto.
 * Como objeto que es, puede tener propiedades y métodos
 */
function HolaMundo() {

    // Propiedades
    this.prop = '¡Hola mundo!';

    // Métodos    
    this.method = function () {
        console.log(this.prop);
    };

}

// El operador new nos permite convertir cualquier función en un constructor 
var myObject = new HolaMundo();
myObject.method();