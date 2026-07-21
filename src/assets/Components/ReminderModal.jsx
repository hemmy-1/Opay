import React from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const TransferConfirmationModal = ({
    visible,
    onClose,
    onContinue,
    accName,
    accNum,
    bank,
    amount,
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    {/* Close Icon Header */}
                    <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
                        <Ionicons name="close" size={22} color="#666" />
                    </TouchableOpacity>

                    {/* Modal Header Text */}
                    <Text style={styles.modalTitle}>Reminder</Text>
                    <Text style={styles.modalSubText}>
                        Double check the transfer details before you proceed. Please note that
                        successful transfers cannot be reversed.
                    </Text>

                    {/* Details Card */}
                    <View style={styles.detailsCard}>
                        <Text style={styles.cardHeader}>Transaction Details</Text>

                        {/* Name */}
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Name</Text>
                            <Text style={styles.valueBold}>
                                {accName || 'ADEGBOLA, TOMISIN EMMANUEL'}
                            </Text>
                        </View>

                        {/* Account Number */}
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Account No.</Text>
                            <Text style={styles.valueBold}>{accNum || '2058699506'}</Text>
                        </View>

                        {/* Bank */}
                        <View style={styles.detailRow}>
                            <Text style={styles.label}>Bank</Text>
                            <Text style={styles.valueBold}>{bank || 'Kuda MFB'}</Text>
                        </View>

                        {/* Amount with Tag */}
                        <View style={[styles.detailRow, { alignItems: 'flex-end', marginTop: 10 }]}>
                            <Text style={styles.label}>Amount</Text>
                            <View style={{ alignItems: 'flex-end' }}>
                                <View style={styles.thousandsTag}>
                                    <Text style={styles.tagText}>Thousands</Text>
                                </View>
                                <Text style={styles.amountText}>
                                    {amount || '5,888.00'}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.buttonRow}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onClose}
                            style={styles.recheckBtn}
                        >
                            <Text style={styles.recheckBtnText}>Recheck</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={onContinue}
                            style={styles.continueBtn}
                        >
                            <Text style={styles.continueBtnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default TransferConfirmationModal;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: '#1C1C1E',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        paddingBottom: 35,
    },
    closeBtn: {
        alignSelf: 'flex-end',
        padding: 4,
    },
    modalTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 8,
    },
    modalSubText: {
        color: '#8E8E93',
        fontSize: 13,
        textAlign: 'center',
        lineHeight: 18,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    detailsCard: {
        backgroundColor: '#27272A',
        borderRadius: 16,
        padding: 16,
        marginBottom: 24,
    },
    cardHeader: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 16,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },
    label: {
        color: '#8E8E93',
        fontSize: 13,
    },
    valueBold: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: '700',
        textAlign: 'right',
        flex: 1,
        marginLeft: 15,
    },
    thousandsTag: {
        backgroundColor: '#3F3F46',
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginBottom: 2,
    },
    tagText: {
        color: '#A1A1AA',
        fontSize: 10,
        fontWeight: '500',
    },
    amountText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '800',
    },
    buttonRow: {
        flexDirection: 'row',
        justify: 'space-between',
        gap: 12,
    },
    recheckBtn: {
        flex: 1,
        backgroundColor: '#10392A',
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    recheckBtnText: {
        color: '#00D285',
        fontSize: 16,
        fontWeight: '600',
    },
    continueBtn: {
        flex: 1,
        backgroundColor: '#00D285',
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueBtnText: {
        color: '#043927',
        fontSize: 16,
        fontWeight: '700',
    },
});