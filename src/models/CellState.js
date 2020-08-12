export class CellState {
  toString() {
    throw new Error(`${this} should never be instantiated`);
  }
}
  
export class Alive extends CellState {
  // eslint-disable-next-line class-methods-use-this
  toString() {
    return 'alive';
  }
}
  
export class Dead extends CellState {
  // eslint-disable-next-line class-methods-use-this
  toString() {
    return 'dead';
  }
}