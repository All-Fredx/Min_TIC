import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/clientes/";

const AgregarCliente = () => {
  // ... (código existente para el estado y las funciones)

  return (
    <div className="container contenedor">
      <h3>Formulario Guardar Cliente</h3>
      <div className="columnas">
        <form onSubmit={guardarCliente}>
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          <div className="mb-3">
            <label className="form-label">Nombres (Obligatorio)</label>
            <input
              value={nombres}
              onChange={(e) => setNombres(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellidos (Obligatorio)</label>
            <input
              value={apellidos}
              onChange={(e) => setApellidos(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Documento (Obligatorio)</label>
            <input
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              type="number"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo (Obligatorio)</label>
            <input
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono (Obligatorio)</label>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              type="number"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección (Obligatorio)</label>
            <input
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgregarCliente;
