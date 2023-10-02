import React from "react";

export default class Boton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { titulo, image, onClick } = this.props;

        return(
            <span className="Botoncito" onClick={() => onClick()}>
                {titulo}
                <img src={image}/>
            </span>
        )
    }
}