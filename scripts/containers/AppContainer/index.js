import { StackNavigator } from 'react-navigation';
import StartScreen from '../../containers/StartScreen/';
import ThemesScreen from '../../containers/ThemesScreen/';

const AppContainer = StackNavigator({
	Main: { screen: StartScreen },
	Themes: { screen: ThemesScreen },
});

export default AppContainer;
