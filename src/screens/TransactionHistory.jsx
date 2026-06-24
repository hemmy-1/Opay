import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

const transactions = [
  { id: '1', title: 'Add Money-Bank Card', amount: '₦1,000.00', date: 'Jun 12th, 10:34 AM', status: 'Successful', img: require('../assets/aMoney.png') },

  { id: '2', title: 'Bonus from Airtime Purchase', amount: '+₦50.00', date: 'Jun 12th, 04:18:54', status: 'Successful', img: require('../assets/gift.png') },
  { id: '3', title: 'Airtime', amount: '-₦5,000', date: 'Jun 9th,10:00:23', status: 'Successful', img: require('../assets/phone.png') },
  { id: '4', title: 'Add Money-Bank Card', amount: '+₦543,600', date: 'Jun 29th, 08:22:81', status: 'Pending', img: require('../assets/aMoney.png') },
  { id: '5', title: 'Fixed Payout', amount: '₦492,567.88', date: 'Jun 14th, 02:44:01', status: 'Successful', img: require('../assets/bank.png') },
];

// Simple helper array for the grid categories
const categoryTags = [
  'All Categories', 'Bank Deposit', 'Transfer from', 'Transfer to',
  'Airtime', 'Betting', 'Mobile Data', 'Cash Deposit', 'OWealth',
  'Add Money', 'OPay Card Payment', 'Electricity', 'TV', 'Gift Card'
];
const statusTags = [
  'All Status', 'Successful', 'Pending', 'Faild', 'To be paid', 'Reversd'
];

export default function TransactionHistory() {
  const navigation = useNavigation();
  const [isCategories, setIsCategories] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const renderTransaction = ({ item }) => {
    const isPending = item.status === 'Pending';

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical:6
          
        }}
      >
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <View style={{height: 40, width: 40, borderRadius: 20, backgroundColor: 'white', justifyContent:'center', alignItems:'center'}}>
            <Image source={item.img} style={{
              height: 25, width: 25, }} />
          </View>

          <View>

            <Text style={{ fontSize: 16, fontWeight: '600', color: '#dbdde4' }}>{item.title}</Text>
            <Text style={{ marginTop: 4, fontSize: 13, color: '#7B8BA5' }}>{item.date}</Text>
          </View>
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 16, fontWeight: '700', color: '#121B35' }}>{item.amount}</Text>
          <View style={{
            marginTop: 8,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 12,
            backgroundColor: isPending ? '#FFF4E5' : '#EBF8F1'
          }}>
            <Text style={{ fontSize: 12, fontWeight: '600', color: '#33475B' }}>{item.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaProvider>
      {/* HEADER WRAPPER (Parent container must be position: 'relative') */}
      <SafeAreaView style={{ width: "100%", backgroundColor: '#2c2b2b', paddingHorizontal: 20, paddingBottom: 15, zIndex: 10, position: 'relative' }}>

        {/* Top Title Bar */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text
            style={{ color: 'white', fontWeight: 'bold', fontSize: 17, marginTop: 20 }}
            onPress={() => navigation.goBack()}
          >
            {'<   Transacton History'}
          </Text>
          <Text
            onPress={() => Alert.alert('Nothing to download yet')}
            style={{ color: '#0d6528', fontWeight: '800', fontSize: 17, marginTop: 20 }}
          >
            Download
          </Text>
        </View>

        {/* Filter Toggle Buttons */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          {/* Categories Button */}
          <TouchableOpacity
            onPress={() => { setIsCategories(!isCategories); setIsStatus(false); }}
            activeOpacity={0.7}
            style={{
              width: '48%', height: 42, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 8, gap: 8,
              backgroundColor: isCategories ? '#0d6528' : 'black'
            }}
          >
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>All Categories</Text>
            <Ionicons name={isCategories ? "chevron-up" : "chevron-down"} size={16} color="white" />
          </TouchableOpacity>

          {/* Status Button */}
          <TouchableOpacity
            onPress={() => { setIsStatus(!isStatus); setIsCategories(false); }}
            activeOpacity={0.7}
            style={{
              width: '48%', height: 42, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 8, gap: 8,
              backgroundColor: isStatus ? '#0d6528' : 'black'
            }}
          >
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>All Status</Text>
            <Ionicons name={isStatus ? "chevron-up" : "chevron-down"} size={16} color="white" />
          </TouchableOpacity>
        </View>

        {isCategories && (
          <View style={{
            position: 'absolute',
            top: 170,

            backgroundColor: '#222222',
            borderRadius: 12,
            padding: 16,
            flexDirection: 'row',
            flexWrap: 'wrap', // This naturally forces tags into columns/rows
            gap: 10,
            zIndex: 999,
            elevation: 10,
            width: 470,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0
          }}>
            {categoryTags.map((tag) => {
              const isSelected = selectedCategory === tag;
              return (
                <TouchableOpacity
                  key={tag}
                  onPress={() => {
                    setSelectedCategory(tag);
                    setIsCategories(false); // Close dropdown on selection
                  }}
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 14,
                    borderRadius: 20,
                    backgroundColor: isSelected ? '#0d6528' : '#333333'
                  }}
                >
                  <Text style={{ color: isSelected ? 'white' : '#ccc', fontSize: 13, fontWeight: isSelected ? '700' : '400' }}>
                    {tag}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {isStatus && (
          <View style={{
            position: 'absolute',
            top: 170,

            backgroundColor: '#222222',
            borderRadius: 12,
            padding: 16,
            flexDirection: 'row',
            flexWrap: 'wrap', // This naturally forces tags into columns/rows
            gap: 10,
            zIndex: 999,
            elevation: 10,
            width: 470,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0
          }}>
            {statusTags.map((tag) => {
              const isSelected = selectedCategory === tag;
              return (
                <TouchableOpacity
                  key={tag}
                  onPress={() => {
                    setSelectedCategory(tag);
                    setIsCategories(false); // Close dropdown on selection
                  }}
                  style={{
                    paddingVertical: 8,
                    paddingHorizontal: 14,
                    borderRadius: 20,
                    backgroundColor: isSelected ? '#0d6528' : '#333333'
                  }}
                >
                  <Text style={{ color: isSelected ? 'white' : '#ccc', fontSize: 13, fontWeight: isSelected ? '700' : '400' }}>
                    {tag}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </SafeAreaView>

      <View style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 15, paddingTop: 15 }}>
        <View style={{ flex: 1, backgroundColor: '#262626', paddingHorizontal: 16, paddingTop: 16, borderRadius: 10 }}>

          <View style={{ marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                <Text style={{ fontSize: 26, fontWeight: '700', color: '#ffffff' }}>Jun 2026</Text>
                <Ionicons name="chevron-down" size={16} color="white" />
              </View>

              <TouchableOpacity style={{ backgroundColor: '#0d6528', height: 27, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ color: 'white', fontWeight: '700' }}>Analysis</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <Text style={{ marginTop: 6, fontSize: 14, color: '#5C6B8A' }}>in
                <Text style={{ color: '#fff', paddingStart: 10 }} >  ₦11,234.54</Text>
              </Text>
              <Text style={{ marginTop: 6, fontSize: 14, color: '#5C6B8A' }}>out
                <Text style={{ color: '#fff', paddingStart: 10 }} >  ₦6,543,234.54</Text>
              </Text>
            </View>
          </View>

         <View style={{width:'100%', borderWidth:0.5, borderColor:'#888'}}/>

          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={renderTransaction}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}