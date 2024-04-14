function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.caminar = function () {
    console.log ("camino todos los dias")
}

const Administrador = new Persona ("Ral", 23);
const mecanico = new Persona ("Bryan", 25);

console.log(Administrador);
console.log(mecanico);

function Ingeniero (nombre, edad, correo) {
    this.super = Persona;
    this.super = (nombre, edad);
    this.correo = correo;
}

Ingeniero.prototype = new Persona();
Ingeniero.prototype.contructor = Ingeniero;

Ingeniero.prototype.caminar = function(){
    console.log("Me evanto a caminar")
}
Ingeniero.prototype.trabajar = function(){
    console.log("Me evanto a trabajar eche")
}

const hombre = new Ingeniero ("Raul",34,"Name@queso.com");
const mujer = new Ingeniero ("Laura",24,"Name@queso.com");

console.log(hombre);
console.log(mujer);
mujer.trabajar();
mujer.caminar();