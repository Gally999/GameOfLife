import { counterOf } from './helpers';
import CellModel from '../models/CellModel';
import { Alive } from '../models/CellState';

describe('counterOf neighbors', () => {
  const deadCell = CellModel.empty();
  const liveCell = new CellModel('', new Alive());

  it('should return 0 when provided with an empty array', () => {
    expect(counterOf([])).toEqual(0);
  });

  it('should return 0 when provided with an array with 1 dead cell', () => {
    expect(counterOf([deadCell])).toEqual(0);
  });

  it('should return 1 when provided with an array with 1 live cell', () => {
    expect(counterOf([liveCell])).toEqual(1);
  });

  it('should return 1 when provided with an array with 1 live cell and 1 dead cell', () => {
    expect(counterOf([liveCell, deadCell])).toEqual(1);
  });

  it('should return 0 when provided with an array with only dead cells', () => {
    expect(counterOf([deadCell, deadCell])).toEqual(0);
  });

  it('should return 2 when provided with an array with 2 live cells', () => {
    expect(counterOf([liveCell, liveCell])).toEqual(2);
  });

  it('should return 0 when provided with null', () => {
    expect(counterOf(null)).toEqual(0);
  });

  it('should return 0 when provided with a string', () => {
    expect(counterOf('string')).toEqual(0);
  });

  it('should return 0 when provided with a number', () => {
    expect(counterOf(50)).toEqual(0);
  });
});
