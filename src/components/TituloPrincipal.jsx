import React from "react";


// const TituloPrincipal = (props) => {
//     //logica

//   return (
//     //maquetado
//     <>
//       <h1>Primer App</h1>
//       <h2>comision: {props.comision}</h2>
//       <h3>Mes: {props.mes}</h3>
//     </>
//   );
// };

// Destructurar el objeto
const TituloPrincipal = ({comision, mes}) => {
    //logica

  return (
    //maquetado
    <>
      <h1>Primer App</h1>
      <h2>comision: {comision}</h2>
      <h3>Mes: {mes}</h3>
    </>
  );
};
export default TituloPrincipal;
