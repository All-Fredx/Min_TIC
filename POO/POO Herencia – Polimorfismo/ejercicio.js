class Inmueble {
    constructor(Id,Direccion,Pisos,Parqueadero) {
        this.Id = Id ;
        this.Direccion = Direccion;
        this.Pisos = Pisos;
        this.Parqueadero = Parqueadero;
    }
    dInmueble (){
        return `ID: ${this.Id} esta en la Dirección: ${this.Direccion}, tiene: ${this.Pisos} pisos,parqueadero: ${this.Parqueadero}`;
    }
    polimorfismo (){
        return this.dInmueble();
    }
}
class Casa extends Inmueble {
    constructor(Id,Direccion,Pisos,Parqueadero,Jardin) {
        super(Id,Direccion,Pisos,Parqueadero)
        this.Jardin = Jardin;
    }

    polimorfismo (){
        return `La casa de ${super.dInmueble()}, Jardin: ${this.Jardin}`;
    }
}
class Conjunto extends Inmueble {
    constructor(Id,Direccion,Pisos,Parqueadero,Porteria,cTorres,zcomunes) {
        super(Id,Direccion,Pisos,Parqueadero)
        this.Porteria = Porteria;
        this.cTorres = cTorres;
        this.zcomunes = zcomunes;
    }
    polimorfismo (){
        return `El conjunto de ${super.dInmueble()}, porteria: ${this.Porteria}, tiene: ${this.cTorres} torres, Zonas comunes: ${this.zcomunes}`;
    }
}

let casa1 = new Casa(1,"Cl 2 #2-2",2,"Si","No");
console.log(casa1);
console.log(casa1.polimorfismo());
let conjunto1 = new Conjunto (2,"CL 3#5-3",8,"Si","Si",20,"No");
console.log(conjunto1);
console.log(conjunto1.polimorfismo());