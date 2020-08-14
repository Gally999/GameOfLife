import Cell from './CellModel';
import { Alive, Dead } from './CellState';

describe('Live cells', () => {
  const liveCell = new Cell('', new Alive());
  const deadCell = new Cell('', new Dead());

  it('should return a dead cell when a live cell has no neighbor', () => {
    expect(liveCell.evolvesFrom(0)).toStrictEqual(deadCell);
  });

  it('should return a dead cell when a live cell has 1 neighbor', () => {
    expect(liveCell.evolvesFrom(1)).toStrictEqual(deadCell);
  });

  it('should return a live cell when a live cell has 2 neighbors', () => {
    expect(liveCell.evolvesFrom(2)).toStrictEqual(liveCell);
  });

  it('should return a live cell when a live cell has 3 neighbors', () => {
    expect(liveCell.evolvesFrom(3)).toStrictEqual(liveCell);
  });

  it('should return a dead cell when a live cell has 4 neighbors', () => {
    expect(liveCell.evolvesFrom(4)).toStrictEqual(deadCell);
  });
});

describe('Dead cells', () => {
  const liveCell = new Cell('', new Alive());
  const deadCell = new Cell('', new Dead());

  it('should return a dead cell when a dead cell has no neighbor', () => {
    expect(deadCell.evolvesFrom(0)).toStrictEqual(deadCell);
  });

  it('should return a dead cell when a dead cell has 1 neighbor', () => {
    expect(deadCell.evolvesFrom(1)).toStrictEqual(deadCell);
  });

  it('should return a dead cell when a dead cell has 2 neighbors', () => {
    expect(deadCell.evolvesFrom(2)).toStrictEqual(deadCell);
  });

  it('should return a live cell when a dead cell has 3 neighbors', () => {
    expect(deadCell.evolvesFrom(3)).toStrictEqual(liveCell);
  });

  it('should return a dead cell when a dead cell has 4 neighbors', () => {
    expect(deadCell.evolvesFrom(4)).toStrictEqual(deadCell);
  });
});
