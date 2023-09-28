import React from "react";
import Logo from "../images/logo.png";
import "../style.css";

import Boton from "./Boton";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="Header">

                <img src={Logo} />

                <div className="headerButtons">
                    <Boton titulo="Log out"/>
                </div>
            </div>
        );
    }
}