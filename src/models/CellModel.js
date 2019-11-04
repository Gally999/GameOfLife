import { Alive, Dead } from "./CellState";

class CellModel {
    constructor(id, status) {
        this.id = id;
        this.status = status;
    }

    withState(state) {
        return new CellModel(this.id, state);
    }

    get isAlive() {
    return this.status instanceof Alive;
    }

    get isDead() {
    return this.status instanceof Dead;
    }

    evolves(liveNeighbors) {
        if (this.isDead && liveNeighbors === 3) {
          return this.withState(new Alive());
        }
        if (this.isAlive && liveNeighbors !== 2 && liveNeighbors !== 3) {
          return this.withState(new Dead());
        }
        return this;
      }
}

export default CellModel;
