import React from 'react';
import PropTypes from "prop-types";

const Player = ({ steps, onStepsUpdate, onEvolveClick }) => {

  const updateValue = event => {
    onStepsUpdate(parseInt(event.target.value));
  }

  return (
    <div>
      <div>  
        <label htmlFor="steps">Please choose the number of evolution steps:</label>
        <div></div> 
        <input
          type="number"
          value={steps}
          id="steps"
          name="steps"
          min="1"
          onChange={updateValue}
        />
      </div>
        <button onClick={onEvolveClick}>Evolve</button>
    </div>
  );
}

Player.propTypes = {
  steps: PropTypes.number.isRequired,
  onEvolveClick: PropTypes.func.isRequired,
  onStepsUpdate: PropTypes.func.isRequired,
}

export default Player;
