
import './App.css';
import UserContext from './Context/UserContext';
import Informacion from './componentes/Informacion';

function App() {
  const userData = {
    nombre:"Alfred",
    edad:20,
    genero:"M",
  }
  return (
    <UserContext.Provider value={userData}>
    <div className='App'>
      <h1>User Context</h1>
      <Informacion></Informacion>
    </div>
    </UserContext.Provider>
  );
};



export default App;