import React from 'react';
import PropTypes from "prop-types";

import GridInputs from './GridInputs';

const Options = ({ x, y, onDimensionsChange }) => (
  <div>
    <h4>Please choose the dimensions of your grid:</h4>
    <GridInputs
      x={x}
      y={y}
      onDimensionsChange={onDimensionsChange}
    />
  </div>
);

Options.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onDimensionsChange: PropTypes.func.isRequired,
}

export default Options;
