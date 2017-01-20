/**
 * Created by erikmiller on 1/12/17.
 */
import React, {Component} from 'react';

class InfoPane extends Component{

    constructor(props){
        super(props);
        this.state = {
            region: props.region,
            projects: props.projects
        }
    }

    componentWillReceiveProps(props){
        this.setState({
            projects: props.projects
        });
    }

    render(){
        return(
            <div id="InfoPane" style={{height: window.innerHeight}}>
                <header>
                    <h3>{this.props.region}</h3>
                </header>
                <div id="infoBody">
                    <section>
                        {this.state.projects.past.map(function(project, index){
                            return(
                                <li key={index + "_li"} className="project">
                                    <h6 key={index + "_h5"}>
                                        <a key={index + "_a"} href={project.link} target="_blank">
                                            <span className="text">{project.title}</span>
                                            <span className="icon"></span>
                                        </a>
                                    </h6>
                                    <p>{project.description}</p>
                                </li>
                            );
                        })}
                    </section>
                </div>
            </div>
        );
    }
}

export default InfoPane;
