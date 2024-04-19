import React from "react";
import './Menu.css';

const Menu = ({ hideInicio, hideClientes, hideProveedores }) => {
  return (
    <div className="containerMenu">
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">  <a href="/" className="d-flex align-item-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">All_Fred'x</span>
        </a>
        <ul className="nav nav-pills">
            {hideInicio ? null :(
                <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
            )}
            {hideClientes ? null : (
                <li className="nav-item"> <a href="/clientes" className="nav-link">Clientes</a></li>
            )}
            {hideProveedores ? null :(
            <li className="nav-item"><a href="/proveedores" className="nav-link">Proveedores</a></li>
            )}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
