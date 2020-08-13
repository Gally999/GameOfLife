import React from 'react';

import './CellComponent.css';
import CellModel from '../../models/CellModel';

const CellComponent = ({ cell, onCellClicked }) => (
  <td
    className={cell.isAlive ? 'alive' : 'dead'} 
    onClick={() => onCellClicked(cell)} 
  ></td>
)

CellComponent.propTypes = {
  cell: CellModel.shape.isRequired,
}

export default CellComponent;
