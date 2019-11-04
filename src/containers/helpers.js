export const reducerOf = (neighbors) => {
  return neighbors.reduce((counter, cell) => {
    if (cell.isAlive) {
      counter++;
    }
    return counter;
  }, 0);
}
