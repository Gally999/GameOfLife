import React from 'react';
import PropTypes from 'prop-types';

import './CellComponent.css';
import Cell from '../../models/CellModel';

const CellComponent = ({ cell, onCellClicked }) => (
  <td
    className={cell.isAlive ? 'alive' : 'dead'}
    aria-hidden="true"
    onClick={() => onCellClicked(cell)}
  />
);

CellComponent.propTypes = {
  cell: Cell.shape.isRequired,
  onCellClicked: PropTypes.func.isRequired,
};

export default CellComponent;
