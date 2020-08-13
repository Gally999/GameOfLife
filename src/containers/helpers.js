import { array, object } from "prop-types";

export const counterOf = (neighbors) => {
  if (neighbors && Array.isArray(neighbors)) {
    return neighbors.reduce((counter, cell) => {
      if (cell.isAlive) {
        counter++;
      }
      return counter;
    }, 0);
  }
  return 0;
};

export default counterOf;
