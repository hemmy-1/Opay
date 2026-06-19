import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
// Import the local storage engine
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PersistedTwistDashboard() {
  // Core display states
  const [nickname, setNickname] = useState('Guest User');
  const [username, setUsername] = useState('username123');
  const [balance, setBalance] = useState('0.00');

  // Text inputs buffer state
  const [tempNickname, setTempNickname] = useState('');
  const [tempUsername, setTempUsername] = useState('');
  const [tempBalance, setTempBalance] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. LOAD DATA ON APP LAUNCH (Runs once when screen mounts)
  useEffect(() => {
    loadSavedData();
  }, []);

  const loadSavedData = async () => {
    try {
      const savedNickname = await AsyncStorage.getItem('@user_nickname');
      const savedUsername = await AsyncStorage.getItem('@user_username');
      const savedBalance = await AsyncStorage.getItem('@user_balance');

      // If data exists in storage, update our state variables
      if (savedNickname !== null) setNickname(savedNickname);
      if (savedUsername !== null) setUsername(savedUsername);
      if (savedBalance !== null) setBalance(savedBalance);
    } catch (error) {
      console.log('Error loading data from local storage:', error);
    }
  };

  // 2. SAVE DATA TO LOCAL STORAGE
  const handleSaveProfile = async () => {
    const finalNickname = tempNickname || 'Guest User';
    const finalUsername = tempUsername || 'username123';
    const finalBalance = tempBalance || '0.00';

    try {
      // Write keys permanently to device memory disk storage
      await AsyncStorage.setItem('@user_nickname', finalNickname);
      await AsyncStorage.setItem('@user_username', finalUsername);
      await AsyncStorage.setItem('@user_balance', finalBalance);

      // Instantly update active screen display states
      setNickname(finalNickname);
      setUsername(finalUsername);
      setBalance(finalBalance);

      setIsModalOpen(false);
    } catch (error) {
      console.log('Error saving data to local storage:', error);
    }
  };

  const openConfigModal = () => {
    setTempNickname(nickname);
    setTempUsername(username);
    setTempBalance(balance);
    setIsModalOpen(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1A1A1A', paddingHorizontal: 15, paddingTop: 50 }}>

      {/* WALLET HEADER CARD CONTAINER */}
      <View style={{ backgroundColor: '#0d6528', borderRadius: 16, padding: 20, marginBottom: 25, position: 'relative' }}>
        <Text style={{ color: '#E0E0E0', fontSize: 13, textTransform: 'uppercase', letterSpacing: 0.5 }}>
          Hello, {nickname} (@{username})
        </Text>
        <Text style={{ color: '#FFFFFF', fontSize: 28, fontWeight: '700', marginTop: 10 }}>
          ₦{balance}
        </Text>
        <TouchableOpacity
          onPress={openConfigModal}
          style={{ position: 'absolute', top: 15, right: 15, backgroundColor: 'rgba(255,255,255,0.15)', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 12 }}
        >
          <Text style={{ color: '#FFF', fontSize: 11, fontWeight: 'bold' }}>Setup Twists</Text>
        </TouchableOpacity>
      </View>

      {/* SETUP INPUT MODAL */}
      <Modal visible={isModalOpen} animationType="slide" transparent={true} onRequestClose={() => setIsModalOpen(false)}>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.75)', justifyContent: 'center', padding: 20 }}>
          <View style={{ backgroundColor: '#262626', borderRadius: 20, padding: 24, borderWidth: 1, borderColor: '#333' }}>

            <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 18 }}>Configure Identity Twist</Text>

            <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Set Nickname</Text>
            <TextInput value={tempNickname} onChangeText={setTempNickname} style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 16, fontSize: 14 }} />

            <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Set Username</Text>
            <TextInput value={tempUsername} onChangeText={setTempUsername} autoCapitalize="none" style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 16, fontSize: 14 }} />

            <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Set Desired Balance (₦)</Text>
            <TextInput value={tempBalance} onChangeText={setTempBalance} keyboardType="numeric" style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 24, fontSize: 14 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 12 }}>
              <TouchableOpacity onPress={() => setIsModalOpen(false)} style={{ paddingVertical: 10, paddingHorizontal: 16 }}>
                <Text style={{ color: '#8E8E93', fontWeight: '500' }}>Discard</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSaveProfile} style={{ backgroundColor: '#0d6528', paddingVertical: 10, paddingHorizontal: 22, borderRadius: 8 }}>
                <Text style={{ color: '#00C853', fontWeight: 'bold' }}>Save Profile</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

    </View>
  );
}