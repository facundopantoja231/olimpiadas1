import React from "react";
export default class Estadisticas extends React.Component{
    constructor(props){
        super(props)
        this.state={};
    }
render(){
    const { titulo } = this.props;


        return(
            <div className="Estadisticas">

                <div className="listTitle">
                    <h2>Estadisticas</h2>
                </div>
                <div className="listCards">
                    
                    
                </div>
            </div>
        )
    }
}
