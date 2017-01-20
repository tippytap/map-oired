/**
 * Created by erikmiller on 1/12/17.
 */
import React, {Component} from 'react';
import pinImage from "../../img/pin.svg";

class Pin extends Component{

    constructor(props){
        super(props);
        this.state = {
            x: props.x * props.scale,
            y: props.y * props.scale,
            region: props.region,
            projects: {
                "past": props.pastProjects
            }
        }
    }

    setPosition(){
        return {
            top: this.state.y + "px",
            left: this.state.x + "px"
        };
    }

    onClick(){
        this.props.updateInfo(this.state.region, this.state.projects);
    }

    render(){
        return(
            <li className="Pin" style={this.setPosition()} onClick={this.onClick.bind(this)}>
               <img src={pinImage} role="presentation" alt={this.state.projects.title + " pin"} />
            </li>
        );
    }
}

export default Pin;
