import React from 'react';
import PropTypes from 'prop-types';

import './CellComponent.css';
import CellModel from '../../models/CellModel';

const CellComponent = ({ cell, onCellClicked }) => (
  <td
    className={cell.isAlive ? 'alive' : 'dead'}
    aria-hidden="true"
    onClick={() => onCellClicked(cell)}
  />
);

CellComponent.propTypes = {
  cell: CellModel.shape.isRequired,
  onCellClicked: PropTypes.func.isRequired,
};

export default CellComponent;
