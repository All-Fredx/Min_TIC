import logo from './logo.svg';
import './App.css';
import LoginButton from './loguearse';
import LogoutButton from './logout';
import Profile from './perfil';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>*/}
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
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
    </header>
export default App;
