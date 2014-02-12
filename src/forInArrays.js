var arr = ['Alex', 'Josué', 'Laura', 'Matto'];

Array.prototype.propiedad = "Hola mundo";

var el;
for (el in arr) {
    console.log(el);
}