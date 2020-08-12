import React from 'react';
import PropTypes from "prop-types";

import CellComponent from './CellComponent';
import GridModel from '../../models/GridModel';

 const GridComponent = ({ grid, onCellClicked }) => (
  <table>
    <tbody>
      {grid.myMap((row, indexRow) => 
        <tr key={indexRow}>
          {row.map((cell, indexCell) =>
            <CellComponent 
              key={`${indexRow}-${indexCell}`} 
              cell={cell}
              onCellClicked={onCellClicked}
            />
          )}
        </tr>
      )}
    </tbody>
  </table>
);

GridComponent.propTypes = {
  grid: PropTypes.instanceOf(GridModel),
  onCellClicked: PropTypes.func.isRequired,
}

export default GridComponent;
