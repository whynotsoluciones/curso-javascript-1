/**
 * Si una función no es una propiedad de un objeto, this hace referencia al "objeto global"
 */
var Saludador = function (nombre) {
    this.saludo = 'Hola ' + nombre;
    this.saludar = function () {
        setTimeout(function () {
            // Fix : esto no va a funcionar
            console.log(this.saludo);
        }, 2000);
    };

};

var saludador = new Saludador('Mundo');
saludador.saludar();