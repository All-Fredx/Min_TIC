import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    <div className="App app-container contenedor-max">
      
      <BrowserRouter>
        <Routes className='contenedor-max'>
          <Route path='/' element ={<Menu hideInicio={true} />} ></Route>
          <Route path='/clientes' element ={<MostrarCliente/>} ></Route>
          <Route path='/proveedores' element ={<MostrarProveedor/>} ></Route>
          <Route path='/clientes/agregar' element={<><Menu hideProveedores={true} /><AgregarCliente /></>}></Route>
          <Route path='/proveedores/agregar' element={<><Menu hideClientes={true} /><AgregarProveedor/></>}></Route>
          <Route path='/clientes/editar/:id' element={<><Menu hideProveedores={true} /><ModificarCliente/></>}></Route>
          <Route path='/proveedores/editar/:id' element={<><Menu hideClientes={true} /><ModificarProveedor/></>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
