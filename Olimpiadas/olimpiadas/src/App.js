import logo from './logo.svg';
import './App.css';

import Header from "./components/Header"
import Listado from "./components/Listado"
import Registro from "./components/Registro"
import Input from "./components/Input"

function App() {
  return (
    <div className="App">
      
      <Header />

      <div className="mainContainer">
        <Registro titulo="llamadas"/>
        <Listado titulo="pacientes"/>
      </div>
      
    </div>
  );
}

export default App;
