import { useState } from "react";
import { PersonaP } from "./PersonaP";

const Empleado = () => {
    const [empleado, setEmpleado] = useState([
        {
            
            
            id: 1,
            nombre:"Julian Diaz",
            edad: 23,
            correo: "correo@dominio.com",
        },
        {
            id: 2,
            nombre:"Julian Diaz",
            edad: 23,
            correo: "correo@dominio.com",
        },
        {
            id: 3,
            nombre:"Julian Diaz",
            edad: 23,
            correo: "correo@dominio.com",
        },
        {
            id: 4,
            nombre:"Julian Diaz",
            edad: 23,
            correo: "correo@dominio.com",
        },
        {
            id: 5,
            nombre:"Julian Diaz",
            edad: 23,
            correo: "correo@dominio.com",
        }





        
    ])

    return (
        <div>
            {empleado.map((personaP) => {
                return (
                    <PersonaP
                    key = {personaP.id}
                    id = {personaP.id}
                    nombre = {personaP.nombre}
                    edad = {personaP.edad}
                    correo = {personaP.correo}
                    />
                )
            })};
            
        </div>
    )
};

export default Empleado;