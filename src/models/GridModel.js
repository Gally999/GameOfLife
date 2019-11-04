import CellModel from "./CellModel";
import { Alive, Dead } from "./CellState";
import { reducerOf } from "../containers/helpers";

class GridModel {

    static withDimension(width, height) {
        const matrix = [];
        
        for (let y = 0; y < height; y++) {
            const row = [];
            for (let x = 0; x < width; x++) {
                row.push(new CellModel(`${y}-${x}`, new Dead()));
            }
            matrix.push(row);
        }
        return new GridModel(matrix);
    }

    static create(matrix) {
        return new GridModel(matrix);
    }

    constructor(matrix) {
        this.matrix = matrix.map(
            row => row.map(
                cell => cell
            )
        );
    }

    updateDimensions(width, height) {
        return GridModel.withDimension(width, height);
    }

    switchCellStatus(cell) {
        let x = -1;
        let y = -1;
        for (; y < this.matrix.length && x === -1;) {
            y++;
            x = this.matrix[y].indexOf(cell);
        }
        if (x === -1) {
            return this;
        }
        let oldCell = this.matrix[y][x];
        let newCell = oldCell.withState(cell.isAlive ? new Dead() : new Alive());
        let newMatrix = this.matrix.map((row, i) => {
            const newRow = [...row];
            if (i === y) {
                newRow[x] = newCell;
            }
            return newRow;
        });
        return new GridModel(newMatrix);
    }

    // map(callback) {
    //     let newArray = [];
    //     for (let i = 0; i < this.matrix.length; i++) {
    //         let newMappedItem = callback(this.matrix[i], i, this.matrix);
    //         newArray.push(newMappedItem);
    //     }
    //     return newArray;
    // }

    myMap(callback) {
        return this.matrix.map(callback);
    }

    computeEvolution() {
        const evolvedMatrix = this.matrix.map((row, y) => 
            row.map((cell, x) => {
                const neighbors = this.getCellNeighbors(x, y, this);
                const liveNeighbors = reducerOf(neighbors);
                return cell.evolves(liveNeighbors);
            })
        );
        return evolvedMatrix;
    }

    getCellNeighbors(x, y) {
        const neighbors = [];
        const distance = 1;
        for (let i = y - distance; i <= y + distance ; i++) {
          if (this.matrix[i] !== undefined) {
            for (let j = x - distance; j <= x + distance; j++) {
              if (this.matrix[i][j]) { //Si on est dans la grille
                if (!(i === y && j === x)) {	//Si on est pas nous même
                  neighbors.push(this.matrix[i][j]);	//On ajoute
                }
              }
            }
          }
        }
        return neighbors;
      }
}

export default GridModel;