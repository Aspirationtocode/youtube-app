import React from 'react';
import { View, Text, Image } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { connect } from 'react-redux';

import styles from './styles';

import { getCompletePercent } from '../../constants';

import AnswerPoints from '../AnswerPoints/';

const UserInfo = props => {
	const { data: currentUserData } = props.currentUser;
	const { points, rightAnswers, wrongAnswers } = props.gameStatus;
	return (
		<View style={styles.container}>
			<View style={styles.leftInfoContainer}>
				<View>
					<Text style={styles.userName}>
						{currentUserData ? currentUserData.name : null}
					</Text>
				</View>
				<View style={styles.pointsContainer}>
					<AnswerPoints points={-wrongAnswers} />
					<AnswerPoints points={rightAnswers} />
					<Text style={styles.pointsText}>{`Набрано очков: ${points}`}</Text>
				</View>
			</View>
			<View style={styles.photoWrapper}>
				<View style={styles.circularProgressContainer}>
					<AnimatedCircularProgress
						size={136}
						width={8}
						prefill={0}
						rotation={0}
						fill={getCompletePercent(
							props.currentUser,
							rightAnswers + wrongAnswers,
						)}
						tintColor="#37e557"
						backgroundColor="#3d5875"
					/>
				</View>

				<Image
					style={styles.photo}
					source={{
						uri: `${currentUserData ? currentUserData.photoURL : null}`,
					}}
				/>
			</View>
		</View>
	);
};

const mapStateToProps = state => ({
	currentUser: state.currentUser,
	gameStatus: state.gameStatus,
});

export default connect(mapStateToProps)(UserInfo);
