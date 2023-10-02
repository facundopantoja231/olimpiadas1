import React from "react";
import CallCard from "./CallCard"

import Modal from "./Modal";

export default class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    modificar(id) {
        this.setState({showModal: !this.state.showModal})
    }

    render() {

        

        const { titulo } = this.props;

        return(
            <div className="Registro">
                {this.state.showModal &&
                    <Modal
                        salir={() => this.setState({showModal: !this.state.showModal})}
                    >
                        <input />
                    </Modal>
                }
                <div className="regTitle">
                    <h2>Registro de {titulo}</h2>
                </div>

                <div className="regCards">
                    <CallCard modificar={(id) => this.modificar(id)}/>
                    <CallCard />
                    <CallCard />
                    <CallCard />
                </div>
            </div>
        )
    }
}