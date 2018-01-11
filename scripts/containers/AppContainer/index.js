import { StackNavigator } from 'react-navigation';
import { Easing, Animated } from 'react-native';
import StartScreen from '../../containers/StartScreen/';
import ThemesScreen from '../../containers/ThemesScreen/';
import QuestionsScreen from '../../containers/QuestionsScreen/';
import QuestionScreen from '../../containers/QuestionScreen/';

const transitionConfig = () => ({
	transitionSpec: {
		duration: 750,
		easing: Easing.out(Easing.poly(10)),
		timing: Animated.timing,
		useNativeDriver: true,
	},
	screenInterpolator: sceneProps => {
		const { layout, position, scene } = sceneProps;

		const thisSceneIndex = scene.index;
		const width = layout.initWidth;

		const translateX = position.interpolate({
			inputRange: [thisSceneIndex - 1, thisSceneIndex],
			outputRange: [width, 0],
		});

		return { transform: [{ translateX }] };
	},
});

const AppContainer = StackNavigator(
	{
		Main: { screen: StartScreen },
		Themes: { screen: ThemesScreen },
		Questions: { screen: QuestionsScreen },
		Question: { screen: QuestionScreen },
	},
	{
		transitionConfig,
	},
);

export default AppContainer;
