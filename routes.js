import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PodcastList from './screens/PodcastList';
import SearchBar from './screens/SearchBar';
import About from './screens/About';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default NavBar = () => {
    return (
        <Tab.Navigator
            initialRouteName='About'
            options={{
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen name='Search' component={SearchBar} />
            <Tab.Screen name='Results' component={PodcastList} />
            <Tab.Screen name='About' component={About} />
        </Tab.Navigator>
    )
}