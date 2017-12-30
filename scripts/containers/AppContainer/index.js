import { StackNavigator } from "react-navigation";
import StartScreen from "../../containers/StartScreen/";
import ThemesScreen from "../../containers/ThemesScreen/";
import QuestionsScreen from "../../containers/QuestionsScreen/";

const AppContainer = StackNavigator({
  Main: { screen: StartScreen },
  Themes: { screen: ThemesScreen },
  Questions: { screen: QuestionsScreen }
});

export default AppContainer;
