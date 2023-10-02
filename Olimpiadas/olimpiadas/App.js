import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"
import Listado from "./components/Listado"
import Registro from "./components/Registro"
import Input from "./components/Input"
import Formulario from './components/Formulario';
import Formulario2 from './components/Formulario2';
import Validacionform from './components/Validacionform';
import Zonasform from './components/Zonasform';
import Emergenciaform from './components/Emergenciaform';
import Usuarioform from './components/Usuarioform';
import Enfermeros from './components/Enfermeros';
import Estadisticas from './components/Estadisticas';

function App() {
  return (
    <div className="App">
      
      <Header />

      <div className="mainContainer">
        <Registro titulo="llamadas"/>
        <Listado titulo="pacientes"/>
      </div>  

      <div className="mainContainer2">
        <Enfermeros titulo="enfermeros"/>
        <Estadisticas/>
      </div>
      
      
      {/* <Formulario /> */}

      {/* <Formulario2 /> */}

      {/* <Validacionform /> */}

      {/* <Zonasform /> */}

      {/* <Emergenciaform /> */}

      {/* <Usuarioform /> */}

      {/* <Enfermeros/> */}
    </div>
  );
}

export default App;