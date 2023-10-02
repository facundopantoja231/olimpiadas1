import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Emergenciaform extends React.Component{

    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        return(
            <form className="emergencia">
            <h1>Emergencia</h1> 
             <Input titulo="Paciente"/>
             <Input titulo="Zona" />
             <Input titulo="Tipo-llamado"/>
             <Input titulo="Diagnostico"/>
             <Input titulo="Tratamiento"/>
             <Input titulo="Origen"/>
             <Boton titulo="Ingresar" />

            </form>
            
        )
    }
}