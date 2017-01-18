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
        let scaleFactor = (window.innerWidth * 0.80) / this.state.mapWidth;
        this.state.scaleFactor = scaleFactor;
    }

    setStyles(){
        return {
            width: parseInt(window.innerWidth * 0.8, 10),
            height: parseInt(window.innerHeight, 10)
        }
    }

    render(){
        return(
            <div id="Map" style={this.setStyles()}>
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
