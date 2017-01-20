/**
 * Created by erikmiller on 1/14/17.
 */

import React, {Component} from 'react';
import mapImage from '../../img/Simple_world_map.svg.png';
import PinList from './PinList';

class Map extends Component{

    constructor(props){
        super(props);
        this.state = {
            mapWidth: 2000,
            mapHeight: 1075,
        }

        let scaleFactor = 0;

        if(window.innerWidth >= 1024)
            scaleFactor = (window.innerWidth * 0.8) / this.state.mapWidth;
        else
            scaleFactor = (window.innerWidth) / this.state.mapWidth;

        this.state.scaleFactor = scaleFactor;
    }

    render(){
        return(
            <div id="Map">
                <PinList
                    width={this.state.mapWidth}
                    height={this.state.mapHeight}
                    updateInfo={this.props.updateInfo}
                    scaleFactor={this.state.scaleFactor} />

                <img src={mapImage} role="presentation" />
            </div>
        );
    }
}

export default Map;
