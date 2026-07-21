import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import images from '../Constant/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function BankCard({ navigation }) {

    const [cardsData, setCardsData] = useState([]);

    // --- MEMORY CONTROLLER LOGIC ---

    // A. Load data from the device memory immediately when the screen boots up
    useEffect(() => {
        const loadCardsFromMemory = async () => {
            try {
                const storedCardsString = await AsyncStorage.getItem('@user_saved_cards');
                setCardsData(JSON.parse(storedCardsString));
               
            } catch (error) {
                console.log('Error reading storage memory data:', error);
            }
        };

        loadCardsFromMemory();
    }, []);

    
    const saveCardsToMemory = async (newCardsList) => {
        try {
            // Convert the object array configuration into a flat string
            const cardsString = JSON.stringify(newCardsList);
            await AsyncStorage.setItem('@user_saved_cards', cardsString);
        } catch (error) {
            console.log('Error writing data to hardware storage:', error);
        }
    };

    // --- ACTIONS ---

    const handleAddNewCardFromForm = (newCard) => {
        const updatedCardObj = { ...newCard, };
        const updatedList = [...cardsData, updatedCardObj];

        setCardsData(updatedList);
        saveCardsToMemory(updatedList); // Write directly to device memory
    };

    const handleRemoveCard = (id) => {
        const filteredList = cardsData.filter(card => card.id !== id);
        setCardsData(filteredList);
        saveCardsToMemory(filteredList); // Update device memory to mirror deletion
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: '600' }}>Bank Cards and Accounts</Text>
            </View>

            <ScrollView contentContainerStyle={{ padding: 16 }}>
                {cardsData.map((card) => (
                    <View key={card.id} style={{ backgroundColor: '#262626', borderRadius: 12, padding: 16, marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '600' }}>{card.bankName}</Text>
                            <Text style={{ color: '#888888', fontSize: 13, marginTop: 4 }}>{card.cardNumber}</Text>
                        </View>
                        <TouchableOpacity onPress={() => handleRemoveCard(card.id)}>
                            <Feather name="trash-2" size={16} color="#888888" />
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>

            <View style={{ padding: 16, backgroundColor: '#1A1A1A' }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#00D285', borderRadius: 25, height: 50, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() => {
                        navigation.navigate('AddCard', {
                            onCardAddSuccess: handleAddNewCardFromForm
                        });
                    }}
                >
                    <Text style={{ color: '#043927', fontSize: 16, fontWeight: '700' }}>Add a Bank Card/Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}