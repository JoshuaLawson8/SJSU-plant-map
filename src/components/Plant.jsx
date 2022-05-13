import React from 'react';
import styled from 'styled-components';

const PlantArea = styled.div`
    position: absolute;
    background-color: ${props => props.color};
    left: 30px;
    top: 758px;
    height: 4px;
    width: 70px;
    opacity: .5;
    shape-outside: ${props => props.shape};
    clip-path: ${props => props.shape};
`

const Plant = ({color, shape}) => {
    console.log(shape)
    return (
       <PlantArea color ={color} shape = {shape}>
       </PlantArea>
    );
};

export default Plant;