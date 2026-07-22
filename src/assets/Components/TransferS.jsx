import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const TransferSuccessModal = ({
    visible,
    onDone,
    amount = '50.00',
    onShareReceipt,
    onAddMoney,
    onAddToFavourites,
    onViewDetails,
}) => {
    const BONUS_ITEMS = [
        {
            id: '1',
            title: 'Save easily',
            subtitle: 'Earn more interest every day!',
            iconName: 'sack-dollar',
            iconType: 'font-awesome-5',
        },
        {
            id: '2',
            title: 'Enjoy online payment',
            subtitle: 'Using OPay Verve Card now',
            iconName: 'credit-card',
            iconType: 'font-awesome-5',
        },
        {
            id: '3',
            title: 'Bet big, win bigger!',
            subtitle: 'Get Discounts That Wow! 🕶️',
            iconName: 'football-ball',
            iconType: 'font-awesome-5',
        },
        {
            id: '4',
            title: 'Electricity Payment',
            subtitle: 'Fast&Easy Electricity Bill Pay',
            iconName: 'lightbulb',
            iconType: 'font-awesome-5',
        },
    ];

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={false}
            onRequestClose={onDone}
        >
            <View style={styles.container}>
                {/* Top Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={onDone} activeOpacity={0.7}>
                        <Text style={styles.doneText}>Done</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {/* Success Check Badge */}
                    <View style={styles.successBadge}>
                        <Ionicons name="checkmark" size={32} color="#FFFFFF" />
                    </View>

                    <Text style={styles.successTitle}>Transfer successful</Text>
                    <Text style={styles.amountText}>₦{amount}</Text>

                    {/* 2x2 Quick Action Buttons Grid */}
                    <View style={styles.actionGrid}>
                        <TouchableOpacity onPress={onShareReceipt} style={styles.actionCard} activeOpacity={0.7}>
                            <View style={styles.iconBox}>
                                <Ionicons name="share-outline" size={18} color="#00D285" />
                            </View>
                            <Text style={styles.actionText}>Share Receipt</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onAddMoney} style={styles.actionCard} activeOpacity={0.7}>
                            <View style={styles.iconBox}>
                                <Ionicons name="add-circle-outline" size={18} color="#00D285" />
                            </View>
                            <Text style={styles.actionText}>Add Money</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onAddToFavourites} style={styles.actionCard} activeOpacity={0.7}>
                            <View style={styles.iconBox}>
                                <Ionicons name="person-add-outline" size={18} color="#00D285" />
                            </View>
                            <Text style={styles.actionText}>Add to favourites</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onViewDetails} style={styles.actionCard} activeOpacity={0.7}>
                            <View style={styles.iconBox}>
                                <Ionicons name="list-outline" size={18} color="#00D285" />
                            </View>
                            <Text style={styles.actionText}>View Details</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Special Bonus Card Container */}
                    <View style={styles.bonusCard}>
                        <Text style={styles.bonusHeaderTitle}>Special Bonus For You</Text>

                        {BONUS_ITEMS.map((item) => (
                            <View key={item.id} style={styles.bonusRow}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <View style={styles.bonusIconBg}>
                                        <FontAwesome5 name={item.iconName} size={20} color="#00D285" />
                                    </View>
                                    <View style={{ flex: 1, paddingRight: 8 }}>
                                        <Text style={styles.bonusTitle}>{item.title}</Text>
                                        <Text style={styles.bonusSubtitle}>{item.subtitle}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.goBtn} activeOpacity={0.8}>
                                    <Text style={styles.goBtnText}>GO</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>

                    {/* Bottom Banner Voucher Card */}
                    <View style={styles.promoBanner}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.promoTitle}>Claim 15 Discounts with</Text>
                            <Text style={styles.promoSubtitle}>
                                <Text style={styles.promoHighlight}>₦ 99</Text> on any Bill
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.claimBtn} activeOpacity={0.8}>
                            <Text style={styles.claimBtnText}>Claim</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

export default TransferSuccessModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 10,
        alignItems: 'flex-end',
    },
    doneText: {
        color: '#00D285',
        fontSize: 16,
        fontWeight: '600',
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingBottom: 30,
        alignItems: 'center',
    },
    successBadge: {
        width: 54,
        height: 54,
        borderRadius: 27,
        backgroundColor: '#00D285',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 16,
    },
    successTitle: {
        color: '#E4E4E6',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 6,
    },
    amountText: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 25,
    },
    actionGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        gap: 10,
        marginBottom: 20,
    },
    actionCard: {
        width: '48.5%',
        backgroundColor: '#262626',
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    iconBox: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '500',
    },
    bonusCard: {
        width: '100%',
        backgroundColor: '#1A181A',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    bonusHeaderTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 16,
    },
    bonusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18,
    },
    bonusIconBg: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    bonusTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 2,
    },
    bonusSubtitle: {
        color: '#8E8E93',
        fontSize: 11,
    },
    goBtn: {
        backgroundColor: '#00D285',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
    },
    goBtnText: {
        color: '#043927',
        fontSize: 12,
        fontWeight: '800',
    },
    promoBanner: {
        width: '100%',
        backgroundColor: '#DCF8EC',
        borderRadius: 16,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    promoTitle: {
        color: '#1C1C1E',
        fontSize: 16,
        fontWeight: '700',
    },
    promoSubtitle: {
        color: '#1C1C1E',
        fontSize: 16,
        fontWeight: '700',
    },
    promoHighlight: {
        color: '#00D285',
        fontSize: 22,
        fontWeight: '800',
    },
    claimBtn: {
        backgroundColor: '#00D285',
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 20,
    },
    claimBtnText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
});