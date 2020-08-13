import React from 'react';
import GridInputs from './GridInputs';

describe('GridInputs', () => {
  it('renders the grid inputs component correctly', () => {
    const subject = (
      <GridInputs
        x={4}
        y={7}
        onDimensionsChange={() => {}}
      />
    );
    expect(subject).toMatchSnapshot();
  });
});
