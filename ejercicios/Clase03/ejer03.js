/*

let edad = 18;


if(edad === 18){ // estructura de decisión simple
    console.log("Acceso permitido");
}


if(edad === 18){ // estructura de decisión compuesta
    console.log("Acceso permitido");
}else{
    console.log("Acceso denegado");
}
*/

/*
if(edad > 18){ // estructura de decisión compuesta usando else if
    console.log("Acceso permitido eres una persona mayor");
}else if(edad === 18){
    console.log("Acceso permitido: tienes justo la edad mínima");
}else{
    console.log("Acceso denegado: eres menor de edad");
}


*/


/*
function aplicarTemaClaro(){
    console.log("El tema Claro fue aplicado a su sitio Web");
}

function aplicarTemaOscuro(){
    console.log("El tema Oscuro fue aplicado a su sitio Web");
}

function aplicarTemaMagenta(){
    console.log("El tema Magenta fue aplicado a su sitio Web");
}

function aplicarTemaDefault(){
    console.log("El tema Predeterminado fue aplicado a su sitio Web");
}



let tema = "Magenta";
switch(tema){
    case "claro": 
        aplicarTemaClaro();
        break;
    case "oscuro":
        aplicarTemaOscuro();
        break;
    case "Magenta":
        aplicarTemaMagenta();
        break;
    default:
        aplicarTemaDefault();
}

*/

/*
// Lista de productos
const productos = [
    { nombre: "Café", precio: 5000 }, // ----> indice 0
    { nombre: "Te verde", precio: 4500 }, // ----> indice 1
    { nombre: "Chocolate", precio: 6000 },  // ----> indice 2
    { nombre: "Yogurth Griego", precio: 12500} // ---- indice 3
]

//función que muestra el producto en la consola
function mostrarProducto(producto) { // metodologia camel case
    console.log(`${producto.nombre} - $${producto.precio}`);
}

//recorremos el array de objetos de productos
for (let i = 0; i < productos.length; i++) { // 0, 1, 2, 3
    mostrarProducto(productos[i]);
}

*/

/*
let contador = 1;

do {
    console.log("Iteracción número: " + contador);
    contador++;
} while (contador <= 20);

*/


//lista de items
const items = [
    {ref: "Mouse", color:"negro"},
    {ref: "Keyboard", color:"White"},
    {ref: "Pad Mouse", color:"yellow"}
]

// usamos forEach para recorrer el array de objetos llamado items
items.forEach((i)=> {
    console.log(`Item: ${i.ref}, Color: ${i.color}`);
});


