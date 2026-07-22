import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState, useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList, Modal, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useBalance } from '../assets/Components/BalanceProvider';
import Entypo from '@expo/vector-icons/Entypo';

export default function Home() {
    const navigation = useNavigation();
    const logoImage = require('../assets/logoooo.png');

    // 1. FIXED: Extract both balance and setBalance from Context
    const { isBalanceVisible, toggleBalanceVisibility, balance, setBalance } = useBalance();

    const DataHistory = [
        {
            id: '1',
            img: require('../assets/percentage.png'),
            name: 'OWealth Interest Earned',
            date: 'May 23rd, 20:59:08',
            amount: '+₦23.39',
            status: 'Successful'
        },
        {
            id: '2',
            img: require('../assets/percentage.png'),
            name: 'OWealth Interest Earned',
            date: 'May 25th, 19:59:08',
            amount: '+₦263.39',
            status: 'Successful'
        },
    ];

    // Primary active states
    const [nickname, setNickname] = useState('Guest user');
    const [username, setUsername] = useState('username1');
    // 1. FIXED: Removed the local balance useState here so it uses the Global Context

    // Buffer fields state
    const [tempNickname, setTempNickname] = useState('');
    const [tempUsername, setTempUsername] = useState('');
    const [tempBalance, setTempBalance] = useState('');

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        loadSavedUserInput();
    }, []);

    const loadSavedUserInput = async () => {
        try {
            const savedNickname = await AsyncStorage.getItem('@user_nickname');
            const savedUsername = await AsyncStorage.getItem('@user_username');
            const savedBalance = await AsyncStorage.getItem('@user_balance');

            if (savedNickname !== null) setNickname(savedNickname);
            if (savedUsername !== null) setUsername(savedUsername);
            if (savedBalance !== null) setBalance(savedBalance); // Updates global balance
        } catch (error) {
            console.log('Error loading data from storage:', error);
        }
    };

    const handleSavedProfiles = async () => {
        const finalNickname = tempNickname || 'Guest User';
        const finalUsername = tempUsername || 'username123';
        const finalBalance = tempBalance || '0.00';

        try {
            await AsyncStorage.setItem('@user_nickname', finalNickname);
            await AsyncStorage.setItem('@user_username', finalUsername);
            await AsyncStorage.setItem('@user_balance', finalBalance);

            setNickname(finalNickname);
            setUsername(finalUsername);
            setBalance(finalBalance); // Updates global balance

            setOpenModal(false);
        } catch (error) {
            console.log('Error saving data to local storage:', error);
        }
    };

    const openConfigModal = () => {
        setTempNickname(nickname);
        setTempUsername(username);
        setTempBalance(balance);
        setOpenModal(true);
    };

    const dataHistoryView = ({ item }) => {
        return (
            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        height: 35, width: 35, backgroundColor: 'white', borderRadius: 30,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image source={item.img} style={{ height: 35, width: 35 }} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>{item.name}</Text>
                        <Text style={{ color: '#888', fontSize: 13 }}>{item.date}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#0d6528', fontSize: 16, fontWeight: '800' }}>
                        {item.amount}
                    </Text>
                    <View style={{
                        height: 18, flexWrap: 'wrap', backgroundColor: '#033813',
                        paddingHorizontal: 5, borderRadius: 10
                    }}>
                        <Text style={{ color: '#0d6528', fontWeight: '800' }}>{item.status}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container1}>
                <StatusBar barStyle="light-content" />

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#25292e00',
                    borderRadius: 18, padding: 10,
                    alignItems: 'center',
                    marginVertical: 10, justifyContent: 'space-between'
                }}>
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyProfile', { logo: logoImage, name: username })}>
                            <Image source={logoImage} style={{ width: 40, height: 40, borderRadius: 20 }} />
                        </TouchableOpacity>
                        <Text style={{ color: '#ffffff', fontSize: 24 }}>hi, {nickname}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <Feather name="headphones" size={24} color="#ffffff" />
                        <AntDesign name="scan" size={24} color="#ffffff" />
                        <Ionicons name="notifications" size={24} color="#ffffff" />
                    </View>
                </View>

                <View style={{ backgroundColor: '#11382B', height: 160, width: '100%', borderWidth: 1, borderRadius: 20, gap: 15 }}>
                    <View style={{
                        flexWrap: 'wrap',
                        gap: 20,
                        backgroundColor: '#0d6528',
                        borderRadius: 18,
                        padding: 10,
                        height: 110,
                    }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <MaterialCommunityIcons name="guitar-pick" size={24} color="#fff" />
                                <Text style={{ color: '#fff', fontSize: 18 }}>Available balance</Text>

                                {/* 2. FIXED: Correctly passed toggleBalanceVisibility to onPress */}
                                <TouchableOpacity onPress={toggleBalanceVisibility}>
                                    {isBalanceVisible ? (
                                        <MaterialCommunityIcons name="eye-outline" size={24} color="#fff" />
                                    ) : (
                                        <MaterialCommunityIcons name="eye-off-outline" size={24} color="#fff" />
                                    )}
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('History')} >
                                <Text style={{ color: '#fff', fontSize: 18 }}>Transaction History  </Text>
                                <Entypo name="chevron-right" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Text style={{ color: '#fff', marginStart: 10, fontSize: 24, fontWeight: 'bold' }}>
                                    {isBalanceVisible ? `₦${balance}` : '******'} 
                                </Text>
                                <Entypo name="chevron-right" size={24} color="white" />
                            </View>

                            <TouchableOpacity onPress={() => navigation.navigate('AddMoney')} style={{
                                backgroundColor: '#000000', borderRadius: 30, alignSelf: "flex-end", alignItems: 'center', paddingHorizontal: 6,
                                justifyContent: 'center', height: 35, width: 120
                            }}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>+ add money</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row', gap: 15, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <View style={{ backgroundColor: '#02210b', height: 25, width: 25, justifyContent: 'center', borderRadius: 10, alignItems: 'center' }}>
                                <FontAwesome name="bank" size={15} color="#0d6528" />
                            </View>
                            <Text style={{ color: '#888', fontSize: 12 }}>
                                Business Service - Today's Sales:
                                <Text style={{ color: '#1dbc4d', fontSize: 12 }}> ₦5,432.10</Text>
                            </Text>
                        </View>
                        <View style={{ backgroundColor: '#02210b', height: 20, width: 20, justifyContent: 'center', borderRadius: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#1dbc4d', fontWeight: 'bold' }}>{'>'}</Text>
                        </View>
                    </View>
                </View>

                {/* CONDITIONAL DROPDOWN ACCORDION DATA FEED */}
                {!isBalanceVisible && (
                    <View style={{
                        width: '95%', backgroundColor: '#393535', borderRadius: 18,
                        padding: 10, height: 120, paddingHorizontal: 20, marginHorizontal: 10
                    }}>
                        <FlatList
                            data={DataHistory}
                            renderItem={dataHistoryView}
                            keyExtractor={item => item.id}
                            style={{ flex: 1 }}
                        />
                    </View>
                )}

                {/* BANK ROUTING GRID SHORTCUTS CONTAINER */}
                <View style={{
                    backgroundColor: '#393535', borderRadius: 18, padding: 10,
                    height: 110, justifyContent: 'space-around', paddingHorizontal: 20,
                    marginHorizontal: 10, flexDirection: 'row', gap: 60, marginTop: 10
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ToOpay')}>
                        <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                            <MaterialIcons name="perm-contact-calendar" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                            <Text style={{ color: '#ffffff', fontSize: 18 }}>To Opay</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ToBank')}>
                        <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                            <FontAwesome name="bank" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                            <Text style={{ color: '#ffffff', fontSize: 18 }}>To Bank</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Withdraw')}>
                        <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                            <Ionicons name="arrow-up-left-box" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                            <Text style={{ color: '#ffffff', fontSize: 18 }}>Withdraw</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* UTILITIES HUB SECTION ROW GRID */}
                <View style={{
                    gap: 50, backgroundColor: '#393535', borderRadius: 18, padding: 10,
                    alignItems: 'center', height: 210, justifyContent: 'center',
                    marginHorizontal: 10, flexDirection: 'row', marginTop: 10
                }}>
                    <View style={{ flexDirection: 'column', gap: 25 }}>
                        <TouchableOpacity onPress={openConfigModal}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <MaterialIcons name="network-check" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Airtime</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('SaveBox')}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <FontAwesome6 name="naira-sign" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>SaveBox</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', gap: 25 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Data')}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <MaterialCommunityIcons name="access-point-network" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Data</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert('coming soon')}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <FontAwesome6 name="naira-sign" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Loan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', gap: 25 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Betting')}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <FontAwesome name="soccer-ball-o" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Betting</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert('coming soon')}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <MaterialIcons name="speaker-phone" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Invitation</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', gap: 25 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Tv')}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <Feather name="tv" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>TV</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert('coming soon')}>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <MaterialIcons name="streetview" size={24} color="white" style={{ backgroundColor: 'black', borderWidth: 8, borderRadius: 15 }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>More</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* CONFIGURATION POPUP OVERLAY */}
                <Modal visible={openModal} animationType="slide" transparent={true} onRequestClose={() => setOpenModal(false)}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.75)', justifyContent: 'center', padding: 20 }}>
                        <View style={{ backgroundColor: '#262626', borderRadius: 20, padding: 24, borderWidth: 1, borderColor: '#333' }}>
                            <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 18 }}>User's Identity Setup</Text>

                            <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Nickname</Text>
                            <TextInput value={tempNickname} onChangeText={setTempNickname} style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 16, fontSize: 14 }} />

                            <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Username</Text>
                            <TextInput value={tempUsername} onChangeText={setTempUsername} autoCapitalize="none" style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 16, fontSize: 14 }} />

                            <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Set Desired Balance (₦)</Text>
                            <TextInput value={tempBalance} onChangeText={setTempBalance} keyboardType="numeric" style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 24, fontSize: 14 }} />

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 12 }}>
                                <TouchableOpacity onPress={() => setOpenModal(false)} style={{ paddingVertical: 10, paddingHorizontal: 16 }}>
                                    <Text style={{ color: '#8E8E93', fontWeight: '500' }}>Discard</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleSavedProfiles} style={{ backgroundColor: '#0d6528', paddingVertical: 10, paddingHorizontal: 22, borderRadius: 8 }}>
                                    <Text style={{ color: '#00C853', fontWeight: 'bold' }}>Save Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#000000',
        gap: 10
    }
});