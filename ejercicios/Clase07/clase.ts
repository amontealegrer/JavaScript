class Persona {
    nombre: string;
    edad: number;
    nacionalidad: string;

    constructor(nom: string, eda: number, nac: string) {
        this.nombre = nom;
        this.edad = eda;
        this.nacionalidad = nac;

    }

    saludar(): void {
        console.log(`Hola, mi nombre es ${this.nombre} con ${this.edad} años de edad y soy de nacionalidad ${this.nacionalidad} `);
    }
}

const persona1 = new Persona("Carlos", 23, "Venezolano");
const persona2 = new Persona("Isabella",20,"Colombiana");
const persona3 = new Persona("Juan Jose",15,"Colombiano");

persona3.saludar();
