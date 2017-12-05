import { StackNavigator } from 'react-navigation';
import StartScreen from '../../containers/StartScreen';

const AppContainer = StackNavigator({
	Main: { screen: StartScreen },
});

export default AppContainer;
