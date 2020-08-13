import React from 'react';

import CellComponent from './CellComponent';
import CellModel from '../../models/CellModel';

describe('CellComponent', () => {
  it('renders the cell component correctly', () => {
    const subject = (
      <CellComponent
        cell={CellModel.empty()}
        onCellClicked={() => {}}
      />
    );
    expect(subject).toMatchSnapshot();
  });
});
