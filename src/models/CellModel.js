import PropTypes from 'prop-types';

import { Alive, Dead } from './CellState';

class Cell {
  static get shape() {
    return PropTypes.shape({
      id: PropTypes.string.isRequired,
      status: PropTypes.oneOfType([
        PropTypes.instanceOf(Alive),
        PropTypes.instanceOf(Dead),
      ]).isRequired,
    });
  }

  static empty() {
    return new Cell('', new Dead());
  }

  constructor(id, status) {
    this.id = id;
    this.status = status;
  }

  withState(state) {
    return new Cell(this.id, state);
  }

  get isAlive() {
    return this.status instanceof Alive;
  }

  get isDead() {
    return this.status instanceof Dead;
  }

  evolvesFrom(liveNeighbors) {
    if (this.isDead && liveNeighbors === 3) {
      return this.withState(new Alive());
    }
    if (this.isAlive && liveNeighbors !== 2 && liveNeighbors !== 3) {
      return this.withState(new Dead());
    }
    return this;
  }
}

export default Cell;
