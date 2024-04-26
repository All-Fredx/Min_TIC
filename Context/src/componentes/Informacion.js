import React from "react";
import UseUser from "../Hooks/UseUser"

export default function Informacion (){
    const {nombre,edad, genero} = UseUser();
    
    return (
        <div>
            <h1>Datos del usuario</h1>
            <p>Nombre: {nombre} </p>
            <p>Edad: {edad} </p>
            <p>Genero: {genero} </p>
        </div>
    )
}
