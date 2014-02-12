/**
 * Supongamos que el caso anterior queremos esconder las propiedades de los objetos
 */
var humanConstructor = function (spec) {

    var that = {};

    // spec es privado al closure. Sólo exponemos lo que nos interesa

    that.fullName = function () {
        return spec.name + ' ' + spec.surname;
    };

    return that;

};

/**
 * En el patrón pseudoclásico, teníamos que duplicar el trabajo del constructor
 * de humanos en el de músicos. Ahora podemos llamar al constructor de human
 */
var musicianConstructor = function (spec) {

    var that = humanConstructor(spec);
    var instruments = ['Guitar', 'Drums', 'Bass'];

    // Aumentamos la funcionalidad de human 
    that.playAll = function () {
        instruments.forEach(function (instrument) {
            console.log('\tPlaying ' + instrument);
        });
    };

    return that;

};

var musician = musicianConstructor({
    name: 'Bruce',
    surname: 'Springsteen'
});

console.log(musician.fullName() + ' playing…');
musician.playAll();

if (musician.name === undefined && musician.surname === undefined) {
    console.log('No tenemos acceso a las propiedades privadas del músico !!');
}

// Incluso podemos añadir propiedades name y surname al objeto, y no
// se compromete su integridad!
musician.name = 'Pepito';
musician.surname = 'Palotes';
console.log('El nombre sigue siendo ' + musician.fullName());