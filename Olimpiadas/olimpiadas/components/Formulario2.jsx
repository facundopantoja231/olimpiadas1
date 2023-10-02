import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Formulario2 extends React.Component{

    constructor(props){
        super(props);
        this.state ={};
        }


render() {
    return (
        <form className="formulario2">
            <h1>Registro de pacientes</h1> 
             <Input titulo="nombre"/>
             <Input titulo="apellido" />
             <Input titulo="Fecha Nac."/>
             <Input titulo="D.N.I"/>
             <Input titulo="Telefono"/>
             <Boton titulo="guardar" />

            </form>
    )
}
}

