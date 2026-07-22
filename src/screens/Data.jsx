import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const TABS = ['HOT', 'Daily', 'Weekly', 'Weekend', 'Monthly', 'YouTube', 'Always On'];

const DATA_PLANS = [
    { id: '1', data: '1GB', duration: '3 Days', price: '330', cashback: '3.3' },
    { id: '2', data: '3GB', duration: '3 Days', price: '990', cashback: '9.9' },
    { id: '3', data: '5GB', duration: '3 Days', price: '1,650', cashback: '16.5' },
    { id: '4', data: '1GB', duration: '7 Days', price: '365', cashback: '3.65' },
    { id: '5', data: '3GB', duration: '7 Days', price: '1,095', cashback: '10.95' },
    { id: '6', data: '5GB', duration: '7 Days', price: '1,825', cashback: '18.25' },
    { id: '7', data: '500MB', duration: '14 Days', price: '250', cashback: '2.5' },
    { id: '8', data: '1GB', duration: '14 Days', price: '365', cashback: '3.65', badge: '1GB Night' },
    { id: '9', data: '3GB', duration: '14 Days', price: '1,095', cashback: '10.95', badge: '3GB Night' },
    { id: '10', data: '5GB', duration: '14 Days', price: '1,825', cashback: '18.25', badge: '5GB Night' },
    { id: '11', data: '10GB', duration: '14 Days', price: '3,650', cashback: '36.5', badge: '10GB Night' },
    { id: '12', data: '1GB', duration: '21 Days', price: '470', cashback: '4.7', badge: 'Best Price', badgeColor: '#9C6800' },
    { id: '13', data: '2GB', duration: '21 Days', price: '930', cashback: '9.3' },
    { id: '14', data: '3GB', duration: '21 Days', price: '1,350', cashback: '13.5' },
    { id: '15', data: '5GB', duration: '30 Days', price: '2,400', cashback: '24' },
];

export default function Data({ navigation }) {
    const [selectedTab, setSelectedTab] = useState('HOT');
    const [phoneNumber, setPhoneNumber] = useState('0915 2543 383');

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#181818' }}>
                {/* Header Bar */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation?.goBack()}
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
                    >
                        <Entypo name="chevron-left" size={22} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
                            Mobile Data
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ color: '#00D285', fontSize: 14, fontWeight: '500' }}>
                            History
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    {/* Top Cashback Promo Banner */}
                    <View style={{ paddingHorizontal: 16, marginTop: 5 }}>
                        <View
                            style={{
                                backgroundColor: '#414d43',
                                borderRadius: 14,
                                padding: 14,
                                flexDirection: 'row',
                                alignItems: 'center',
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            <View style={{ flex: 1, paddingRight: 10 }}>
                                <Text style={{ color: '#00D285', fontSize: 16, fontWeight: '800' }}>
                                    Calls Shouldn't
                                </Text>
                                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '800', marginBottom: 4 }}>
                                    Wait For Payday
                                </Text>
                                <Text style={{ color: '#AAA', fontSize: 11 }}>
                                    Recharge Airtime & Get <Text style={{ color: '#00D285', fontWeight: 'bold' }}>Up To 6%</Text> Cashback
                                </Text>
                            </View>
                            
                            <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#2D3E30' }} />
                        </View>
                    </View>

                    {/* Network Carrier & Phone Number Input Card */}
                    <View
                        style={{
                            backgroundColor: '#262626',
                            marginHorizontal: 16,
                            marginTop: 12,
                            borderRadius: 12,
                            paddingHorizontal: 12,
                            paddingVertical: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        {/* Carrier Logo / Selector */}
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                            <View
                                style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: 14,
                                    backgroundColor: '#00833E',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ color: '#FFF', fontSize: 9, fontWeight: 'bold' }}>glo</Text>
                            </View>
                            <Entypo name="chevron-down" size={14} color="#888" />
                        </TouchableOpacity>

                        {/* Vertical Divider */}
                        <View style={{ width: 1, height: 20, backgroundColor: '#3A3A3C', marginHorizontal: 10 }} />

                        {/* Phone Input */}
                        <TextInput
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="numeric"
                            style={{
                                flex: 1,
                                color: '#FFFFFF',
                                fontSize: 16,
                                fontWeight: '700',
                                letterSpacing: 0.5,
                            }}
                        />

                        {/* Selector Icon & Contact Book Icon */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Entypo name="chevron-down" size={16} color="#888" />
                            <TouchableOpacity
                                style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: 14,
                                    backgroundColor: '#00D285',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Ionicons name="person" size={14} color="#FFFFFF" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Main Data Plans Container Card */}
                    <View
                        style={{
                            backgroundColor: '#222222',
                            marginTop: 16,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            paddingTop: 16,
                        }}
                    >
                        {/* Pay Later Promo Banner Strip */}
                        <View
                            style={{
                                backgroundColor: '#5C24B5',
                                marginHorizontal: 16,
                                borderRadius: 12,
                                paddingHorizontal: 12,
                                paddingVertical: 8,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 16,
                            }}
                        >
                            <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 13, flex: 1 }}>
                                No Cash To Reach Lovely Ones?
                            </Text>

                            <TouchableOpacity
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    paddingHorizontal: 14,
                                    paddingVertical: 4,
                                    borderRadius: 12,
                                }}
                            >
                                <Text style={{ color: '#5C24B5', fontWeight: 'bold', fontSize: 12 }}>
                                    APPLY
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Data Plans Header & Layout Grid Toggle */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingHorizontal: 16,
                                marginBottom: 12,
                            }}
                        >
                            <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '700' }}>
                                Data Plans
                            </Text>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <MaterialIcons name="grid-view" size={20} color="#00D285" />
                                <Ionicons name="grid-outline" size={18} color="#777" />
                            </View>
                        </View>

                        {/* Horizontal Tabs Scroll Bar */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 16, gap: 20, marginBottom: 16 }}
                        >
                            {TABS.map((tab) => (
                                <TouchableOpacity
                                    key={tab}
                                    onPress={() => setSelectedTab(tab)}
                                    style={{ alignItems: 'center', paddingBottom: 6 }}
                                >
                                    <Text
                                        style={{
                                            color: selectedTab === tab ? '#00D285' : '#8E8E93',
                                            fontSize: 14,
                                            fontWeight: selectedTab === tab ? '700' : '500',
                                        }}
                                    >
                                        {tab}
                                    </Text>
                                    {selectedTab === tab && (
                                        <View
                                            style={{
                                                width: 18,
                                                height: 3,
                                                backgroundColor: '#00D285',
                                                borderRadius: 2,
                                                marginTop: 4,
                                            }}
                                        />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        {/* 3-Column Data Plan Grid */}
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                paddingHorizontal: 12,
                                justifyContent: 'space-between',
                            }}
                        >
                            {DATA_PLANS.map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    activeOpacity={0.7}
                                    style={{
                                        width: '31.5%',
                                        backgroundColor: '#181818',
                                        borderRadius: 10,
                                        paddingTop: 12,
                                        paddingBottom: item.badge ? 0 : 12,
                                        paddingHorizontal: 4,
                                        alignItems: 'center',
                                        marginBottom: 10,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '800' }}>
                                        {item.data}
                                    </Text>
                                    <Text style={{ color: '#888888', fontSize: 11, marginTop: 2 }}>
                                        {item.duration}
                                    </Text>
                                    <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: '600', marginTop: 4 }}>
                                        ₦{item.price}
                                    </Text>
                                    <Text style={{ color: '#00D285', fontSize: 10, fontWeight: '500', marginTop: 6 }}>
                                        ₦{item.cashback} Cashback
                                    </Text>

                                    {/* Optional Bottom Badge Banner */}
                                    {item.badge && (
                                        <View
                                            style={{
                                                width: '100%',
                                                backgroundColor: item.badgeColor || '#4A3200',
                                                marginTop: 8,
                                                paddingVertical: 3,
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                gap: 2,
                                            }}
                                        >
                                            <Text style={{ color: '#FFD700', fontSize: 9, fontWeight: 'bold' }}>
                                                {item.badge}
                                            </Text>
                                            <Ionicons name="information-circle" size={10} color="#FFD700" />
                                        </View>
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}