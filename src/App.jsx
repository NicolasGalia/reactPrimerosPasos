import TituloPrincipal from './components/TituloPrincipal';
import HolaMundo from './components/HolaMundo';
import Contador from './components/Contador';
import "./app.css"

function App() {
let mes = 9

  return (
    <div>
      <TituloPrincipal comision="c7i" mes = {mes}></TituloPrincipal>
      <HolaMundo></HolaMundo>
      <hr></hr>
      <Contador></Contador>
    </div>
  );
}

export default App;
