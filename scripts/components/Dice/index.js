import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import { renderDiceDots } from './helpers';

class Dice extends Component {
	state = {
		displayDice: false,
	};
	componentWillReceiveProps = nextProps => {
		const { state } = this;
		const { enableAnswers, randomNumber, openAlert } = nextProps;
		if (!state.displayDice) {
			this.dice.cubeAnimation().then(endCubeAnimationState => {
				if (endCubeAnimationState.finished) {
					this.dice.cubeTranslation(400).then(cubeTranslationState => {
						if (cubeTranslationState.finished) {
							enableAnswers();
							if (randomNumber === 1) {
								openAlert();
							}
						}
					});
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

	render() {
		const { state, props } = this;
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
				{renderDiceDots(state.displayDice ? props.randomNumber : 0)}
			</Animatable.View>
		);
	}
}
export default Dice;
