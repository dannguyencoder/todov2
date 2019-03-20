import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './container/Home'
import DoneScreen from './container/Done'
import UndoneScreen from './container/Undone'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Done: {
        screen: DoneScreen
    },
    Undone: {
        screen: UndoneScreen
    }
});

export default createAppContainer(AppNavigator);