import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Cell.css';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.switchState = this.switchState.bind(this);
  }

  switchState() {
    this.props.onCellClicked(this.props.cell);
  }

  render() {
    return (
      <td 
        className={this.props.cell.isAlive ? 'alive' : 'dead'} 
        onClick={this.switchState} 
      ></td>
    );
  }
}

Cell.propTypes = {
  cell: PropTypes.shape({
    isAlive: PropTypes.bool.isRequired,
  }).isRequired,
}

export default Cell;
