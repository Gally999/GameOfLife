import React from 'react';
import Player from './Player';

describe('Player', () => {
  it('renders the options component correctly', () => {
    const subject = (
      <Player
        steps={4}
        onStepsUpdate={() => {}}
        onEvolveClick={() => {}}
      />
    );
    expect(subject).toMatchSnapshot();
  });
});
