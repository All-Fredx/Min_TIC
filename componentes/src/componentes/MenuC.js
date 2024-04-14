import React from "react";

const MenuC = () => {
    return (
        <div>
            <nav class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-item-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-4">Website</span>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link">Inicio</a></li>
                    <li className="nav-item"><a href="/productos" className="nav-link">Productos</a></li>
                    <li className="nav-item"><a href="/clientes" className="nav-link">Clientes</a></li>
                    <li className="nav-item"><a href="/proveedores" className="nav-link">Proveedores</a></li>
                </ul>
            </nav>
            <button type='button' className='btn btn-warning'><i className="fa-solid fa-user"></i></button>
        </div>
    )
}

export default MenuC;



