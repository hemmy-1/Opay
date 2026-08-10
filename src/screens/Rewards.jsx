import React, { useState } from 'react';
import {StyleSheet, Text, View, Modal, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import images from '../Constant/images';

export default function Rewards() {
  const [isModalOn, setIsModalOn] = useState(false);

  const rewardsList = [
    { id: '1', title: 'Glo Airtime', cashback: 'Up to 6%', desc: 'Buy Airtime and get up to 6% Cashback' },
    { id: '2', title: '9Mobile Airtime', cashback: 'Up to 5%', desc: 'Buy Airtime and get up to 5% Cashback' },
    { id: '3', title: 'MTN/Airtel Airtime', cashback: 'Up to 3.5%', desc: 'Buy Airtime and get up to 3.5% Cashback' },
  ];

  const modalDataList = [
    ...rewardsList,
    { id: '4', title: 'Data Bundles', cashback: 'Up to 4%', desc: 'Purchase data plans with extra cashback' },
    { id: '5', title: 'Electricity Bills', cashback: 'Up to 2%', desc: 'Pay utility bills hassle-free' },
    { id: '6', title: 'Cable TV Sub', cashback: 'Up to 3%', desc: 'Instant activation on DSTV/GOtv' },
  ];

  const renderRewardItem = ({ item }) => (
    <View style={styles.rewardItemContainer}>
      <Image source={require('../assets/but.jpg')} style={styles.rewardIcon} />
      <View style={{ flex: 1 }}>
        <View style={styles.rewardHeaderRow}>
          <Text style={styles.rewardTitle}>{item.title}</Text>
          <View style={styles.cashbackBadge}>
            <MaterialCommunityIcons name="bitcoin" size={14} color="#FFD700" />
            <Text style={styles.cashbackText}>{item.cashback}</Text>
          </View>
        </View>
        <Text style={styles.rewardDesc} numberOfLines={1}>{item.desc}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.actionBtn}>
        <Text style={styles.actionBtnText}>Go</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>

          {/* Header Card */}
          <View style={styles.headerCard}>
            <View style={styles.headerTopRow}>
              <Text style={styles.headerTitle}>Rewards</Text>
              <TouchableOpacity style={styles.dotsBtn}>
                <Entypo name="dots-three-horizontal" size={16} color="white" />
              </TouchableOpacity>
            </View>

            <View style={styles.statsHeaderRow}>
              <View style={styles.statLabelGroup}>
                <Text style={styles.statLabel}>Cashback</Text>
                <EvilIcons name="question" size={20} color="#FFF" />
              </View>
              <Text style={styles.statLabel}>Voucher</Text>
            </View>

            <View style={styles.statsValueRow}>
              <View style={styles.valueGroup}>
                <MaterialCommunityIcons name="bitcoin" size={22} color="#FFD700" />
                <Text style={styles.balanceText}>₦ 436.90</Text>
              </View>
              <Text style={styles.balanceText}>₦0</Text>
            </View>
          </View>

          {/* Overlapping Category Grid */}
          <View style={styles.gridContainer}>
            {[
              { id: '1', title: 'Friday Bonus', icon: require('../assets/icons8-friends-100.png') },
              { id: '2', title: 'Refer Friends', icon: require('../assets/icons8-money-100.png') },
              { id: '3', title: 'Play4Child', icon: images.star },
              { id: '4', title: 'Voucher Pack', icon: require('../assets/icons8-voucher-100.png') },
            ].map((card) => (
              <TouchableOpacity key={card.id} style={styles.gridCard} activeOpacity={0.8}>
                <Image source={card.icon} style={styles.gridIcon} />
                <Text style={styles.gridTitle}>{card.title}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Daily Bonus Section */}
          <View style={{ paddingHorizontal: 16, marginTop: 10 }}>
            <Text style={styles.sectionTitle}>Daily Bonus</Text>
            <View style={styles.dailyBonusCard}>
              <FlatList
                data={rewardsList}
                renderItem={renderRewardItem}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
              />
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setIsModalOn(true)}
                style={styles.viewAllBtn}
              >
                <Text style={styles.viewAllText}>View All</Text>
                <Entypo name="chevron-down" size={18} color="#00b386" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Promo Banner */}
          <View style={styles.banner}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={styles.bannerTitle}>Claim 15 Discounts with</Text>
              <Text style={styles.bannerPrice}>₦99 on any Bill</Text>
              <TouchableOpacity style={styles.claimButton} activeOpacity={0.8}>
                <Text style={styles.claimText}>Claim 15 Discounts</Text>
              </TouchableOpacity>
            </View>
            <Image source={require('../assets/but.jpg')} style={styles.bannerImage} />
          </View>
        </ScrollView>

        {/* View All Modal */}
        <Modal visible={isModalOn} animationType="slide" transparent>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>All Rewards</Text>
                <TouchableOpacity onPress={() => setIsModalOn(false)}>
                  <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
              </View>

              <FlatList
                data={modalDataList}
                renderItem={renderRewardItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerCard: {
    height: 190,
    backgroundColor: '#0c542c',
    padding: 20,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  dotsBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statLabelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  statsValueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  valueGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  balanceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: -35,
  },
  gridCard: {
    height: 85,
    width: '22%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    elevation: 3,
  },
  gridIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },
  gridTitle: {
    textAlign: 'center',
    fontSize: 10,
    color: '#CCC',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  dailyBonusCard: {
    backgroundColor: '#1C1C1E',
    borderRadius: 16,
    padding: 16,
  },
  rewardItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2C2C2E',
  },
  rewardIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  rewardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rewardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
  },
  cashbackBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: 'rgba(255,215,0,0.1)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  cashbackText: {
    fontSize: 10,
    color: '#FFD700',
    fontWeight: 'bold',
  },
  rewardDesc: {
    fontSize: 12,
    color: '#AAA',
    marginTop: 2,
  },
  actionBtn: {
    height: 28,
    width: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f7d55',
    borderRadius: 14,
  },
  actionBtnText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  viewAllBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 14,
    gap: 4,
  },
  viewAllText: {
    color: '#00b386',
    fontWeight: 'bold',
  },
  banner: {
    height: 140,
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: '#d8fff4',
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bannerTitle: {
    fontSize: 14,
    color: '#333',
  },
  bannerPrice: {
    color: '#00b386',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  claimButton: {
    backgroundColor: '#09e67f',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  claimText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bannerImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    height: '65%',
    backgroundColor: '#1C1C1E',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  closeText: {
    fontSize: 16,
    color: '#FF453A',
  },
});