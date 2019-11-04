import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Controller from './components/UserInputs/Controller';
import Grid from './components/GridDisplay/Grid';
import GridModel from './models/GridModel';
// import CellModel from './models/CellModel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        x: 6,
        y: 6,
        steps: 1,
        grid: GridModel.withDimension(6, 6),
    };
    this.onDimensionsChange = this.onDimensionsChange.bind(this);
    this.onCellClicked = this.onCellClicked.bind(this);
    this.onEvolveClick = this.onEvolveClick.bind(this);
    this.onStepsUpdate = this.onStepsUpdate.bind(this);
  }

  onDimensionsChange({x, y}) {
    this.setState({
      x, 
      y,
      grid: this.state.grid.updateDimensions(x, y),
    });
  }

  onCellClicked(cell) {
    this.setState({
      grid: this.state.grid.switchCellStatus(cell),
    });
  }

  onEvolveClick() {
    let counter = 0;
    const iteration = setInterval(() => {
      counter++;
      this.oneEvolution();
      if (counter >= this.state.steps) {
        clearInterval(iteration);
      }
    }, 500);
  }

  oneEvolution() {
    const evolvedMatrix = this.state.grid.computeEvolution();
    this.setState({
      grid: GridModel.create(evolvedMatrix),
    });
  }

  onStepsUpdate(value) {
    this.setState({
      steps: value,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Grid 
            grid={this.state.grid} 
            onCellClicked={this.onCellClicked}
          />
          <Controller 
            x={this.state.x} 
            y={this.state.y} 
            steps={this.state.steps}
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
