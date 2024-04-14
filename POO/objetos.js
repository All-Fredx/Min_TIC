/*const animal = {
    id:1,
    nombre:"perro",
    color: "negro",
}
console.log(animal.nombre);
console.log(animal.color);
*/
/*
class animal {
    constructor(){
        this.id=1;
        this.nombre="perro";
        this.color="negro";
    }
}
const perro = new animal() ;
console.log(perro);
*/
class animal {
    constructor(id,nombre,color){
        this.id=id;
        this.nombre=nombre;
        this.color=color;
    }
}

const perro = new animal(1,"perro","negro");
const gato = new animal(2,"gato","blanco");
