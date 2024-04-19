import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:5000/api/clientes/";

const ModificarCliente = () => {
    const { id } = useParams(); // Obtener el ID del cliente de los parámetros de la URL
    const navigate = useNavigate();

    const [cliente, setCliente] = useState({
        nombres: "",
        apellidos: "",
        documento: "",
        correo: "",
        telefono: "",
        direccion: "",
    });

    useEffect(() => {
        // Función para obtener los datos del cliente y establecerlos en el estado
        const obtenerCliente = async () => {
            try {
                const response = await axios.get(`${URL}${id}`);
                setCliente(response.data);
            } catch (error) {
                console.error("Error al obtener datos del cliente:", error);
            }
        };

        obtenerCliente(); // Llamar a la función cuando el componente se monta
    }, [id]);

    const handleChange = (e) => {
        // Función para manejar cambios en los campos del formulario
        const { name, value } = e.target;
        setCliente((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${URL}${id}`, cliente);
            navigate("/clientes"); // Redirigir a la lista de clientes después de la modificación
        } catch (error) {
            console.error("Error al modificar el cliente:", error);
        }
    };

    return (
        <div className="container contenedor mx-auto" style={{ maxWidth: "800px" }}>
            <h3 className="text-center">Modificar Cliente</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Nombres</label>
                            <input
                                name="nombres"
                                value={cliente.nombres}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Ingrese los nombres"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Apellidos</label>
                            <input
                                name="apellidos"
                                value={cliente.apellidos}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Ingrese los apellidos"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Documento</label>
                            <input
                                name="documento"
                                value={cliente.documento}
                                onChange={handleChange}
                                type="number"
                                className="form-control"
                                placeholder="Ingrese el número de documento"
                                required
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Correo</label>
                            <input
                                name="correo"
                                value={cliente.correo}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Ingrese el correo electrónico"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input
                                name="telefono"
                                value={cliente.telefono}
                                onChange={handleChange}
                                type="number"
                                className="form-control"
                                placeholder="Ingrese el número de teléfono"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input
                                name="direccion"
                                value={cliente.direccion}
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Ingrese la dirección"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12 text-center">
                        <button type="button" onClick={() => navigate("/clientes")} className="btn btn-secondary me-2">
                            Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Guardar Cambios
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ModificarCliente;
