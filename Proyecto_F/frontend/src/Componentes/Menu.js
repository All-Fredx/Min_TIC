import React from "react";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const isCliente = location.pathname.startsWith("/clientes");
  const isProveedor = location.pathname.startsWith("/proveedores");
  const isClienteR = location.pathname.includes("/clientes/");
  const isProveedorR = location.pathname.includes("/proveedores/");
  const isRoot = location.pathname === "/";

  return (
    <div className="containerMenu">
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="?"
          className="d-flex align-item-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">All_Fred'x</span>
        </a>
        <ul className="nav nav-pills">
        {!isRoot && !isProveedorR && !isClienteR &&(
            <li className="nav-item">
              <a href="/" className="nav-link" activeClassName="active">
                Inicio
              </a>
            </li>
          )}
          {!isCliente && !isProveedorR && (
            <li className="nav-item">
              <a href="/clientes" className="nav-link" activeClassName="active">
                Clientes
              </a>
            </li>
          )}
          {isClienteR && (
            <li className="nav-item">
              <a href="/clientes" className="nav-link" activeClassName="active">
                Clientes
              </a>
            </li>
          )}
          {!isProveedor && !isClienteR && (
            <li className="nav-item">
              <a href="/proveedores" className="nav-link" activeClassName="active">
                Proveedores
              </a>
            </li>
          )}
          {isProveedorR && (
            <li className="nav-item">
              <a href="/proveedores" className="nav-link" activeClassName="active">
                Proveedores
              </a>
            </li>
          )}
          
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

/* Metodo con condicionales */

/*
import React from "react";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  return (
    <div className="containerMenu">
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-item-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">All_Fred'x</span>
        </a>
        <ul className="nav nav-pills">
          {location.pathname.startsWith("/clientes/") ? (
            <li className="nav-item">
              <a href="/clientes" className="nav-link" activeClassName="active">
                Clientes
              </a>
            </li>
          ) : location.pathname.startsWith("/proveedores/") ? (
            <li className="nav-item">
              <a href="/proveedores" className="nav-link" activeClassName="active">
                Proveedores
              </a>
            </li>
          ) : location.pathname !== "/clientes" &&
            location.pathname !== "/proveedores" ? (
            <>
              <li className="nav-item">
                <a href="/clientes" className="nav-link" activeClassName="active">
                  Clientes
                </a>
              </li>
              <li className="nav-item">
                <a href="/proveedores" className="nav-link" activeClassName="active">
                  Proveedores
                </a>
              </li>
            </>
          ) : location.pathname !== "/" && location.pathname === "/clientes" ? (
            <>
              <li className="nav-item">
                <a href="/" className="nav-link" activeClassName="active">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="/proveedores" className="nav-link" activeClassName="active">
                  Proveedores
                </a>
              </li>
            </>
          ) : (
            location.pathname !== "/" &&
            location.pathname === "/proveedores" && (
              <>
                <li className="nav-item">
                  <a href="/" className="nav-link" activeClassName="active">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/clientes" className="nav-link" activeClassName="active">
                    Clientes
                  </a>
                </li>
              </>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;


*/