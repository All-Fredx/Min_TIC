import './App.css';
import {Route, Routes, Outlet } from 'react-router-dom';
import Menu from './Componentes/Menu';
import MostrarCliente from './Componentes/MostrarCliente';
import MostrarProveedor from './Componentes/MostrarProveedor';
import AgregarCliente from './Componentes/AgregarCliente';
import AgregarProveedor from './Componentes/AgregarProveedor';
import ModificarCliente from './Componentes/ModificarCliente';
import ModificarProveedor from './Componentes/ModificarProveedor';
import Footer from './Componentes/Footer';


function App() {
  
  return (
    <div className="App app-container">
        <Menu/>
      <div className="content">
          <Routes >
            <Route path='/clientes' element ={<MostrarCliente/>} ></Route>
            <Route path='/proveedores' element ={<MostrarProveedor/>} ></Route>
            <Route path='/clientes/agregar' element={<><AgregarCliente /></>}></Route>
            <Route path='/proveedores/agregar' element={<><AgregarProveedor/></>}></Route>
            <Route path='/clientes/editar/:id' element={<><ModificarCliente/></>}></Route>
            <Route path='/proveedores/editar/:id' element={<><ModificarProveedor/></>}></Route>
          </Routes>
          <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
