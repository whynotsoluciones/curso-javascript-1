/**
 * Como hemos visto anteriormente, la forma en que  JS nos permite
 * crear objetos es un poco engorrosa. Podemos extender la funcionalidad
 * de Object para ahorrarnos un poco de trabajo
 */
if (typeof Object.create !== 'function') {
    Object.create = function(o) {
        // Constructor
        var C = function() {};
        C.prototype = o;
        return new C();
    }
}

/**
 * La siguiente función 'inspecciona' las propiedades de un objeto
 * y nos dice cuales de ellas son propias y cuales heredadas de la
 * cadena de prototipos
 */
function inspect(o) {
    var type = '';
    // Con la sentencia 'in' podemos iterar sobre los miembros de un objeto
    for (pName in o) {
        type = (typeof o[pName] !== 'function')?'Propiedad':'Función';
        if (o.hasOwnProperty(pName)) {
            console.log(type + ' propia ' + pName + ':' + o[pName]);
        } else {
            console.log(type + ' heredada ' + pName + ':' + o[pName]);
        }
    }
}

var obj1 = {
    prop: 'Prototipo 1',
    method: function() {
        console.log(this.prop);
    }
};

var obj2 = Object.create(obj1);
obj2.prop = 'Prototipo 2';

var obj3 = Object.create(obj1);
obj3.prop = 'Prototipo 3';
// ¿Que pasa si ahora modificamos el prototype? 
// obj1.prop = 'Prototipo 1 modificado';
debugger;

inspect(obj1);
debugger;

inspect(obj2);
debugger;

inspect(obj3);

