import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import PodcastList from './screens/PodcastList';
import SearchBar from './screens/SearchBar';
import About from './screens/About';

// icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getSearchIcon = icon => () => (
    <Ionicons name={icon} size={28} style={{ color: "black" }} />
)

const getHookIcon = icon => () => (
    <MaterialCommunityIcons name={icon} size={28} style={{ color: "black" }} />
)

// const getResultsIcon = icon => () => (
//     <Foundation name={icon} size={28} style={{ color: "black" }} />
// )

const SearchScreens = () => {
    return (
        <Stack.Navigator
            initialRouteName='Search'
        >
            <Stack.Screen  
                name='Search'
                component={SearchBar}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Results' 
                component={PodcastList}
            />
        </Stack.Navigator>
    )
}

export default NavBar = () => {
    return (
        <Tab.Navigator
            initialRouteName='Search'
            options={{
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name='Search Podcasts'
                component={SearchScreens}
                options={{
                    tabBarIcon: getSearchIcon('search'),
                    tabBarShowLabel: false,
                    headerShown: false,
                }} 
            />
            {/* <Tab.Screen
                name='Results'
                component={PodcastList}
                options={{
                    tabBarIcon: getResultsIcon('results'),
                    tabBarShowLabel: false,
                }}
            /> */}
            <Tab.Screen
                name='About'
                component={About}
                options={{
                    tabBarIcon: getHookIcon('hook'),
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    )
}