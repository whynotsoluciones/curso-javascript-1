var obj = {};

// Podemos agregar una propiedad en tiempo de ejecución
obj.prop = 'hola mundo';
console.log('Valor: ' + obj.prop + ' Tipo: ' + typeof obj.prop);
debugger;

// Podemos cambiar el valor/tipo de la propiedad
obj.prop = 10;
console.log('Valor: ' + obj.prop + ' Tipo: ' + typeof obj.prop);
debugger;

// Podemos asignarle null
obj.prop = null; 
console.log('Valor: ' + obj.prop + ' Tipo: ' + typeof obj.prop);
debugger;

// Podemos eliminar la propiedad
delete obj.prop;
console.log('Valor: ' + obj.prop + ' Tipo: ' + typeof obj.prop);

