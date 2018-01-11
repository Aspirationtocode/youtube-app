import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export const renderDiceDots = number => {
	const comp = {
		'1': () => (
			<View style={styles.container}>
				<View style={[styles.dot, styles['dot--center']]} />
			</View>
		),
		'2': () => (
			<View style={styles.container}>
				<View style={[styles.dot, styles['dot--top-right']]} />
				<View style={[styles.dot, styles['dot--bottom-left']]} />
			</View>
		),
		'3': () => (
			<View style={styles.container}>
				<View style={[styles.dot, styles['dot--top-right']]} />
				<View style={[styles.dot, styles['dot--bottom-left']]} />
				<View style={[styles.dot, styles['dot--center']]} />
			</View>
		),
		'4': () => (
			<View style={styles.container}>
				<View style={[styles.dot, styles['dot--top-left']]} />
				<View style={[styles.dot, styles['dot--top-right']]} />
				<View style={[styles.dot, styles['dot--bottom-left']]} />
				<View style={[styles.dot, styles['dot--bottom-right']]} />
			</View>
		),
		'5': () => (
			<View style={styles.container}>
				<View style={[styles.dot, styles['dot--center']]} />
				<View style={[styles.dot, styles['dot--top-left']]} />
				<View style={[styles.dot, styles['dot--top-right']]} />
				<View style={[styles.dot, styles['dot--bottom-left']]} />
				<View style={[styles.dot, styles['dot--bottom-right']]} />
			</View>
		),
		'6': () => (
			<View style={styles.container}>
				<View style={[styles.dot, styles['dot--left-center']]} />
				<View style={[styles.dot, styles['dot--right-center']]} />
				<View style={[styles.dot, styles['dot--top-left']]} />
				<View style={[styles.dot, styles['dot--top-right']]} />
				<View style={[styles.dot, styles['dot--bottom-left']]} />
				<View style={[styles.dot, styles['dot--bottom-right']]} />
			</View>
		),
		'0': () => (
			<View style={styles.container}>
				<View style={[styles.dotNotVisible, styles['dot--center']]} />
				<View style={[styles.dotNotVisible, styles['dot--left-center']]} />
				<View style={[styles.dotNotVisible, styles['dot--right-center']]} />
				<View style={[styles.dotNotVisible, styles['dot--top-left']]} />
				<View style={[styles.dotNotVisible, styles['dot--top-right']]} />
				<View style={[styles.dotNotVisible, styles['dot--bottom-left']]} />
				<View style={[styles.dotNotVisible, styles['dot--bottom-right']]} />
				<View style={[styles.dotNotVisible, styles['dot--top-center']]} />
				<View style={[styles.dotNotVisible, styles['dot--bottom-center']]} />
			</View>
		),
	};
	return comp[number]();
};

export const getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);
