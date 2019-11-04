import React from 'react';
import PropTypes from "prop-types";
import Options from './Options';
import Player from '../UserInputs/Player';

const Controller = (props) => (
    <div>
        <Options 
            x={props.x} 
            y={props.y} 
            onDimensionsChange={props.onDimensionsChange} 
        />
        <Player 
            onEvolveClick={props.onEvolveClick} 
            steps={props.steps} 
            onStepsUpdate={props.onStepsUpdate}
        />
    </div>
);

Controller.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    onDimensionsChange: PropTypes.func.isRequired,
    onEvolveClick: PropTypes.func.isRequired,
    onStepsUpdate: PropTypes.func.isRequired,
}

export default Controller;
