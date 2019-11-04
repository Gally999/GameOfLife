import React from 'react';
import PropTypes from "prop-types";
import Cell from './Cell';
import GridModel from '../../models/GridModel';

 const Grid = ({grid, onCellClicked}) => (
  <table>
    <tbody>
      {grid.myMap((row, indexRow) => 
        <tr key={indexRow}>
          {row.map((cell, indexCell) =>
            <Cell 
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

Grid.propTypes = {
  grid: PropTypes.instanceOf(GridModel),
  onCellClicked: PropTypes.func.isRequired,
}

export default Grid;
