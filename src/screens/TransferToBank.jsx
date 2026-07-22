import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import TransferConfirmationModal from '../assets/Components/ReminderModal';
import PaymentModal from '../assets/Components/PaymentModal';
import TransferSuccessModal from '../assets/Components/TransferS';


const TransferToBank = ({ route, navigation }) => {
  const [selectedAmount, setSelectedAmount] = useState('₦');
  const [remark, setRemark] = useState('');


  const handleConfirmPress = () => {
    setIsConfirmModalVisible(true);
  };

 
  const handleReminderContinue = () => {
    setIsConfirmModalVisible(false);
    setShowPaymentModal(true); 
  };
  const handleFinalPay = () => {
    setShowPaymentModal(false);
    setShowSuccessModal(true);

  };
  
  const handleDone = () => {
    setShowSuccessModal(false);
    navigation.goBack(); 
  };

  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  const AMOUNTS = [
    '₦500',
    '₦1000',
    '₦2000',
    '₦5000',
    '₦9,999',
    '₦10,000',
  ];

  const { accNum = '', bank = 'Opay', accName= ''} = route?.params || {};

  return (
    <ScrollView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Transfer to Bank Account</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: '#0ACF83', fontSize: 16 }}>Records</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20 }}>
        <Ionicons name="person-circle" size={60} color="white" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
            {accName  || 'Unknow'}
          </Text>
          <Text style={{ color: '#888', marginTop: 3, fontSize: 15 }}>
            {bank + "  " + accNum || 'Opay'}
          </Text>
        </View>
      </View>

      {/* Amount Input Box */}
      <View style={{ paddingHorizontal: 20, marginBottom: 10 }}>
        <View style={{ backgroundColor: '#2B2B2B', padding: 15, borderRadius: 18, position: 'relative' }}>
          <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Amount</Text>
          <View style={styles.transTag}>
            <Text style={{ color: '#00D084', fontSize: 10, fontWeight: 'bold' }}>
              NO Transaction Fees
            </Text>
          </View>

          <TextInput
            placeholder="₦ 10.00 - 5,000,000.00"
            placeholderTextColor="#777"
            keyboardType="numeric"
            value={selectedAmount}
            onChangeText={setSelectedAmount}
            style={{ color: '#fff', fontSize: 18, marginTop: 10 }}
          />

          <View style={{ height: 1, backgroundColor: '#444', marginVertical: 15 }} />

          {/* Quick Amounts Grid */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {AMOUNTS.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedAmount(item)}
                style={{
                  width: '31%',
                  backgroundColor: selectedAmount === item ? '#00D084' : '#1F1F1F',
                  paddingVertical: 12,
                  borderRadius: 10,
                  alignItems: 'center',
                  marginBottom: 12,
                }}
              >
                <Text style={{ color: selectedAmount === item ? '#000' : '#ccc', fontSize: 12, fontWeight: 'bold' }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* Remark Block */}
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <View style={styles.remarkBox}>
          <Text style={{ color: '#888', fontSize: 14 }}>Remark</Text>
          <TextInput
            placeholder="What's this for? (Optional)"
            placeholderTextColor="#666"
            value={remark}
            onChangeText={setRemark}
            style={{ color: '#fff', marginTop: 10, fontSize: 16 }}
          />
          <View style={{ height: 1, backgroundColor: '#444', marginVertical: 15 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => setRemark('Purchase')}
              style={{ width: '48%', height: 40, backgroundColor: '#1F1F1F', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ color: '#CCC', fontSize: 14 }}>Purchase</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setRemark('Personal')}
              style={{ width: '48%', height: 40, backgroundColor: '#1F1F1F', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}
            >
              <Text style={{ color: '#CCC', fontSize: 14 }}>Personal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Bottom Confirm Button */}
      <View style={{ paddingHorizontal: 20, marginBottom: 40 }}>
        <TouchableOpacity onPress={handleConfirmPress} style={{ backgroundColor: '#00D084', paddingVertical: 14, borderRadius: 30, alignItems: 'center' }}>
          <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 18 }}>Confirm</Text>
        </TouchableOpacity>
      </View>

      <TransferConfirmationModal
        visible={isConfirmModalVisible}
        onClose={() => setIsConfirmModalVisible(false)}
        onContinue={handleReminderContinue}
        accName={accName}
        accNum={accNum}
        bank={bank}
        amount={selectedAmount}
      />

      <PaymentModal
        visible={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onPay={handleFinalPay}
        accName={accName}
        accNum={accNum}
        amount={selectedAmount}
        walletBalance="0.00"
        owealthBalance="43.36"
        onUsePinPress={() => console.log('PIN Selected')}
        onAddMoneyPress={() => console.log('Add Money Selected')}
      />

      <TransferSuccessModal
        visible={showSuccessModal}
        onDone={handleDone}
        amount={selectedAmount}
        onShareReceipt={() => console.log('Share Receipt')}
        onAddMoney={() => console.log('Add Money')}
        onAddToFavourites={() => console.log('Added to Favourites')}
        onViewDetails={() => console.log('View Details')}
      />
      

    </ScrollView>

    
  );
};

export default TransferToBank;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#262626',
  },
  remarkBox: {
    width: '100%',
    backgroundColor: '#2B2B2B',
    padding: 15,
    borderRadius: 18,
  },
  transTag: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#1f5808',
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 8,
  },
});