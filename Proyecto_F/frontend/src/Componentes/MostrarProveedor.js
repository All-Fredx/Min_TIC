import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import "./Table.css";

const URL = "http://localhost:5000/api/proveedores/";

const MostrarProveedor = () => {
    const [clientes, setProveedor] = useState([])
    useEffect(() => {
        getProveedores();
    },[]);

    const getProveedores = async () => {
        const  datos = await axios.get(URL)
        setProveedor(datos.data);
    };

    const eliminarProveedor = async (id) => {
        await axios.delete(`${URL}${id}`);
        getProveedores();
        //eslint-disable-next-line
    };
    
    return(
        <div>
            <Menu hideProveedores={true}/>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to = "agregar/" className="btn btn-primary mt-2 mb-2 "><i className="fa-solid fa-user-plus"></i>
                        </Link>
                        <table className="table">
                            <thead className="tablethebg">
                                <tr>
                                    <th>Razon Social</th>
                                    <th>NIT</th>
                                    <th>Correo</th>
                                    <th>Telefono</th>
                                    <th>Direccion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map( (proveedor, index) => (
                                    <tr key = {index}>
                                        <td>{proveedor.razonSocial}</td>
                                        <td>{proveedor.NIT}</td>
                                        <td>{proveedor.correo}</td>
                                        <td>{proveedor.telefono}</td>
                                        <td>{proveedor.direccion}</td>
                                        <td id="botones_td">
                                            <Link to={`editar/${proveedor._id}`}className="btn btn-success mt-2 mb-2 me-2"><i className="fa-solid fa-file-pen"></i>
                                            </Link>
                                            <button onClick={() => eliminarProveedor(proveedor._id)}className="btn btn-danger mt-2 mb-2"><i className="fa-solid fa-trash-can"></i></button>
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


export default MostrarProveedor;