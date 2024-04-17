import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Lenguajes from './datos/Lenguajes';
//import "./App.css";
import Card from './Componentes/Card.jsx';
import VistaLenaguaje from './vistas/VistaLenguaje.jsx';

const router =  [
  {
    path:"/",
    element:<App />,
  },
];

Lenguajes.forEach((len) => {
  router.push({
    path:len.nombre,
    element:
    <div>
      <VistaLenaguaje len={len} />
      {/*<Card 
      titulo={len.nombre}
      description={len.comentario}
      imagen={len.image} /> */}
    </div>
  });
});

const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
