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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const PaymentModal = ({
    visible,
    onClose,
    onPay,
    accName,
    accNum,
    amount,
    walletBalance = '0.00',
    owealthBalance = '43.36',
    cardDetails = { bankName: 'Wema Bank', cardNumber: '559441******1059' },
    onUsePinPress,
    onAddMoneyPress,
}) => {
    // Calculate total available balance
    const totalBalance = (
        parseFloat(walletBalance.replace(/,/g, '')) +
        parseFloat(owealthBalance.replace(/,/g, ''))
    ).toFixed(2);

    // Check if amount exceeds available balance
    const parsedAmount = parseFloat((amount || '0').replace(/,/g, ''));
    const isInsufficient = parsedAmount > parseFloat(totalBalance);

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Header Bar */}
                    <View style={styles.headerRow}>
                        <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                            <Ionicons name="close" size={20} color="#999" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={onUsePinPress}>
                            <Text style={styles.usePinText}>Use Payment PIN</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* Display Amount */}
                        <View style={styles.amountContainer}>
                            <Text style={styles.currencySymbol}>₦</Text>
                            <Text style={styles.amountMain}>{amount || '1,000.00'}</Text>
                        </View>

                        {/* Recipient Details Card */}
                        <View style={styles.detailsCard}>
                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Account Number</Text>
                                <Text style={styles.valueBold}>{accNum || '905 418 1565'}</Text>
                            </View>

                            <View style={styles.detailRow}>
                                <Text style={styles.label}>Name</Text>
                                <View style={styles.nameValueRow}>
                                    <Ionicons name="person-circle" size={18} color="#8E8E93" />
                                    <Text style={styles.valueBold}>{accName || 'ESTHER OLUWATOYIN DAIRO'}</Text>
                                </View>
                            </View>

                            <View style={[styles.detailRow, { marginBottom: 0, alignItems: 'flex-end' }]}>
                                <Text style={styles.label}>Amount</Text>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <View style={styles.thousandsTag}>
                                        <Text style={styles.tagText}>Thousands</Text>
                                    </View>
                                    <Text style={styles.amountValueText}>₦{amount || '1,000.00'}</Text>
                                </View>
                            </View>
                        </View>

                        {/* Payment Method Selector Header */}
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionTitle}>Payment Method</Text>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.allText}>All</Text>
                                <Ionicons name="chevron-forward" size={14} color="#8E8E93" />
                            </TouchableOpacity>
                        </View>

                        {/* Card Payment Option */}
                        <TouchableOpacity style={styles.cardOptionBox} activeOpacity={0.8}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <View style={styles.bankLogoBadge}>
                                    <MaterialCommunityIcons name="bank" size={16} color="#FFF" />
                                </View>
                                <View>
                                    <Text style={styles.bankName}>{cardDetails.bankName}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 2 }}>
                                        <Text style={styles.cardMask}>{cardDetails.cardNumber}</Text>
                                        <View style={styles.cardTag}>
                                            <Text style={styles.cardTagText}>Card</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Ionicons name="checkmark-circle" size={20} color="#00D285" />
                        </TouchableOpacity>

                        {/* Balance & Sub-Wallets Box */}
                        <View style={styles.balanceBox}>
                            <View style={styles.balanceHeader}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                    <View style={styles.opayIconCircle}>
                                        <Text style={styles.opayIconText}>O</Text>
                                    </View>
                                    <Text style={styles.balanceTitle}>
                                        Available Balance <Text style={{ color: '#8E8E93' }}>(₦{totalBalance})</Text>
                                    </Text>
                                    <Ionicons name="information-circle-outline" size={14} color="#8E8E93" />
                                </View>
                            </View>

                            {/* Insufficient Warning standard message */}
                            {isInsufficient && (
                                <Text style={styles.errorText}>Insufficient balance</Text>
                            )}

                            <View style={styles.dashedDivider} />

                            {/* Sub-wallets breakdown */}
                            <View style={styles.subWalletRow}>
                                <Text style={styles.subWalletText}>Wallet (₦{walletBalance})</Text>
                            </View>

                            <View style={styles.subWalletRow}>
                                <Text style={styles.subWalletText}>OWealth (₦{owealthBalance})</Text>
                                <TouchableOpacity onPress={onAddMoneyPress} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={styles.addMoneyText}>Add Money</Text>
                                    <Ionicons name="chevron-forward" size={12} color="#00D285" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Pay Button */}
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onPay}
                            style={styles.payBtn}
                        >
                            <Text style={styles.payBtnText}>Pay</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default PaymentModal;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#181818',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        maxHeight: '85%',
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    closeBtn: {
        padding: 4,
    },
    usePinText: {
        color: '#00D285',
        fontSize: 13,
        fontWeight: '500',
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 15,
    },
    currencySymbol: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: '700',
        marginTop: 4,
        marginRight: 2,
    },
    amountMain: {
        color: '#FFFFFF',
        fontSize: 34,
        fontWeight: '800',
    },
    detailsCard: {
        backgroundColor: '#262626',
        borderRadius: 16,
        padding: 16,
        marginBottom: 20,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    label: {
        color: '#8E8E93',
        fontSize: 13,
    },
    nameValueRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    valueBold: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
    thousandsTag: {
        backgroundColor: '#10392A',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginBottom: 2,
    },
    tagText: {
        color: '#00D285',
        fontSize: 10,
        fontWeight: '500',
    },
    amountValueText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
    sectionHeader: {
        flexDirection: 'row',
        justify: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        color: '#8E8E93',
        fontSize: 13,
    },
    allText: {
        color: '#8E8E93',
        fontSize: 13,
        marginRight: 2,
    },
    cardOptionBox: {
        backgroundColor: '#262626',
        borderRadius: 14,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    bankLogoBadge: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#9C27B0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bankName: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
    cardMask: {
        color: '#8E8E93',
        fontSize: 12,
    },
    cardTag: {
        backgroundColor: '#3A3A3C',
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 3,
    },
    cardTagText: {
        color: '#AAA',
        fontSize: 10,
    },
    balanceBox: {
        backgroundColor: '#262626',
        borderRadius: 14,
        padding: 16,
        marginBottom: 24,
    },
    balanceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    opayIconCircle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1.5,
        borderColor: '#00D285',
        justifyContent: 'center',
        alignItems: 'center',
    },
    opayIconText: {
        color: '#00D285',
        fontSize: 10,
        fontWeight: 'bold',
    },
    balanceTitle: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '600',
    },
    errorText: {
        color: '#FF3B30',
        fontSize: 12,
        marginTop: 6,
    },
    dashedDivider: {
        borderWidth: 0.5,
        borderColor: '#3F3F46',
        borderStyle: 'dashed',
        marginVertical: 12,
    },
    subWalletRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    subWalletText: {
        color: '#8E8E93',
        fontSize: 13,
    },
    addMoneyText: {
        color: '#00D285',
        fontSize: 12,
        fontWeight: '600',
    },
    payBtn: {
        backgroundColor: '#00D285',
        height: 50,
        borderRadius: 25,
        justify: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    payBtnText: {
        color: '#043927',
        fontSize: 16,
        fontWeight: '700',
    },
});