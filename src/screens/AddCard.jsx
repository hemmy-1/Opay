import React, { useState } from 'react';
import {Text, View, TouchableOpacity, TextInput,StatusBar, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AddCard({ route, navigation }) {
    
    const { onCardAddSuccess } = route.params || {};

    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [pin, setPin] = useState('');
    const [activeTab, setActiveTab] = useState('Bank Card');

    const isCardNumberInvalid = cardNumber.length > 0 && cardNumber.length < 16;
    const isFormComplete = cardNumber.length >= 16 && expiryMonth.length === 2 && expiryYear.length === 2 && cvv.length === 3 && pin.length === 4;

    // 2. Packaging the data object when hitting Confirm
    const handleConfirm = () => {
        if (!isFormComplete) return;

        // Mask the card number to look like the original list view: "559441******1059"
        const maskedCardNumber = `${cardNumber.substring(0, 6)}******${cardNumber.substring(cardNumber.length - 4)}`;

        const newUserTypedCardObj = {
            id: Math.random().toString(),
            bankName: 'wema', 
            cardNumber: maskedCardNumber,
            isPending: true,
        };

        
        if (onCardAddSuccess) {
            onCardAddSuccess(newUserTypedCardObj);
        }

        navigation.goBack();
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
            <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />

            {/* Custom Navigation Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 16 }}>
                    <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '600' }}>Add a Bank Card/Account</Text>
            </View>

            {/* Top Navigation Tabs */}
            <View style={{ flexDirection: 'row', borderBottomWidth: 0.5, borderBottomColor: '#2C2C2C' }}>
                {['Bank Card', 'Bank Account'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            paddingVertical: 14,
                            borderBottomWidth: 2,
                            borderBottomColor: activeTab === tab ? '#00D285' : 'transparent'
                        }}
                    >
                        <Text style={{ color: activeTab === tab ? '#00D285' : '#888888', fontWeight: '600', fontSize: 15 }}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ padding: 16 }}>

                    <View style={{ backgroundColor: '#142921', padding: 12, borderRadius: 8, marginBottom: 16 }}>
                        <Text style={{ color: '#A5D6A7', fontSize: 13, lineHeight: 18 }}>
                            To ensure the security of your funds, you can only add a bank card linked to your <Text style={{ color: '#00D285', fontWeight: 'bold' }}>BVN(22521*******)</Text>
                        </Text>
                    </View>

                    <View style={{ backgroundColor: '#222222', padding: 16, borderRadius: 12 }}>

                        <Text style={{ color: '#BBBBBB', fontSize: 13, marginBottom: 8 }}>Card Number</Text>
                        <TextInput
                            style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: 14, borderRadius: 8, fontSize: 15 }}
                            placeholder="Enter 16-19 digit card number"
                            placeholderTextColor="#555555"
                            keyboardType="number-pad"
                            maxLength={19}
                            value={cardNumber}
                            onChangeText={setCardNumber}
                        />
                        {isCardNumberInvalid && (
                            <Text style={{ color: '#FF4D6A', fontSize: 12, marginTop: 4 }}>Invalid card number</Text>
                        )}

                        <View style={{ flexDirection: 'row', marginTop: 16, gap: 16 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: '#BBBBBB', fontSize: 13, marginBottom: 8 }}>Expiry Date</Text>
                                <View style={{ flexDirection: 'row', backgroundColor: '#1A1A1A', alignItems: 'center', borderRadius: 8, paddingHorizontal: 12 }}>
                                    <TextInput
                                        style={{ color: '#FFFFFF', paddingVertical: 14, fontSize: 15, textAlign: 'center', width: 35 }}
                                        placeholder="MM"
                                        placeholderTextColor="#555555"
                                        keyboardType="number-pad"
                                        maxLength={2}
                                        value={expiryMonth}
                                        onChangeText={setExpiryMonth}
                                    />
                                    <Text style={{ color: '#555555', marginHorizontal: 4 }}>/</Text>
                                    <TextInput
                                        style={{ color: '#FFFFFF', paddingVertical: 14, fontSize: 15, textAlign: 'center', width: 35 }}
                                        placeholder="YY"
                                        placeholderTextColor="#555555"
                                        keyboardType="number-pad"
                                        maxLength={2}
                                        value={expiryYear}
                                        onChangeText={setExpiryYear}
                                    />
                                </View>
                            </View>

                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                                    <Text style={{ color: '#BBBBBB', fontSize: 13, marginRight: 4 }}>CVV</Text>
                                    <Feather name="info" size={12} color="#BBBBBB" />
                                </View>
                                <TextInput
                                    style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: 14, borderRadius: 8, fontSize: 15 }}
                                    placeholder="Enter CVV"
                                    placeholderTextColor="#555555"
                                    keyboardType="number-pad"
                                    maxLength={3}
                                    secureTextEntry={true} 
                                    value={cvv}
                                    onChangeText={setCvv}
                                />
                            </View>
                        </View>

                        <Text style={{ color: '#BBBBBB', fontSize: 13, marginTop: 16, marginBottom: 8 }}>PIN</Text>
                        <TextInput
                            style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF', padding: 14, borderRadius: 8, fontSize: 15 }}
                            placeholder="Enter Card PIN"
                            placeholderTextColor="#555555"
                            keyboardType="number-pad"
                            maxLength={4}
                            secureTextEntry={true} // Hidden text mask
                            value={pin}
                            onChangeText={setPin}
                        />
                    </View>

                    {/* Secondary Information Notice Text */}
                    <Text style={{ color: '#888888', fontSize: 12, textAlign: 'center', marginTop: 24 }}>
                        Add <Text style={{ color: '#00D285', fontWeight: '600' }}>₦1.00</Text> to your OPay account for bank card verification
                    </Text>

                    {/* Confirm Button */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        disabled={!isFormComplete}
                        style={{
                            backgroundColor: isFormComplete ? '#00D285' : '#1F4236',
                            borderRadius: 25,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 16,
                            width: '100%'
                        }}
                        onPress={handleConfirm}
                    >
                        <Text style={{ color: isFormComplete ? '#043927' : '#0B5E3E', fontSize: 16, fontWeight: '700' }}>
                            Confirm
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}