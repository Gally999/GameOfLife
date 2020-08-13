import React from 'react';
import Options from './Options';

describe('Options', () => {
  it('renders the options component correctly', () => {
    const subject = (
      <Options
        x={4}
        y={7}
        onDimensionsChange={() => {}}
      />
    );
    expect(subject).toMatchSnapshot();
  });
});
