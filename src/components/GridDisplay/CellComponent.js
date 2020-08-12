import React, { Component } from 'react';

import './CellComponent.css';
import CellModel from '../../models/CellModel';

class CellComponent extends Component {
  constructor(props) {
    super(props);
    this.switchState = this.switchState.bind(this);
  }

  switchState() {
    const { cell, onCellClicked } = this.props;
    onCellClicked(cell);
  }

  render() {
    const { cell } = this.props;
    return (
      <td
        className={cell.isAlive ? 'alive' : 'dead'} 
        onClick={this.switchState} 
      ></td>
    );
  }
}

CellComponent.propTypes = {
  cell: CellModel.shape.isRequired,
}

export default CellComponent;
