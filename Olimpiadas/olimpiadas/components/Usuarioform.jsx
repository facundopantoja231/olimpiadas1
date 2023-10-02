import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Usuarioform extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    render(){
        return(
            <form className="formulario">
            <h1>Registro de usuarios</h1> 
             <Input titulo="Tipo"/>
             <Input titulo="User name" />
             <Input titulo="password"/>
             <Input titulo="estado"/>
             <Boton titulo="Registro" />

            </form>
            
        )
    }
}