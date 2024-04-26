import "./App.css";
import LoginForm from './Componentes/LoginForm';
import RegisterForm from "./Componentes/RegisterForm";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="bg-dark min-vh-100">
      <div className="p-4 h-100">
        <div className="row aling-items-center h-100">
          <div className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4 text-white">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LoginForm />}></Route>
                <Route path="/register" element={<RegisterForm />}></Route>
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
