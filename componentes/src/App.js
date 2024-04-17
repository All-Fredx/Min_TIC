
import './App.css';
//import {BrowserRouter as Router} from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuC from './componentes/MenuC';
//import { PersonaP } from './componentes/PersonaP';
//import { ProductoP } from './componentes/ProductoP';
import { Contador, Example } from './componentes/Contador';
import { Example2 } from './componentes/Contador2';
//import FriendStatusWithCounter from './componentes/Ejemplo';
import Empleado from './componentes/Empleado';
import Estado from './componentes/Estado';

function App() {
  /*const nombre = <h1>Alfred Rubiano</h1>;
  const correo = <p>ar@dominio.com</p>;
  const telefono = <p>3154345766</p>;
  const edad = <p>23</p>;
  const empleado = <div>{nombre} {edad} {correo} {telefono}</div>; */
  return (
    <div className='App'>
      <MenuC/>
      <Estado/>
      <Contador/>
      <Example/>
      <Example2/>
      <Empleado/>
        {/*<MenuC/>
        
        <PersonaP nombre="Fadio Durango" edad = "25" correo = "correo@dominio.com" color="Blue"/>
        <PersonaP nombre="Fadio Durango" edad = "25" correo = "correo@dominio.com" color="Red"/>
        <PersonaP nombre="Fadio Durango" edad = "25" correo = "correo@dominio.com" color="Green"/>
        <PersonaP nombre="Fadio Durango" edad = "25" correo = "correo@dominio.com" color="Gray"/>
        <PersonaP nombre="Fadio Durango" edad = "25" correo = "correo@dominio.com" />
        <ProductoP nombre="Glacitas" proveedor="Garden" fechaC="25-04-24" precio="200" color="Purple"/>
      
      {empleado}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>*/}
    </div>
    
  );
};



export default App;