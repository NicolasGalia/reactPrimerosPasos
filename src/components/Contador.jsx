// import React from 'react'; no es necesario el import
import {useState} from 'react';

const Contador = ({valorInicial})=> {
let [counter, setCounter] = useState(valorInicial);

// const sumar = ()=>{
// //actualizar el state 
// setCounter(counter + 1)
// }

    return (
        <div>
            <h2>Contador</h2>
            <h3>{counter}</h3>
            <button onClick={()=> setCounter(counter + 1)}>+1</button>
            <button onClick={()=> setCounter(counter - 1)}>-1</button>
            <button onClick={()=> setCounter(valorInicial)}>Reset</button>
        </div>
    );
};

export default Contador;