import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    TextInput,
    Modal,
    FlatList,
    Alert,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BANNER_WIDTH = SCREEN_WIDTH - 30;

const BANNERS = [
    { id: '1', title: 'Feel Every Goal. Share the World Cup Passion!', subtitle: 'Fund your betting wallet with OPay.', buttonText: 'Top Up Now', tag: 'WORLD CUP 2026' },
    { id: '2', title: 'Send Money For Free Instantly', subtitle: 'Zero charges to any bank account in Nigeria.', buttonText: 'Transfer Now', tag: 'PROMO 2026' },
];

const RECENT_BENEFICIARIES = [
    {
        id: '1',
        name: 'YAHAYA ISAH',
        accountDetails: '9127055306 SmartCash Payment Service Bank',
        fallbackText: 'SC',
        brandColor: '#E60000',
    },
    {
        id: '2',
        name: 'OLOHUN-WA GLOBAL TECH. - OLOHUNWA COMMUNICATION',
        accountDetails: '8257975307 MONIE POINT',
        fallbackText: 'M',
        brandColor: '#0066FF',
    },
    {
        id: '3',
        name: 'ROSE OASIS WINE AND MORE VENTURES',
        accountDetails: '5205147258 MONIE POINT',
        fallbackText: 'M',
        brandColor: '#0066FF',
    },
];

const AVAILABLE_BANKS = [
    { id: '1', name: 'Wema Bank', code: '035' },
    { id: '2', name: 'Access Bank', code: '044' },
    { id: '3', name: 'GTBank', code: '058' },
    { id: '4', name: 'Kuda Microfinance Bank', code: '50211' },
    { id: '5', name: 'First Bank of Nigeria', code: '011' },
    { id: '6', name: 'Zenith Bank', code: '057' },
];

export default function ToBank() {
    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('Recents');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedBank, setSelectedBank] = useState(null);
    const [accountNum, setAccountNum] = useState('');
    const [accountName, setAccountName] = useState('');

    const isFormValid = () => {
        const isNameValid = accountName.trim().length > 0 ;
        const isAccountNumValid = accountNum.trim().length === 10;
        const isBankSelected = selectedBank !== null;

        return isNameValid && isAccountNumValid && isBankSelected;
    };

    const handleNext = () => {
        if (!isFormValid()) return;

        navigation.navigate('TransferToBank', {
            accName: accountName.trim(),
            accNum: accountNum.trim(),
            bank: selectedBank?.name || '',
        });
    };

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(scrollPosition / BANNER_WIDTH);
        setActiveIndex(currentIndex);
    };

    const handleSelectBank = (bankObj) => {
        setSelectedBank(bankObj);
        setIsModalVisible(false);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ backgroundColor: '#2c2b2b', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="chevron-left" size={24} color="white" />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, marginLeft: 5 }}>
                            Transfer to Bank Account
                        </Text>
                    </TouchableOpacity>
                    <Text
                        onPress={() => Alert.alert('History', 'Nothing to download yet')}
                        style={{ color: '#0d6528', fontWeight: '800', fontSize: 17 }}
                    >
                        History
                    </Text>
                </View>
            </SafeAreaView>

            <ScrollView style={{ flex: 1, backgroundColor: '#151414' }}>
                {/* Banner Carousel */}
                <View style={{ marginHorizontal: 15, marginVertical: 10, position: 'relative' }}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                        snapToInterval={BANNER_WIDTH + 10}
                        decelerationRate="fast"
                        contentContainerStyle={{ gap: 10 }}
                    >
                        {BANNERS.map((banner) => (
                            <View
                                key={banner.id}
                                style={{
                                    width: BANNER_WIDTH,
                                    height: 140,
                                    backgroundColor: '#111',
                                    borderRadius: 12,
                                    overflow: 'hidden',
                                    flexDirection: 'row',
                                }}
                            >
                                <View style={{ flex: 1.2, padding: 15, justifyContent: 'center' }}>
                                    <Text style={{ color: '#FFF', fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>
                                        {banner.title}
                                    </Text>
                                    <Text style={{ color: '#aaa', fontSize: 12, marginBottom: 12 }}>
                                        {banner.subtitle}
                                    </Text>
                                    <TouchableOpacity style={{ backgroundColor: '#FFD700', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 20, alignSelf: 'flex-start' }}>
                                        <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 12 }}>{banner.buttonText}</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flex: 1, backgroundColor: '#0c2310', justifyContent: 'flex-end', alignItems: 'flex-end', position: 'relative' }}>
                                    <View style={{ backgroundColor: '#000', paddingVertical: 4, paddingHorizontal: 8, borderRadius: 4, position: 'absolute', bottom: 10, right: 10 }}>
                                        <Text style={{ color: '#FFF', fontSize: 9, fontWeight: 'bold' }}>{banner.tag}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </ScrollView>

                    {/* Dots Indicator */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justify: 'center',
                            alignItems: 'center',
                            gap: 6,
                            position: 'absolute',
                            bottom: 15,
                            left: BANNER_WIDTH * 0.45,
                        }}
                    >
                        {BANNERS.map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    width: activeIndex === index ? 14 : 6,
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: activeIndex === index ? '#00C853' : '#333',
                                }}
                            />
                        ))}
                    </View>
                </View>

                {/* Daily Free Transfers Notice */}
                <TouchableOpacity activeOpacity={0.7} style={{ height: 40, width: BANNER_WIDTH, backgroundColor: '#32236e', borderRadius: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, alignSelf: 'center', gap: 10 }}>
                    <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Image resizeMode="contain" source={require('../assets/naira3.png')} style={{ height: 25, width: 25 }} />
                    </View>
                    <Text style={{ color: '#888', fontWeight: 'bold' }}>
                        Free transfers for the day: <Text style={{ fontSize: 16, color: '#FFF' }}>3</Text>
                    </Text>
                </TouchableOpacity>

                {/* Input Card */}
                <View
                    style={{
                        width: BANNER_WIDTH,
                        backgroundColor: '#2c2b2b',
                        marginTop: 10,
                        borderRadius: 20,
                        padding: 20,
                        alignSelf: 'center',
                        gap: 4,
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                        Recipient Account
                    </Text>

                    {/* Account Name Input */}
                    <TextInput
                        placeholder="Account name"
                        placeholderTextColor="#888"
                        style={{ color: 'white', width: '100%', fontSize: 16, marginTop: 10 }}
                        autoCapitalize="words"
                        value={accountName}
                        onChangeText={setAccountName}
                    />
                    <View style={{ width: '100%', borderWidth: 0.5, borderColor: '#444' }} />

                    {/* Account Number Input */}
                    <TextInput
                        placeholder="Enter 10 digits Account Number"
                        placeholderTextColor="#888"
                        style={{ color: 'white', width: '100%', fontSize: 16, marginTop: 10 }}
                        maxLength={10}
                        keyboardType="numeric"
                        value={accountNum}
                        onChangeText={setAccountNum}
                    />
                    <View style={{ width: '100%', borderWidth: 0.5, borderColor: '#444' }} />

                    {/* Select Bank Picker Trigger */}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => setIsModalVisible(true)}
                        style={{flexDirection: 'row',
                            justify: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 12,
                            marginTop: 8,
                        }}
                    >
                        <Text style={{ color: selectedBank ? '#FFFFFF' : '#888888', fontSize: 15 }}>
                            {selectedBank ? selectedBank.name : 'Select Bank'}
                        </Text>
                        <Ionicons name="chevron-forward" size={18} color="#888888" />
                    </TouchableOpacity>

                    <View style={{ height: 1, backgroundColor: '#444', marginBottom: 20 }} />

                    
                    <TouchableOpacity
                        onPress={handleNext}
                        activeOpacity={0.7}
                        disabled={!isFormValid()}
                        style={{
                            borderRadius: 25,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: isFormValid() ? '#00D285' : '#024e21',
                        }}
                    >
                        <Text
                            style={{
                                color: isFormValid() ? '#043927' : '#0B5E3E',
                                fontWeight: '700',
                                fontSize: 16,
                            }}
                        >
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Status Monitor Banner */}
                <TouchableOpacity activeOpacity={0.7} style={{ height: 45, width: BANNER_WIDTH, backgroundColor: '#2c2b2b', borderRadius: 10, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, alignSelf: 'center', gap: 10, marginTop: 10 }}>
                    <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Image resizeMode="contain" source={require('../assets/wifi.png')} style={{ height: 25, width: 25 }} />
                    </View>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>BankTransfer Success Rate Monitor</Text>
                </TouchableOpacity>

                {/* Beneficiaries Section */}
                <View style={{ backgroundColor: '#222222', borderRadius: 16, paddingVertical: 15, marginHorizontal: 15, marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, borderBottomWidth: 1, borderColor: '#2D2D2D', paddingBottom: 12 }}>
                        <View style={{ flexDirection: 'row', gap: 25 }}>
                            {['Recents', 'Favourites'].map((tab) => (
                                <TouchableOpacity key={tab} activeOpacity={0.7} onPress={() => setActiveTab(tab)} style={{ position: 'relative', paddingBottom: 4 }}>
                                    <Text style={{ color: activeTab === tab ? '#00C853' : '#8E8E93', fontSize: 16, fontWeight: '600' }}>{tab}</Text>
                                    {activeTab === tab && <View style={{ position: 'absolute', bottom: -13, left: 0, right: 0, height: 3, backgroundColor: '#00C853', borderRadius: 2 }} />}
                                </TouchableOpacity>
                            ))}
                        </View>
                        <TouchableOpacity activeOpacity={0.6}>
                            <Feather name="search" color="#00C853" size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingHorizontal: 15 }}>
                        {RECENT_BENEFICIARIES.map((item, index) => (
                            <TouchableOpacity key={item.id} activeOpacity={0.6} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: index === RECENT_BENEFICIARIES.length - 1 ? 0 : 1, borderColor: '#2D2D2D' }}>
                                <View style={{ flex: 1, paddingRight: 15 }}>
                                    <Text numberOfLines={1} style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '500', marginBottom: 6 }}>{item.name}</Text>
                                    <Text numberOfLines={1} style={{ color: '#8E8E93', fontSize: 12 }}>{item.accountDetails}</Text>
                                </View>
                                <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: item.brandColor, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 14 }}>{item.fallbackText}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 15 }}>
                        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#1A1A1A', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20, gap: 4 }}>
                            <Text style={{ color: '#8E8E93', fontSize: 13, fontWeight: '500' }}>View All</Text>
                            <Feather name="chevron-right" color="#8E8E93" size={14} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Select Bank Modal */}
                <Modal visible={isModalVisible} transparent animationType="slide" onRequestClose={() => setIsModalVisible(false)}>
                    <TouchableOpacity activeOpacity={1} onPress={() => setIsModalVisible(false)} style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', justifyContent: 'flex-end' }}>
                        <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#262626', borderTopLeftRadius: 20, borderTopRightRadius: 20, maxHeight: '60%', padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottomWidth: 0.5, borderBottomColor: '#333333', marginBottom: 8 }}>
                                <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Select Bank</Text>
                                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                    <Ionicons name="close" size={22} color="#888888" />
                                </TouchableOpacity>
                            </View>

                            <FlatList
                                data={AVAILABLE_BANKS}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => handleSelectBank(item)} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 0.3, borderBottomColor: '#333333' }}>
                                        <Text style={{ color: '#FFFFFF', fontSize: 15 }}>{item.name}</Text>
                                        {selectedBank?.id === item.id && <Ionicons name="checkmark-circle" size={20} color="#00D285" />}
                                    </TouchableOpacity>
                                )}
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </Modal>
            </ScrollView>
        </SafeAreaProvider>
    );
}