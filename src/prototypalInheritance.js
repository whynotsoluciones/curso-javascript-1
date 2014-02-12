var human = {
    name: 'Bruce',
    surname: 'Springsteen',
    fullName: function () {
        return this.name + ' ' + this.surname;
    }
};

var musician = Object.create(human);
musician.instruments = ['Guitar', 'Drums', 'Bass'];
musician.playAll = function () {
    this.instruments.forEach(function (instrument) {
        console.log('\tPlaying ' + instrument);
    });
};

console.log(musician.fullName() + ' playing…');
musician.playAll();