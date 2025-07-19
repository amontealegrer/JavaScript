var Persona = /** @class */ (function () {
    function Persona(nom, eda, nac) {
        this.nombre = nom;
        this.edad = eda;
        this.nacionalidad = nac;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es ".concat(this.nombre, " con ").concat(this.edad, " a\u00F1os de edad y soy de nacionalidad ").concat(this.nacionalidad, " "));
    };
    return Persona;
}());
var persona1 = new Persona("Carlos", 23, "Venezolano");
var persona2 = new Persona("Isabella", 20, "Colombiana");
var persona3 = new Persona("Juan Jose", 15, "Colombiano");
persona3.saludar();
