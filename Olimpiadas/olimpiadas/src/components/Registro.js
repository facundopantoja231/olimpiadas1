import React from "react";
import CallCard from "./CallCard"

export default class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { titulo } = this.props;

        return(
            <div className="Registro">
                <div className="regTitle">
                    <h2>Registro de {titulo}</h2>
                </div>

                <div className="regCards">
                    <CallCard />
                    <CallCard />
                    <CallCard />
                    <CallCard />
                </div>
            </div>
        )
    }
}