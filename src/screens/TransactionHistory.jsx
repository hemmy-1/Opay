import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const transactions = [
  {
    id: '1',
    title: 'Transfer to John Doe',
    amount: '-₦5,200',
    date: 'Today, 10:34 AM',
    status: 'Successful',
  },
  {
    id: '2',
    title: 'Received from Jane Smith',
    amount: '+₦12,000',
    date: 'Yesterday, 04:18 PM',
    status: 'Successful',
  },
  {
    id: '3',
    title: 'Airtime Purchase',
    amount: '-₦2,500',
    date: 'Jun 9, 2026',
    status: 'Successful',
  },
  {
    id: '4',
    title: 'Bill Payment',
    amount: '-₦8,600',
    date: 'Jun 8, 2026',
    status: 'Pending',
  },
  {
    id: '5',
    title: 'Cashback Reward',
    amount: '+₦850',
    date: 'Jun 7, 2026',
    status: 'Successful',
  },
];

export default function TransactionHistory() {

  const navigation = useNavigation();

  const renderTransaction = ({ item }) => {
    const statusStyle = [styles.status, item.status === 'Pending' ? styles.statusPending : styles.statusSuccess];

    return (
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDate}>{item.date}</Text>
        </View>
        <View style={styles.cardMeta}>
          <Text style={styles.cardAmount}>{item.amount}</Text>
          <View style={statusStyle}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (

    <SafeAreaProvider>
      <SafeAreaView style={{ height: 100, width: "100%", backgroundColor: '#2c2b2b', justifyContent: 'center', paddingHorizontal: 20 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, marginTop: 20 }}
          onPress={() => navigation.goBack()}>{'<   Account Limit'}</Text>
          <Text>Download</Text>
      </SafeAreaView>

      <View style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 15 }}>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Transaction History</Text>
            <Text style={styles.subtitle}>Review your latest Opay-style activity</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>Total transactions</Text>
            <Text style={styles.summaryValue}>{transactions.length}</Text>
          </View>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={renderTransaction}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#121B35',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#5C6B8A',
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  summaryLabel: {
    color: '#7B8BA5',
    fontSize: 14,
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0D3F7A',
  },
  listContent: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E2A4D',
  },
  cardDate: {
    marginTop: 4,
    fontSize: 13,
    color: '#7B8BA5',
  },
  cardMeta: {
    alignItems: 'flex-end',
  },
  cardAmount: {
    fontSize: 16,
    fontWeight: '700',
    color: '#121B35',
  },
  status: {
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusSuccess: {
    backgroundColor: '#EBF8F1',
  },
  statusPending: {
    backgroundColor: '#FFF4E5',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#33475B',
  },
});


