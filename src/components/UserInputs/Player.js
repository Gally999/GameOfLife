import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ steps, onStepsUpdate, onEvolveClick }) => {
  const updateValue = (event) => {
    onStepsUpdate(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div>
        <label htmlFor="steps">Please choose the number of evolution steps:
          <div />
          <input
            type="number"
            value={steps}
            id="steps"
            name="steps"
            min={1}
            onChange={updateValue}
          />
        </label>
      </div>
      <button
        type="button"
        onClick={onEvolveClick}
      >
        Evolve
      </button>
    </div>
  );
};

Player.propTypes = {
  steps: PropTypes.number.isRequired,
  onEvolveClick: PropTypes.func.isRequired,
  onStepsUpdate: PropTypes.func.isRequired,
};

export default Player;
