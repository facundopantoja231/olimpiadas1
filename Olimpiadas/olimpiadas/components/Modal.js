import React from "react";
import Boton from "./Boton";

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="modal">
                <div className="contenido">
                    {this.props.children}
                    <Boton titulo="Salir" onClick={() => this.props.salir()}/>
                </div>
            </div>
        )
    }
}