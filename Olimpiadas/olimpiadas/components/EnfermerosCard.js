import React from "react";
import Boton from "./Boton";
import Profile from "../images/profile-user.png";
import Delete from "../images/bin.png";
import Edit from "../images/pencil.png";
import View from "../images/eye.png";

export default class EnfermerosCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { datos } = this.props;

        return(
            <div className="CardTwo">
                <img src={Profile}/>
                <h2>{datos}</h2>

                <div className="actions2">
                    <Boton image={Edit}/>
                    <Boton image={View}/>
                    <Boton image={Delete}/>
                </div>
            </div>
        )
    }
}