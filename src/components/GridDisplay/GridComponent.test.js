import React from 'react';

import GridComponent from './GridComponent';
import GridModel from '../../models/GridModel';

describe('GridComponent', () => {
  it('renders the grid component correctly', () => {
    const subject = (
      <GridComponent
        grid={GridModel.empty()}
        onCellClicked={() => {}}
      />
    );
    expect(subject).toMatchSnapshot();
  });
});
