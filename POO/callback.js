function solicitudServidor (consulta, callback){
    setTimeout (function(){
        let respuesta =consulta + "ejecutando";
        callback (respuesta);
    });
}

function obtenerResultados (resultados){
    console.log("Respuesta servidor es: "+resultados);
}

solicitudServidor("El servidor se esta ",obtenerResultados);

function modificar(array, callback){
    array.push("red")
    setTimeout(function(){
        callback()
    },3000)
}
const partes =["conexión","caidas","servidor"];
modificar(partes,function(){
    console.log(`Se modifico el arreglo de ${partes.length} elementos`)
    console.log(partes)
})