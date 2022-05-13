import React from 'react';
import Plant from './Plant';

const Plants = ({plants, setPlants}) => {

    return (
        <>
            {plants.map((plant) =>
             (<Plant key = {plant.id} color={plant.color} height={plant.height} shape = {plant.shape}/>))}
        </>
    );
};

export default Plants;



