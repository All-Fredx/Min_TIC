import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import "./Table.css";

const URL = "http://localhost:5000/api/clientes/";

const MostrarCliente = () => {
    const [clientes, setCliente] = useState([]);
    useEffect(() => {
        getClientes();
    },[]);

    const getClientes = async () => {
        const  datos = await axios.get(URL)
        setCliente(datos.data);
    };

    const eliminarCliente = async (id) => {
        await axios.delete(`${URL}${id}`);
        getClientes();
        //eslint-disable-next-line
    };
    
    return(
        <div>
            <Menu hideClientes={true}/>
            <div className="container">
                
                <div className="row">
                    <div className="col">
                        <Link to = "agregar/" className="btn btn-primary mt-2 mb-2"><i className="fa-solid fa-user-plus"></i>
                        </Link>
                        <table className="table">
                            <thead className="tablethebg">
                                <tr>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Documento</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Direccion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map( (cliente, index) => (
                                    <tr key = {index}>
                                        <td>{cliente.nombres}</td>
                                        <td>{cliente.apellidos}</td>
                                        <td>{cliente.documento}</td>
                                        <td>{cliente.correo}</td>
                                        <td>{cliente.telefono}</td>
                                        <td>{cliente.direccion}</td>
                                        <td id="botones_td">
                                            <Link to={`editar/${cliente._id}`}className="btn btn-success mt-2 mb-2 me-2"><i className="fa-solid fa-file-pen"></i>
                                            </Link>
                                            <button onClick={() => eliminarCliente(cliente._id)}className="btn btn-danger mt-2 mb-2"><i className="fa-solid fa-trash-can"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>


    )
    
};


export default MostrarCliente;