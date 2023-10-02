import React from "react";
import Input from "./Input";
import Boton from "./Boton";

export default class Zonasform extends React.Component{

    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        return(
            <form className="valid">
            <h1>Zona</h1> 
             <Input titulo="Descripcion"/>
             <Input titulo="Zona"/>
             <Boton titulo="Registrar" />
             </form>
        )
    }
       
    
}