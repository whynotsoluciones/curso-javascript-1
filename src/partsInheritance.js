var humanConstructor = function (spec) {

    var that = {};

    // spec es privado al closure. Sólo exponemos lo que nos interesa

    that.fullName = function () {
        return spec.name + ' ' + spec.surname;
    };

    return that;

};

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

/**
 * Declaramos la funcionalidad de volar
 */
var flyable = function (that, spec) {

    spec = spec || {
        speed: 1000
    };

    var flyMiles = function (remaining) {
        if (remaining && remaining > 0) {
            setTimeout(function () {
                process.stdout.write('.');
                flyMiles(--remaining);
            }, spec.speed);
        } else  {
            console.log('\nLanding…');
        }
    };

    that.fly = function (miles) {
        console.log('\nTaking off…');
        flyMiles(miles);
    };

    return that;

};

// Hacemos que el músico vuele
musician = flyable(musician);
musician.fly(10);