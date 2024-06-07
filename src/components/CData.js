import { Component } from "react";
import "./Cstyles.css";

class CData extends Component {
    render(){
        return(
            <div className = {this.props.className}>
                <div className = "fp-text">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default CData;