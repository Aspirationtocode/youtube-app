import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import { renderDiceDots, getRandomArbitrary } from './helpers';

class Dice extends Component {
	state = {
		displayDice: false,
	};
	componentWillReceiveProps = nextProps => {
		const { state } = this;
		const { letAnimateDice } = nextProps;
		if (letAnimateDice && !state.displayDice) {
			this.dice.cubeAnimation().then(endState => {
				if (endState.finished) {
					this.dice.cubeTranslation(200);
				}
			});
			setTimeout(() => {
				this.setState({
					displayDice: true,
				});
			}, this.animationDuration / 2);
		}
	};

	animationDuration = 2000;
	randomNumber = getRandomArbitrary(1, 6);

	render() {
		const { state } = this;
		return (
			<Animatable.View
				ref={component => {
					this.dice = component;
				}}
				style={[styles.outerContainer]}
				iterationCount={1}
				duration={this.animationDuration}
				easing="ease-in-out"
			>
				{renderDiceDots(state.displayDice ? this.randomNumber : 0)}
			</Animatable.View>
		);
	}
}
export default Dice;
