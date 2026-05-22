import * as React from 'react';
import { createStaticNavigation, useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OpayScreen from '../screens/Home';
import Opaylogin from '../screens/OpayLogin';
import Rewards from '../screens/Rewards';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Login" component={Opaylogin} />
            <Tab.Screen name="Home" component={OpayScreen} />
            <Tab.Screen name="Rewards" component={Rewards} />
            <Tab.Screen name="Profile" component={Fi} />

        </Tab.Navigator>
    )
}