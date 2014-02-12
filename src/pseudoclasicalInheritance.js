var Human = function(name, surname) {

    this.name = name || 'Nombre';
    this.surname = surname || 'Apellidos';

    this.fullName = function() {
        return this.name + ' ' + this.surname;
    }

}

var Musician = function(name, surname) {

    this.instruments = ['Guitar', 'Drums', 'Bass'];
    this.name = name || this.name;
    this.surname = surname || this.surname;

    this.playAll = function() {
        this.instruments.forEach(function(instrument) {
            console.log('\tPlaying ' + instrument);
        })
    };   

}

// Hacemos que Musician herede de Human
// Remplazamos el prototipo por defecto de Musician por una instancia de Human
Musician.prototype = new Human();

var musician = new Musician('Bruce', 'Springsteen');
console.log(musician.fullName() + ' playing…');
musician.playAll();


// Podríamos aumentar function para permitir heredar
Function.method('inherits', function (Parent) { 
    this.prototype = new Parent();
    return this;
});

// entoces podríamos hacer: Musician.inherits(Human);
