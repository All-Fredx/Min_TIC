import React from "react";
import "./VistaLenguaje.css";


function VistaLenaguaje({len}){
    return(
        <div className="lenVista">
            <img src={len.image} alt={len.image + "imagen"}/>
            <h1>{len.nombre} </h1>
            <h2>{len.comentario} </h2>
        </div>
    )
};

export default VistaLenaguaje;