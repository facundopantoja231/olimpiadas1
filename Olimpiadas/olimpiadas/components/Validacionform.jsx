import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Validacionform extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        return(
            <form className="valid">
            <h1>Validacion de usuario</h1> 
             <Input titulo="D.N.I"/>
             <Boton titulo="Verificar" />
             </form>
        )
    }
}
