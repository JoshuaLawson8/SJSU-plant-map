import React from 'react';
import  { MapInteractionCSS} from 'react-map-interaction';
import map from './/map.jpg'
import Plants from './Plants';
import './/Map.css'

const Map = ({plants, setPlants}) => {
    return (
        <MapInteractionCSS>
            <h1>SJSU Plant Map!</h1>
            <h2>Built by Josh with support from Amy</h2>
            <div id="container">
                <img src={map} alt=''/>
                <Plants plants={plants} setPlants={setPlants}/>
            </div>
        </MapInteractionCSS>
    );
};

export default Map;