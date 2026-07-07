import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StatusBar} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import images from '../Constant/images'; 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BankCard({ navigation }) {

   
    const cardsData = [
        {
            id: '1',
            bankName: 'Wema Bank',
            cardNumber: '559441******1059',
            isPending: true,
            bankLogo: images.wema
        },
        {
            id: '2',
            bankName: 'Wema Bank',
            cardNumber: '559441******8114',
            isPending: true,
            bankLogo: images.wema
        },
        {
            id: '3',
            bankName: 'Wema Bank',
            cardNumber: '506119*********3425',
            isPending: true,
            bankLogo: images.wema
        }
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
            <StatusBar barStyle="light-content" backgroundColor="#d82323" />

            {/* 1. Custom Header Navigation Bar */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingVertical: 14,
                borderBottomWidth: 0.2,
                borderBottomColor: '#2C2C2C'
            }}>
                <TouchableOpacity
                    onPress={() => navigation?.goBack()}
                    style={{ marginRight: 16 }}
                    activeOpacity={0.7}
                >
                    <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '600' }}>
                    Bank Cards and Accounts
                </Text>
            </View>

            {/* 2. Scrollable Cards Container */}
            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 100 }}>
                {cardsData.map((card) => (
                    <View
                        key={card.id}
                        style={{
                            backgroundColor: '#262626', // Deep charcoal card background
                            borderRadius: 12,
                            padding: 16,
                            marginBottom: 12,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        {/* Left Side: Logo and Bank Details */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            {/* Circular Bank Logo Frame */}
                            <View style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                backgroundColor: '#FFFFFF',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 14
                            }}>
                                <Image
                                    source={card.bankLogo}
                                    style={{ width: 26, height: 26, borderRadius: 13 }}
                                    resizeMode="contain"
                                />
                            </View>

                            {/* Text Blocks */}
                            <View>
                                <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '600' }}>
                                    {card.bankName}
                                </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                    <Text style={{ color: '#888888', fontSize: 13, marginRight: 8 }}>
                                        {card.cardNumber}
                                    </Text>

                                    {/* Small Gray 'Card' Badge */}
                                    <View style={{
                                        backgroundColor: '#333333',
                                        paddingHorizontal: 6,
                                        paddingVertical: 1,
                                        borderRadius: 4
                                    }}>
                                        <Text style={{ color: '#888888', fontSize: 10, fontWeight: '500' }}>
                                            Card
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Right Side: Pending Status & Trash Action Indicator */}
                        <View style={{ alignItems: 'flex-end', justifyContent: 'space-between', height: 40 }}>
                            {card.isPending && (
                                <Text style={{ color: '#888888', fontSize: 11, fontWeight: '400' }}>
                                    Pending
                                </Text>
                            )}

                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={{ padding: 2, marginTop: 'auto' }}
                                onPress={() => alert(`Remove request initialized for card ending in ${card.cardNumber.slice(-4)}`)}
                            >
                                <Feather name="trash-2" size={16} color="#888888" />
                            </TouchableOpacity>
                        </View>

                    </View>
                ))}
            </ScrollView>

            {/* 3. Fixed Bottom Capsule Action Button */}
            <View style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#1A1A1A',
                paddingHorizontal: 16,
                paddingBottom: 24,
                paddingTop: 12
            }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: '#00D285', // OPay signature layout emerald green
                        borderRadius: 25,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}
                    onPress={() => alert('Redirecting to add new verification channel...')}
                >
                    <Text style={{ color: '#043927', fontSize: 16, fontWeight: '700' }}>
                        Add a Bank Card/Account
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}