import React from "react";


export function PersonaP (props) {
    console.log(props)
    return (
      <div className="persona" style={{backgroundColor:props.color}}>
        <h3>Id: {props.id}</h3>
        <h3>Nombre: {props.nombre}</h3>
        <p>Edad: {props.edad}</p>
        <p>Correo: {props.correo}</p>
      </div>
    )
};