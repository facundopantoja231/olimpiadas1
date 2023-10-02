import React from "react";
import CallCard from "./CallCard";
import EnfermerosCard from "./EnfermerosCard";
export default class Enfermeros extends React.Component{
    constructor(props){
        super(props);
        this.state={};

    }
    render(){
        const { titulo } = this.props;

        return(
            <div className="Enfermeros">
                <div className="regTitle">
                    <h2>Registro de {titulo}</h2>
                </div>

                <div className="regCards2">
                    <EnfermerosCard />
                    <EnfermerosCard />
                    <EnfermerosCard />
                </div>
            </div>
        )
    }
}