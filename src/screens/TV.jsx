import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Modal,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const PROVIDERS = [
    { id: 'dstv', name: 'DStv', tag: 'Share the joy this season with DStv - your home of drama series and football!' },
    { id: 'gotv', name: 'GOtv', tag: 'Enjoy quality entertainment for the whole family with GOtv!' },
    { id: 'startimes', name: 'StarTimes', tag: 'Affordable digital TV experience for everyone!' },
    { id: 'startimes_on', name: 'StarTimes ON', tag: 'Stream your favorite movies & TV live on mobile!' },
    { id: 'showmax', name: 'SHOWMAX', tag: 'Stream hit series, movies, and live sports on demand!' },
];

const PACKAGES = [
    { id: '1', title: 'DStv Renewal', duration: null, price: 'Enter amount', isInput: true },
    { id: '2', title: 'DStv Padi', duration: '1 Month', price: '4,400' },
    { id: '3', title: 'DStv Yanga', duration: '1 Month', price: '6,000' },
    { id: '4', title: 'DStv Confam', duration: '1 Month', price: '11,000' },
    { id: '5', title: 'DStv Compact', duration: '1 Month', price: '19,000' },
    { id: '6', title: 'DStv Compact Plus', duration: '1 Month', price: '30,000' },
    { id: '7', title: 'DStv Stream Premium', duration: '1 Month', price: '44,500' },
];

export default function TV({ navigation }) {
    const [selectedProvider, setSelectedProvider] = useState(PROVIDERS[0]);
    const [smartcardNum, setSmartcardNum] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Hot offers');
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [showProviderModal, setShowProviderModal] = useState(false);

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
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
                    >
                        <Entypo name="chevron-left" size={22} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
                            TV
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ color: '#00D285', fontSize: 14, fontWeight: '500' }}>
                            History
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                    {/* Provider Selector Banner */}
                    <TouchableOpacity
                        onPress={() => setShowProviderModal(true)}
                        activeOpacity={0.8}
                        style={{
                            paddingHorizontal: 16,
                            paddingVertical: 12,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <View
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: 18,
                                    backgroundColor: '#00529C',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{ color: '#FFF', fontSize: 9, fontWeight: 'bold' }}>
                                    {selectedProvider.name.substring(0, 4)}
                                </Text>
                            </View>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '700' }}>
                                {selectedProvider.name}
                            </Text>
                        </View>

                        <Entypo name="chevron-right" size={18} color="#888888" />
                    </TouchableOpacity>

                    {/* Provider Tagline */}
                    <Text
                        style={{
                            color: '#00D285',
                            fontSize: 12,
                            paddingHorizontal: 16,
                            marginBottom: 12,
                        }}
                    >
                        {selectedProvider.tag}
                    </Text>

                    {/* Smartcard Input Box */}
                    <View
                        style={{
                            backgroundColor: '#262626',
                            marginHorizontal: 16,
                            borderRadius: 14,
                            padding: 16,
                            marginBottom: 16,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 8,
                            }}
                        >
                            <Text style={{ color: '#8E8E93', fontSize: 13 }}>Smartcard Number</Text>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                <Text style={{ color: '#8E8E93', fontSize: 13 }}>Beneficiaries</Text>
                                <Entypo name="chevron-right" size={14} color="#8E8E93" />
                            </TouchableOpacity>
                        </View>

                        <TextInput
                            placeholder="Enter Your Smartcard Number"
                            placeholderTextColor="#555555"
                            value={smartcardNum}
                            onChangeText={setSmartcardNum}
                            keyboardType="numeric"
                            style={{
                                color: '#FFFFFF',
                                fontSize: 15,
                                paddingVertical: 8,
                                borderBottomWidth: 0.5,
                                borderBottomColor: '#3A3A3C',
                            }}
                        />
                    </View>

                    {/* Offers & Packages Card */}
                    <View
                        style={{
                            backgroundColor: '#262626',
                            marginHorizontal: 16,
                            borderRadius: 16,
                            padding: 16,
                            marginBottom: 16,
                        }}
                    >
                        {/* Tab Headers */}
                        <View style={{ flexDirection: 'row', gap: 24, marginBottom: 16 }}>
                            {['Hot offers', 'Premium'].map((tab) => (
                                <TouchableOpacity key={tab} onPress={() => setSelectedCategory(tab)}>
                                    <Text
                                        style={{
                                            color: selectedCategory === tab ? '#FFFFFF' : '#8E8E93',
                                            fontSize: 15,
                                            fontWeight: selectedCategory === tab ? '700' : '500',
                                        }}
                                    >
                                        {tab}
                                    </Text>
                                    {selectedCategory === tab && (
                                        <View
                                            style={{
                                                height: 3,
                                                backgroundColor: '#00D285',
                                                borderRadius: 2,
                                                marginTop: 4,
                                                width: 20,
                                            }}
                                        />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Package Grid (2 Columns) */}
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                            }}
                        >
                            {PACKAGES.map((pkg) => {
                                const isSelected = selectedPackage === pkg.id;
                                return (
                                    <TouchableOpacity
                                        key={pkg.id}
                                        onPress={() => setSelectedPackage(pkg.id)}
                                        activeOpacity={0.7}
                                        style={{
                                            width: '48.5%',
                                            backgroundColor: isSelected ? '#004225' : '#1E1E1E',
                                            borderRadius: 10,
                                            padding: 12,
                                            marginBottom: 10,
                                            borderWidth: isSelected ? 1 : 0,
                                            borderColor: '#00D285',
                                            justifyContent: 'space-between',
                                            minHeight: 88,
                                        }}
                                    >
                                        <View>
                                            <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: '700' }}>
                                                {pkg.title}
                                            </Text>

                                            {pkg.duration && (
                                                <View
                                                    style={{
                                                        alignSelf: 'flex-start',
                                                        backgroundColor: '#382500',
                                                        paddingHorizontal: 6,
                                                        paddingVertical: 2,
                                                        borderRadius: 4,
                                                        marginTop: 6,
                                                    }}
                                                >
                                                    <Text style={{ color: '#FF9500', fontSize: 10, fontWeight: '600' }}>
                                                        {pkg.duration}
                                                    </Text>
                                                </View>
                                            )}
                                        </View>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                marginTop: 10,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    color: pkg.isInput ? '#8E8E93' : '#FFFFFF',
                                                    fontSize: 13,
                                                    fontWeight: pkg.isInput ? '400' : '700',
                                                }}
                                            >
                                                {pkg.isInput ? pkg.price : `₦${pkg.price}`}
                                            </Text>

                                            {pkg.isInput && <Entypo name="chevron-right" size={14} color="#8E8E93" />}
                                        </View>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    </View>

                    {/* Cashback Banner */}
                    <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
                        <View
                            style={{
                                backgroundColor: '#1E2B20',
                                borderRadius: 14,
                                padding: 16,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <View>
                                <Text style={{ color: '#00D285', fontSize: 15, fontWeight: '800' }}>
                                    Connection Keeps
                                </Text>
                                <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '800', marginBottom: 4 }}>
                                    Everything Else Moving
                                </Text>
                                <Text style={{ color: '#AAA', fontSize: 11 }}>
                                    Top Up Data & Get Up To <Text style={{ color: '#00D285', fontWeight: 'bold' }}>6% Cashback</Text>
                                </Text>
                            </View>

                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 25,
                                    backgroundColor: '#00D285',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                            
                            </View>
                        </View>
                    </View>

                    {/* More Events */}
                    <View
                        style={{
                            backgroundColor: '#262626',
                            marginHorizontal: 16,
                            borderRadius: 16,
                            padding: 16,
                        }}
                    >
                        <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '700', marginBottom: 14 }}>
                            More Events
                        </Text>

                        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
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
                                <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '600', marginBottom: 2 }}>
                                    Super Voucher Package
                                </Text>
                                <Text style={{ color: '#8E8E93', fontSize: 12 }}>
                                    Claim 15 Discounts with <Text style={{ textDecorationLine: 'line-through' }}>₦99</Text> on any Bill
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {/* --- SELECT PROVIDER BOTTOM SHEET MODAL --- */}
                <Modal
                    visible={showProviderModal}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setShowProviderModal(false)}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setShowProviderModal(false)}
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={1}
                            style={{
                                backgroundColor: '#222222',
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20,
                                paddingBottom: 30,
                            }}
                        >
                            {/* Sheet Header */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 18,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#3A3A3C',
                                }}
                            >
                                <TouchableOpacity onPress={() => setShowProviderModal(false)}>
                                    <Entypo name="chevron-left" size={22} color="#FFFFFF" />
                                </TouchableOpacity>
                                <Text
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: 16,
                                        fontWeight: '700',
                                        marginLeft: 16,
                                    }}
                                >
                                    Select Provider
                                </Text>
                            </View>

                            {/* Provider List Options */}
                            {PROVIDERS.map((item) => {
                                const isSelected = selectedProvider.id === item.id;
                                return (
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={() => {
                                            setSelectedProvider(item);
                                            setShowProviderModal(false);
                                        }}
                                        activeOpacity={0.7}
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            paddingVertical: 14,
                                            paddingHorizontal: 20,
                                            borderBottomWidth: 0.5,
                                            borderBottomColor: '#2C2C2E',
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }}>
                                            <View
                                                style={{
                                                    width: 36,
                                                    height: 36,
                                                    borderRadius: 18,
                                                    backgroundColor:
                                                        item.id === 'dstv'
                                                            ? '#00529C'
                                                            : item.id === 'gotv'
                                                                ? '#00833E'
                                                                : item.id === 'showmax'
                                                                    ? '#FF0055'
                                                                    : '#F26522',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Text style={{ color: '#FFF', fontSize: 8, fontWeight: 'bold' }}>
                                                    {item.name.substring(0, 4)}
                                                </Text>
                                            </View>
                                            <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '500' }}>
                                                {item.name}
                                            </Text>
                                        </View>

                                        {/* Radio Check Icon */}
                                        <Ionicons
                                            name={isSelected ? 'checkmark-circle' : 'ellipse-outline'}
                                            size={22}
                                            color={isSelected ? '#00D285' : '#555555'}
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}