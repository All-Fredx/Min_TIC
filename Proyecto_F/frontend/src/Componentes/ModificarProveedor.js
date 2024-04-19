import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:5000/api/proveedores/";

const ModificarProveedor = () => {
    const { id } = useParams(); // Obtener el ID del proveedor de los parámetros de la URL
    const navigate = useNavigate();

    const [proveedor, setProveedor] = useState({
        razonSocial: "",
        NIT: "",
        correo: "",
        telefono: "",
        direccion: "",
    });

    useEffect(() => {
        // Función para obtener los datos del proveedor y establecerlos en el estado
        const obtenerProveedor = async () => {
            try {
                const response = await axios.get(`${URL}${id}`);
                setProveedor(response.data);
            } catch (error) {
                console.error("Error al obtener datos del proveedor:", error);
            }
        };

        obtenerProveedor(); // Llamar a la función cuando el componente se monta
    }, [id]);

    const handleChange = (e) => {
        // Función para manejar cambios en los campos del formulario
        const { name, value } = e.target;
        setProveedor((prevProveedor) => ({
            ...prevProveedor,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${URL}${id}`, proveedor);
            navigate("/proveedores"); // Redirigir a la lista de proveedores después de la modificación
        } catch (error) {
            console.error("Error al modificar el proveedor:", error);
        }
    };

    const irAProveedores = () => {
        navigate("/proveedores");
    };

    return (
        <div className="container contenedor mx-auto" style={{ maxWidth: "600px" }}>
            <h3 className="text-center">Modificar Proveedor</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Razon Social</label>
                    <input
                        name="razonSocial"
                        value={proveedor.razonSocial}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese la razón social"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">NIT</label>
                    <input
                        name="NIT"
                        value={proveedor.NIT}
                        onChange={handleChange}
                        type="number"
                        className="form-control"
                        placeholder="Ingrese el NIT"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                        name="correo"
                        value={proveedor.correo}
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
                        value={proveedor.telefono}
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
                        value={proveedor.direccion}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        placeholder="Ingrese la dirección"
                        required
                    />
                </div>
                <div className="text-center">
                    <button type="button" onClick={irAProveedores} className="btn btn-secondary me-2">
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Guardar Cambios
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModificarProveedor;
