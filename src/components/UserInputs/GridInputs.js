import React from 'react';
import PropTypes from 'prop-types';

const GridInputs = ({ x, y, onDimensionsChange }) => {
  const genericSync = (event) => {
    onDimensionsChange({
      x: event.target.name === 'x' ? parseInt(event.target.value, 10) : x,
      y: event.target.name === 'y' ? parseInt(event.target.value, 10) : y,
    });
  };

  return (
    <div>
      <label htmlFor="y">Height:
        <input
          type="number"
          value={y}
          id="y"
          name="y"
          onChange={genericSync}
          required
        />
      </label>
      <div />
      <label htmlFor="x">Width:
        <input
          type="number"
          value={x}
          id="x"
          name="x"
          onChange={genericSync}
          required
        />
      </label>
    </div>
  );
};

GridInputs.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onDimensionsChange: PropTypes.func.isRequired,
};

export default GridInputs;
