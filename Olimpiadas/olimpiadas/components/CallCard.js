import React from "react";
import Input from "./Input";
import Boton from "./Boton";

import Modify from "../images/check.png"

export default class CallCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="Card">
                <div className="cardInfo">
                <Input titulo="Hola"/>
                <Input titulo="Hola"/>
                <Input titulo="Hola"/>
                </div>

                <Boton image={Modify} onClick={() => this.props.modificar(1)}/>
            </div>
        )
    }
}