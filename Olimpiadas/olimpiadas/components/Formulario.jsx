import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Formulario extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        return(
            <form className="formulario">
            <h1>Registro de enfermeros</h1> 
             <Input titulo="nombre"/>
             <Input titulo="apellido" />
             <Input titulo="especialidad"/>
             <Input titulo="D.N.I"/>
             <Input titulo="Telefono"/>
             <Boton titulo="guardar" />

            </form>
            
        )
    }
}