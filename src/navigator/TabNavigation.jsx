import * as React from 'react';
import { createStaticNavigation, useNavigation} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Rewards from '../screens/Rewards';
import Home from '../screens/Home';
import Finance from '../screens/Finance';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Rewards" component={Rewards} />
            <Tab.Screen name="Finance" component={Finance} />

        </Tab.Navigator>
    )
}