
var obj = {
    prop: 'Propiedad de nuestro object',
    method: function() {
        console.log(this.prop);
    }
}

obj.method();
