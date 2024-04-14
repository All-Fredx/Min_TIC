 /* const arreglo1 = [1,2,3,4,5,6,7,8,9];
const arreglo2 = [11,12,13,14,15,16];

const arregloU = [...arreglo1,...arreglo2];
console.log(arregloU);

const operador = [1,2,3,4];
let operadorCopy = [...operador];
operadorCopy[0] = 0;
console.log(operador);
console.log(operadorCopy);

const lisNum1 = [1,2,3,4,5];
const lisNum2 = [6,7,8,9,10];

console.log(lisNum1.concat(lisNum2));

const lisNum3 = [1,2,3,4,5];
const lisNum4 = [6,7,8,9,10];

console.log([...lisNum3,...lisNum4]);

const lisNum5 = [1,2,3,4,5];
const lisNum6 = [6,7,8,9,10];

console.log([0,...lisNum3,"Hola Mundo",...lisNum4,11,12,13,14,"Fin Mundo"]);

const user = {
    nombre: "Alfred",
    id: 1234,
};
const user2 = {
    correo: "Alfred@dominio.com",
    celular: 1234,
};
let userC = {...user,...user2, correo:"Julian@gmail.com"};
//const userC = Object.assign({},user,user2);
userC.nombre = "Dario";
//userC.Apellido = "Mendez";
//userC.correo = "NuevoCorreo@dominio.com";
console.log(user);
console.log(userC);

const objeto = {nombre:"Nombre",cedula:1234,correo:"correo@dominio.com",telefono:1234};
console.log(objeto);
console.log(typeof(objeto));

const texto = JSON.stringify(objeto);
console.log(texto);
console.log(typeof(texto));

const objeto1 = JSON.parse(texto);
console.log(objeto1);
console.log(typeof(objeto1));


const programacion = {
    tipo: "web,movil,desktop",
    lenguaje: "python,java",
    cursos: ["lenguajeC","c++","c#","php"]
};

console.log(programacion);

const union = Object.assign({},programacion,objeto);
const union1 = {...programacion,...objeto};
console.log(union);
console.log(union1);
*/
const arreglo = [
    {
        id: 1,
        lenguaje: "Java y c#",
        programacion: "Web y Escritorio"
    },
    {
        id: 2,
        lenguaje: "JPhp y HTML",
        programacion: "Web"
    },
    {
        id: 3,
        lenguaje: "Visual y Python",
        programacion: "Web y Escritorio"
    },
    {
        id: 4,
        lenguaje: "Java y c#",
        programacion: "Movil"
    }
];

const titulo = arreglo.map(post =>post.id);
console.log(titulo);

//const result = arreglo.find(post => post.lenguaje == "Visual y Python");
//console.log(result);


//map

    const array1 = [1,2,3,4,5,6,7];
    const arrayr = array1.map(element => element + 15);
    console.log(arrayr);

    const numeros = [2,4,6,8,10,12,14];
    const pares = numeros.some(element => element >4);
    console.log(pares);


    const letras = ["arbol","andres","animal","Arroz","ancia","antonio","arreglo","carro","bus","zapato","mamá","mama"];
    const orden = letras.sort();
    console.log(orden);

    const numeross = [200,22,33,56,34,90,110,11,1,2,3,4,6,9,11];
    const ordenn = numeross.sort((a,b) => b-a);
    console.log(ordenn);
   
    const lisnum = [1,2,3,4,5,6,7];
    console.log(lisnum.includes(9));


    const letras1 = ["arbol","andres","animal","Arroz","ancia","antonio","arreglo","carro","bus","zapato","mamá","mama"];
    console.log(letras1.join(" - "));

    const arr = [1,5,4];
    const suma = arr.reduce((acum,res) => acum+res);

    console.log(suma);