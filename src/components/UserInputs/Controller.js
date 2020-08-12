import React from 'react';
import PropTypes from "prop-types";

import Options from './Options';
import Player from '../UserInputs/Player';

const Controller = ({
	x,
	y,
	steps,
	onDimensionsChange,
	onEvolveClick,
	onStepsUpdate,
}) => (
	<div>
		<Options
			x={x}
			y={y}
			onDimensionsChange={onDimensionsChange}
		/>
		<Player
			steps={steps}
			onEvolveClick={onEvolveClick}
			onStepsUpdate={onStepsUpdate}
		/>
	</div>
);

Controller.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	steps: PropTypes.number.isRequired,
	onDimensionsChange: PropTypes.func.isRequired,
	onEvolveClick: PropTypes.func.isRequired,
	onStepsUpdate: PropTypes.func.isRequired,
}

export default Controller;
