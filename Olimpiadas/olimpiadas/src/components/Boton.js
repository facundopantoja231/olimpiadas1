import React from "react";

export default class Boton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { titulo, image } = this.props;

        return(
            <div className="Botoncito">
                {titulo}
                <img src={image}/>
            </div>
        )
    }
}