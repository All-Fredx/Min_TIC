import { useState, useEffect } from "react";

const Estado = () => {
    const [msg, setMsg] = useState("");
    const sTexto = (e) => {
        setMsg(e.target.value)
    };
    useEffect(() =>{

        console.log("Bienvenidos a la clase, el componenete esta montado");
        return () => {
            console.log("Terminada la clase, el componenete fue desmontado")
        }
    },[]);

    useEffect(() => {
        console.log("El texto ingreso fue modificado")
    }, [msg]);
    return (
        <div>
            <input type="text" onChange={sTexto}/>
            <p>{msg}</p>
        </div>
    );
};

export default Estado;