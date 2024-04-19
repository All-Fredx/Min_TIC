import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Componentes/Menu';
import MostrarCliente from './Componentes/MostrarCliente';
import MostrarProveedor from './Componentes/MostrarProveedor';
import AgregarCliente from './Componentes/AgregarCliente';
import AgregarProveedor from './Componentes/AgregarProveedor';
import ModificarCliente from './Componentes/ModificarCliente';
import ModificarProveedor from './Componentes/ModificarProveedor';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Menu hideInicio={true} />} ></Route>
          <Route path='/clientes' element ={<MostrarCliente/>} ></Route>
          <Route path='/proveedores' element ={<MostrarProveedor/>} ></Route>
          <Route path='/clientes/agregar' element={<AgregarCliente/>}></Route>
          <Route path='/proveedores/agregar' element={<AgregarProveedor/>}></Route>
          <Route path='/clientes/editar/:id' element={<ModificarCliente/>}></Route>
          <Route path='/proveedores/editar/:id' element={<ModificarProveedor/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
