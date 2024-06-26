import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componentes/Card'
import Lenguajes from './datos/Lenguajes'

function App() {
  const [count, setCount] = useState(0)
  const lenguajesList = Lenguajes.map((l, index)=> {
    return <Card key= {index} titulo={l.nombre} description={l.comentario} imagen={l.image} />
  })
  return (
    <>
    <div className='App'>
      <h1>Momtando Componentes React utilizando Vite</h1>
      <div className='container'>
        {lenguajesList}
      </div>
      
    </div>
    {/* 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    */}
      
    </>
  )
}

export default App
