import React from "react";
import PacientCard from "./PacientCard";

import axios from 'axios';


const pacientes = ["Paciente 1", "Paciente 2", "Paciente 3"];

export default class Listado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pacientes:[]
        };
    }

    getPax(){
        axios.get('http://192.168.0.98:3000/pacientes')
        .then(function (response) {
        // manejar respuesta exitosa
        this.setState({pacientes:response.data.pacientes})
        console.log(response);
        })
        .catch(function (error) {
        // manejar error
        console.log(error);
        })
    }

    render() {

        const { titulo } = this.props;


        return(
            <div className="Listado">

                <div className="listTitle">
                    <h2>Listado de {titulo}</h2>
                </div>
                <div className="listCards">
                    {this.state.pacientes.map((paciente, index) => {
                        return(
                            <PacientCard datos={paciente} key={index}/>
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}