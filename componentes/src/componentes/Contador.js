import React, {useState} from "react";
export const Contador = () => {
    const [numero, setNumero] = useState(0);

    const sumar = () => {
        setNumero(numero + 1);
    }
    return (
        <div>
            <h1>Metodo uno</h1>
            <h2>{numero}</h2>
            <button onClick={sumar}>Sumar</button>
            &nbsp;
            <button onClick={() => setNumero(numero - 1)}>Restar</button>
            <p>
                <br></br>
            </p>
        </div>
    )
};



export function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Metodo dos</h1>
        <h2>You clicked {count} times</h2>
        <p>
            <button onClick={() => setCount(count + 1)}>Sumar
            </button>
            &nbsp;
            <button onClick={() => setCount(count - 1)}> Restar
            </button>
        </p>
        
    </div>
  );
}

