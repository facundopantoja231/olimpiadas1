import React from "react";
import PacientCard from "./PacientCard";

export default class Listado extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { titulo } = this.props;

        return(
            <div className="Listado">

                <div className="listTitle">
                    <h2>Listado de {titulo}</h2>
                </div>
                <div className="listCards">
                    <PacientCard />
                    <PacientCard />
                    <PacientCard />
                    <PacientCard />
                    <PacientCard />
                    <PacientCard />
                    <PacientCard />
                    <PacientCard />
                    <PacientCard />
                </div>
            </div>
        )
    }
}