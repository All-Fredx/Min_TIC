import React from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Navbar = () => {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    swal({
      title: "Cierre de sesión exitoso",
      text: "¡Hasta Pronto!",
      icon: "success",
      button: false,
      timer: 3000,
    });
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-dark">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link
            to={"#"}
            className="nav-link"
            data-widget="pushmenu"
            role="button"
          >
            <i className="fas fa-bars text-light" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <strong
            onClick={cerrarSesion}
            className="nav-link text-light"
            style={{ cursor: "pointer" }}
          >
            Cerrar Sesión
          </strong>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item">
          <Link
            to={"#"}
            className="nav-link"
            data-widget="fullscreen"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt text-light" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
