import React from 'react';
import PropTypes from 'prop-types';

import CellComponent from './CellComponent';
import Grid from '../../models/GridModel';

const GridComponent = ({ grid, onCellClicked }) => (
  <table>
    <tbody>
      {grid.myMap((row, indexRow) => (
        <tr key={indexRow}>
          {row.map((cell) => (
            <CellComponent
              key={cell.id}
              cell={cell}
              onCellClicked={onCellClicked}
            />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

GridComponent.propTypes = {
  grid: PropTypes.instanceOf(Grid).isRequired,
  onCellClicked: PropTypes.func.isRequired,
};

export default GridComponent;
