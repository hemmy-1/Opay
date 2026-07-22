import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const PROVIDERS = [
    { id: '1', name: 'SportyBet', isSelected: true },
    { id: '2', name: 'PariPesa', isSelected: false },
    { id: '3', name: 'iLOTBet', isSelected: false },
    { id: '4', name: 'More', isSelected: false, isMoreBtn: true },
];

const AMOUNTS = [
    { id: '1', value: '100', original: '100', pay: null },
    { id: '2', value: '500', original: '500', pay: '470' },
    { id: '3', value: '1,000', original: '1,000', pay: '970' },
    { id: '4', value: '2,000', original: '2,000', pay: '1,970' },
    { id: '5', value: '5,000', original: '5,000', pay: '4,970' },
    { id: '6', value: '10,000', original: '10,000', pay: '9,970' },
];

export default function Betting({ navigation }) {
    const [selectedProvider, setSelectedProvider] = useState('1');
    const [userId, setUserId] = useState('09040175426');
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState('');

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#181818' }}>
                {/* Top Header */}
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
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
                    >
                        <Entypo name="chevron-left" size={22} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
                            Betting
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ color: '#00D285', fontSize: 14, fontWeight: '500' }}>
                            History
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    {/* Hot Offers Banner */}
                    <View style={{ paddingHorizontal: 16, marginTop: 4 }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={{
                                backgroundColor: '#262626',
                                borderRadius: 12,
                                paddingHorizontal: 14,
                                paddingVertical: 12,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Text style={{ fontSize: 14 }}>🔥</Text>
                                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '700' }}>
                                    Hot Offers
                                </Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                                <View
                                    style={{
                                        backgroundColor: '#10392A',
                                        paddingHorizontal: 6,
                                        paddingVertical: 2,
                                        borderRadius: 4,
                                    }}
                                >
                                    <Text style={{ color: '#00D285', fontSize: 11, fontWeight: 'bold' }}>
                                        ₦30
                                    </Text>
                                </View>

                                <Text style={{ color: '#888888', fontSize: 12 }}>All</Text>
                                <Entypo name="chevron-right" size={14} color="#888888" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Main Top-up Box */}
                    <View
                        style={{
                            backgroundColor: '#262626',
                            marginHorizontal: 16,
                            marginTop: 12,
                            borderRadius: 16,
                            padding: 16,
                        }}
                    >
                        {/* Betting Providers Row */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 20,
                            }}
                        >
                            {PROVIDERS.map((item) => {
                                const isSelected = selectedProvider === item.id;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={() => setSelectedProvider(item.id)}
                                        activeOpacity={0.7}
                                        style={{ alignItems: 'center' }}
                                    >
                                        <View
                                            style={{
                                                width: 58,
                                                height: 42,
                                                borderRadius: 10,
                                                backgroundColor: isSelected ? '#004225' : '#1A1A1A',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: isSelected ? 1 : 0,
                                                borderColor: '#00D285',
                                            }}
                                        >
                                            {item.isMoreBtn ? (
                                                <View
                                                    style={{
                                                        width: 28,
                                                        height: 28,
                                                        borderRadius: 14,
                                                        borderWidth: 1,
                                                        borderColor: '#888',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Entypo name="dots-three-horizontal" size={14} color="#FFF" />
                                                </View>
                                            ) : (
                                                <View
                                                    style={{
                                                        width: 28,
                                                        height: 28,
                                                        borderRadius: 14,
                                                        backgroundColor: item.id === '1' ? '#E51C24' : '#0B4182',
                                                            justifyContent: 'center',
                                                        alignItems: 'center',
                                                    }}
                                                >
                                                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 12 }}>
                                                        {item.name.charAt(0)}
                                                    </Text>
                                                </View>
                                            )}
                                        </View>
                                        <Text
                                            style={{
                                                color: isSelected ? '#00D285' : '#8E8E93',
                                                fontSize: 12,
                                                fontWeight: isSelected ? '600' : '400',
                                                marginTop: 6,
                                            }}
                                        >
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        {/* User ID Input Section */}
                        <Text style={{ color: '#8E8E93', fontSize: 13, marginBottom: 8 }}>
                            User ID
                        </Text>

                        <View
                            style={{
                                backgroundColor: '#1E1E1E',
                                borderRadius: 10,
                                paddingHorizontal: 14,
                                paddingVertical: 12,
                                marginBottom: 20,
                            }}
                        >
                            <TextInput
                                value={userId}
                                onChangeText={setUserId}
                                keyboardType="numeric"
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 16,
                                    fontWeight: '700',
                                    letterSpacing: 0.5,
                                }}
                            />
                        </View>

                        {/* Select Amount Grid */}
                        <Text style={{ color: '#8E8E93', fontSize: 13, marginBottom: 12 }}>
                            Select Amount
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                marginBottom: 16,
                            }}
                        >
                            {AMOUNTS.map((item) => {
                                const isSelected = selectedAmount === item.id;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={() => {
                                            setSelectedAmount(item.id);
                                            setCustomAmount('');
                                        }}
                                        activeOpacity={0.7}
                                        style={{
                                            width: '31.5%',
                                            backgroundColor: isSelected ? '#004225' : '#1E1E1E',
                                            borderRadius: 10,
                                            paddingVertical: 16,
                                            alignItems: 'center',
                                            marginBottom: 10,
                                            borderWidth: isSelected ? 1 : 0,
                                            borderColor: '#00D285',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: '#FFFFFF',
                                                fontSize: 16,
                                                fontWeight: '800',
                                            }}
                                        >
                                            ₦{item.value}
                                        </Text>

                                        {item.pay && (
                                            <Text
                                                style={{
                                                    color: '#00D285',
                                                    fontSize: 11,
                                                    fontWeight: '500',
                                                    marginTop: 4,
                                                }}
                                            >
                                                Pay ₦{item.pay}
                                            </Text>
                                        )}
                                    </TouchableOpacity>
                                );
                            })}
                        </View>

                        {/* Custom Amount Input Bar & Action Button */}
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderBottomWidth: 0.5,
                                borderBottomColor: '#3A3A3C',
                                paddingBottom: 8,
                            }}
                        >
                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 18,
                                    fontWeight: '700',
                                    marginRight: 6,
                                }}
                            >
                                ₦
                            </Text>

                            <TextInput
                                placeholder="100-1,000,000"
                                placeholderTextColor="#555555"
                                keyboardType="numeric"
                                value={customAmount}
                                onChangeText={(text) => {
                                    setCustomAmount(text);
                                    setSelectedAmount(null);
                                }}
                                style={{
                                    flex: 1,
                                    color: '#FFFFFF',
                                    fontSize: 16,
                                    fontWeight: '600',
                                }}
                            />

                            <TouchableOpacity
                                disabled={!selectedAmount && !customAmount}
                                activeOpacity={0.8}
                                style={{
                                    backgroundColor:
                                        selectedAmount || customAmount.length > 0 ? '#00D285' : '#0B4E32',
                                    paddingHorizontal: 22,
                                    paddingVertical: 8,
                                    borderRadius: 20,
                                }}
                            >
                                <Text
                                    style={{
                                        color:
                                            selectedAmount || customAmount.length > 0 ? '#000000' : '#043927',
                                        fontWeight: 'bold',
                                        fontSize: 13,
                                    }}
                                >
                                    Pay
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* More Events Card */}
                    <View
                        style={{
                            backgroundColor: '#262626',
                            marginHorizontal: 16,
                            marginTop: 16,
                            borderRadius: 16,
                            padding: 16,
                        }}
                    >
                        <Text
                            style={{
                                color: '#FFFFFF',
                                fontSize: 15,
                                fontWeight: '700',
                                marginBottom: 16,
                            }}
                        >
                            More Events
                        </Text>

                        {/* Item 1 */}
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 12,
                                marginBottom: 16,
                            }}
                        >
                            <View
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 22,
                                    backgroundColor: '#FFE680',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Ionicons name="football" size={24} color="#000" />
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: 14,
                                        fontWeight: '600',
                                        marginBottom: 2,
                                    }}
                                >
                                    Awoof Wey No Dey Run Belle!!!
                                </Text>
                                <Text style={{ color: '#8E8E93', fontSize: 12 }}>
                                    Get 10% Off when you deposit ₦30 only
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* Item 2 */}
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                gap: 12,
                            }}
                        >
                            <View
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 22,
                                    backgroundColor: '#EADCF8',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <MaterialIcons name="local-offer" size={22} color="#8A2BE2" />
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: 14,
                                        fontWeight: '600',
                                        marginBottom: 2,
                                    }}
                                >
                                    Super Voucher Package
                                </Text>
                                <Text style={{ color: '#8E8E93', fontSize: 12 }}>
                                    Claim 15 Discounts with <Text style={{ textDecorationLine: 'line-through' }}>₦99</Text> on any Bill
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}