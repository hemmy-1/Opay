import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const SETTINGS_GROUP_1 = [
    { id: '1', title: 'My Profile', icon: 'user', iconLib: 'Feather', screen: 'Profile' },
    { id: '2', title: 'Payment Settings', icon: 'lock', iconLib: 'Feather', screen: 'PaymentSettings' },
    { id: '3', title: 'Login Settings', icon: 'key', iconLib: 'Feather', screen: 'LoginSettings' },
    { id: '4', title: 'Savings Settings', icon: 'piggy-bank-outline', iconLib: 'MaterialCommunityIcons', screen: 'SavingsSettings' },
    { id: '5', title: 'Auto-Debit Management', icon: 'file-text', iconLib: 'Feather', screen: 'AutoDebit' },
];

const SETTINGS_GROUP_2 = [
    { id: '6', title: 'Homepage Settings', icon: 'home', iconLib: 'Feather', screen: 'HomepageSettings' },
    { id: '7', title: 'Security Questions', icon: 'help-circle', iconLib: 'Feather', actionLabel: 'Reset', screen: 'SecurityQuestions' },
    { id: '8', title: 'SMS Alert Settings', icon: 'message-square', iconLib: 'Feather', screen: 'SMSAlerts' },
    { id: '9', title: 'Security Plus', icon: 'shield', iconLib: 'Feather', screen: 'SecurityPlus' },
    { id: '10', title: 'Access to Clipboard', icon: 'copy', iconLib: 'Feather', screen: 'ClipboardAccess' },
    { id: '11', title: 'Themes', icon: 'sun', iconLib: 'Feather', screen: 'Themes' },
];

const SETTINGS_GROUP_3 = [
    { id: '12', title: 'Security Center', icon: 'shield-checkmark-outline', iconLib: 'Ionicons', screen: 'SecurityCenter' },
    { id: '13', title: 'Feedback and Suggestions', icon: 'edit-3', iconLib: 'Feather', screen: 'Feedback' },
];

const SETTINGS_GROUP_4 = [
    { id: '14', title: 'Close Account', icon: 'power', iconLib: 'Feather', screen: 'CloseAccount' },
];

const SETTINGS_GROUP_5 = [
    { id: '15', title: 'About', icon: 'alert-circle', iconLib: 'Feather', screen: 'About' },
];

export default function Settings({ navigation }) {

    // Helper to render vector icons dynamically
    const renderIcon = (iconName, lib) => {
        const size = 18;
        const color = '#00D285';

        if (lib === 'MaterialCommunityIcons') {
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        }
        if (lib === 'Ionicons') {
            return <Ionicons name={iconName} size={size} color={color} />;
        }
        return <Feather name={iconName} size={size} color={color} />;
    };

    const renderGroupCard = (items) => (
        <View
            style={{
                backgroundColor: '#262626',
                borderRadius: 14,
                marginHorizontal: 16,
                marginBottom: 14,
                paddingHorizontal: 16,
            }}
        >
            {items.map((item, index) => (
                <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.7}
                    onPress={() => alert('coming soon')}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: 16,
                        borderBottomWidth: index === items.length - 1 ? 0 : 0.5,
                        borderBottomColor: '#333333',
                        justifyContent:'space-between'
                    }}
                >
                    {/* Left Icon & Title */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                        {renderIcon(item.icon, item.iconLib)}
                        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '500' }}>
                            {item.title}
                        </Text>
                    </View>

                    {/* Right Label / Action & Arrow */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                        {item.actionLabel && (
                            <Text style={{ color: '#00D285', fontSize: 13, fontWeight: '500' }}>
                                {item.actionLabel}
                            </Text>
                        )}
                        <Entypo name="chevron-right" size={16} color="#888888" />
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#181818' }}>
                {/* Header Bar */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation?.goBack()}
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
                    >
                        <Entypo name="chevron-left" size={22} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
                            Settings
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 10 }}>
                    {/* Group 1 */}
                    {renderGroupCard(SETTINGS_GROUP_1)}

                    {/* Group 2 */}
                    {renderGroupCard(SETTINGS_GROUP_2)}

                    {/* Group 3 */}
                    {renderGroupCard(SETTINGS_GROUP_3)}

                    {/* Group 4 */}
                    {renderGroupCard(SETTINGS_GROUP_4)}

                    {/* Group 5 */}
                    {renderGroupCard(SETTINGS_GROUP_5)}

                    {/* Sign Out Button */}
                    <View style={{ paddingHorizontal: 16, marginTop: 4, marginBottom: 20 }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => alert('Signing Out')}
                            style={{
                                backgroundColor: '#262626',
                                borderRadius: 14,
                                paddingVertical: 14,
                                alignItems: 'center',
                                JustifyContent: 'center',
                            }}
                        >
                            <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '600' }}>
                                Sign Out
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}