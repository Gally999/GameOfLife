import React from 'react';
import PropTypes from "prop-types";

 const GridInputs = props => {

    const genericSync = event => {
        props.onDimensionsChange({
            x: event.target.name === 'x' ? parseInt(event.target.value) : props.x, 
            y: event.target.name === 'y' ? parseInt(event.target.value) : props.y,
        });
    }

    return (
        <div>
            <label for="y">Height: </label>
            <input type="number" value={props.y} id="y" name="y" onChange={genericSync} required/>
            <label for="x">Width: </label>
            <input type="number" value={props.x} id="x" name="x" onChange={genericSync} required/>
        </div>
    );
}

GridInputs.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
}

export default GridInputs;
