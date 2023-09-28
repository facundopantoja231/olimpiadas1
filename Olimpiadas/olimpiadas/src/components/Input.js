import React from "react";

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const { titulo, type } = this.props;

        return(
            <input type={type} className="Input" placeholder={titulo}/>
        )
    }
}