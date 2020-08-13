import React from 'react';
import Controller from './Controller';

describe('Controller', () => {
  it('renders the controller component correctly', () => {
    const subject = (
      <Controller
        x={4}
        y={7}
        steps={1}
        onDimensionsChange={() => {}}
        onEvolveClick={() => {}}
        onStepsUpdate={() => {}}
      />
    );
    expect(subject).toMatchSnapshot();
  });
});
