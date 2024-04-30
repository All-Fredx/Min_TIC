const programador = [
    {
        nombre: "N1",
        apellido: "A1",
        edad: "E1",
        correo: "correo1@dominio.com",
        area: "Ar1"
    },
    {
        nombre: "N2",
        apellido: "A2",
        edad: "E2",
        correo: "correo2@dominio.com",
        area: "Ar2"
    },
    {
        nombre: "N3",
        apellido: "A3",
        edad: "E3",
        correo: "correo3@dominio.com",
        area: "Ar3"
    },
    {
        nombre: "N4",
        apellido: "A4",
        edad: "E4",
        correo: "correo4@dominio.com",
        area: "Ar4"
    },
    {
        nombre: "N5",
        apellido: "A5",
        edad: "E5",
        correo: "correo5@dominio.com",
        area: "Ar5"
    },
];

/*
// For
for (let i = 0; i < programador.length; i++) {
    console.log(programador[i])
};

// ForEach
programador.forEach(function(programadorActual,index) {
    console.log(index)
    console.log(programadorActual)
});

//Flecha
programador.forEach((programadorActual) => console.log(programadorActual));

*/
//Recorrer y guardar
const nuevoProgramadorE = [];

programador.forEach((programadorActual) => {
  nuevoProgramadorE.push("nombre: " + programadorActual.nombre + " apellido: " +programadorActual.apellido + " area: " +programadorActual.area);
});
console.log(nuevoProgramadorE);

const programadormap = programador.map(post => `${post.nombre} ${post.area}`);
    //return post.nombre + " "+ post.area;;
console.log(programadormap);

const programadormap1 = programador.map(pro => {
    return {
        ...pro,
        area:"R3"
    };
});
console.log(programadormap1);
console.log(programador);

