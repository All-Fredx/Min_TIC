import React from "react";

export function ProductoP (props) {
    console.log(props)
    return (
      <div className="producto" style={{backgroundColor:props.color}}>
        <h3>Nombre: {props.nombre}</h3>
        <p>Proveedor: {props.proveedor}</p>
        <p>Fecha Compra: {props.fechaC}</p>
        <p>Precio: ${props.precio}</p>
      </div>
    )
  };