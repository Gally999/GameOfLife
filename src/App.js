import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Controller from './components/UserInputs/Controller';
import Grid from './models/GridModel';
import GridComponent from './components/GridDisplay/GridComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 6,
      y: 6,
      steps: 1,
      grid: Grid.withDimension(6, 6),
    };
    this.onDimensionsChange = this.onDimensionsChange.bind(this);
    this.onCellClicked = this.onCellClicked.bind(this);
    this.onEvolveClick = this.onEvolveClick.bind(this);
    this.onStepsUpdate = this.onStepsUpdate.bind(this);
  }

  onDimensionsChange({ x, y }) {
    const { grid } = this.state;
    this.setState({
      x,
      y,
      grid: grid.updateDimensions(x, y),
    });
  }

  onCellClicked(cell) {
    const { grid } = this.state;
    this.setState({
      grid: grid.switchCellStatus(cell),
    });
  }

  onEvolveClick() {
    const { steps } = this.state;
    let counter = 0;
    const iteration = setInterval(() => {
      counter++;
      this.oneEvolution();

      if (counter >= steps) {
        clearInterval(iteration);
      }
    }, 500);
  }

  oneEvolution() {
    const { grid } = this.state;
    const evolvedMatrix = grid.computeEvolution();
    this.setState({
      grid: Grid.createFrom(evolvedMatrix),
    });
  }

  onStepsUpdate(value) {
    this.setState({
      steps: value,
    });
  }

  render() {
    const {
      x, y, steps, grid,
    } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <GridComponent
            grid={grid}
            onCellClicked={this.onCellClicked}
          />
          <Controller
            x={x}
            y={y}
            steps={steps}
            onDimensionsChange={this.onDimensionsChange}
            onEvolveClick={this.onEvolveClick}
            onStepsUpdate={this.onStepsUpdate}
          />
        </div>
      </div>
    );
  }
}

export default App;
