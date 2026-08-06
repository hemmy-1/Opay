import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Vector icons fallback matching your tab bar layout
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import Rewards from '../screens/Rewards';
import Home from '../screens/Home';
import Finance from '../screens/Finance';
import Cards from '../screens/Cards';
import Me from '../screens/Me';
import images from '../Constant/images'; // Importing your asset file pathing

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            // This is the magic key that completely overrides the default native bar
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Rewards" component={Rewards} />
            <Tab.Screen name="Finance" component={Finance} />
            <Tab.Screen name="Cards" component={Cards} />
            <Tab.Screen name="Me" component={Me} />
        </Tab.Navigator>
    );
}

// Custom Bottom Tab Bar Component
function CustomTabBar({ state, descriptors, navigation }) {
    const insets = useSafeAreaInsets(); 

    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: '#111111', // Matches dark OPay footer backdrop
            borderTopWidth: 0.3,
            borderTopColor: '#222222',
            paddingTop: 10,
            // Dynamic padding offset to cleanly clear system home indicator bars (iOS/Android gesture bars)
            paddingBottom: insets.bottom > 0 ? insets.bottom : 10,
            height: insets.bottom > 0 ? 65 + insets.bottom : 65,
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                // Icon router matching your design layout
                const renderTabIcon = () => {
                    const activeColor = '#04b775'; // OPay active green
                    const inactiveColor = '#888888';
                    const size = 24;

                    switch (route.name) {
                        case 'Home':
                            return <Feather name="home" size={size} color={isFocused ? activeColor : inactiveColor} />;
                        case 'Rewards':
                            return <MaterialCommunityIcons name="hexagon-outline" size={size} color={isFocused ? activeColor : inactiveColor} />;
                        case 'Finance':
                            return <MaterialIcons name="card-travel" size={size} color={isFocused ? activeColor : inactiveColor} />;
                        case 'Cards':
                            return <Ionicons name="card-outline" size={size} color={isFocused ? activeColor : inactiveColor} />;
                        case 'Me':
                            // For "Me", we use your custom account logo asset image if active, else a standard placeholder profile ring
                            return isFocused ? (
                                <Image
                                    source={images.logoooo}
                                    style={{ width: 24, height: 24, borderRadius: 12, borderWidth: 1, borderColor: '#04b775' }}
                                />
                            ) : (
                                <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#888888', justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: 14, height: 4, borderRadius: 2, backgroundColor: '#111111', marginTop: 10 }} />
                                </View>
                            );
                        default:
                            return null;
                    }
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        activeOpacity={0.8}
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        {renderTabIcon()}
                        <Text style={{
                            color: isFocused ? '#04b775' : '#888888',
                            fontSize: 12,
                            marginTop: 4,
                            fontWeight: isFocused ? '600' : '400'
                        }}>
                            {route.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}