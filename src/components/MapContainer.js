/**
 * Created by erikmiller on 1/12/17.
 */
import React, { Component } from 'react';
import InfoPane from './InfoPane';
import Map from './Map';

class MapContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            infoTitle: "Select a location",
            projects:{
                "past": [],
                "current": []
            }
        };
    }

    updateInformation(region, projects){
        this.setState({
            infoTitle: region,
            projects: projects
        });
    }

    render() {
        return (
            <div id="MapContainer">
                <InfoPane region={this.state.infoTitle} projects={this.state.projects} />
                <Map updateInfo={this.updateInformation.bind(this)} />
            </div>
        );
    }
}

export default MapContainer;
