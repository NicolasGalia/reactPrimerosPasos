// import React from 'react'; no es necesario el import
import {useState} from 'react';

const Contador = () => {
let [counter, setCounter] = useState(9);

const sumar = ()=>{
console.log("desde sumar"
)
}

    return (
        <div>
            <h2>Contador</h2>
            <h3>{counter}</h3>
            <button onClick={sumar}>+1</button>
        </div>
    );
};

export default Contador;