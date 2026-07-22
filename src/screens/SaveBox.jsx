import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SAVINGS_PLANS = [
    { id: '1', rate: '15% p.a.', duration: '7-60 Days' },
    { id: '2', rate: '16% p.a.', duration: '61-180 Days' },
    { id: '3', rate: '17% p.a.', duration: '181-364 Days' },
    { id: '4', rate: '18% p.a.', duration: '365-1000 Days' },
];

export default function SaveBox({ navigation }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#121614' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        justifyContent:'space-between'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation?.goBack()}
                        style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}
                    >
                        <Entypo name="chevron-left" size={22} color="#FFFFFF" />
                        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>
                            Fixed
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={{ color: '#8E8E93', fontSize: 14, fontWeight: '500' }}>
                            More
                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                    <View style={{ paddingHorizontal: 16, marginTop: 6 }}>
                        <View
                            style={{
                                backgroundColor: '#3c5546',
                                borderRadius: 16,
                                padding: 16,
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Top Row: Label & Interest Rate Pill + Transactions Link */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    JustifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 8,
                                }}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                    <Text style={{ color: '#E4E4E6', fontSize: 15, fontWeight: '500' }}>
                                        Fixed
                                    </Text>
                                    <View
                                        style={{
                                            backgroundColor: '#405a48',
                                            paddingHorizontal: 8,
                                            paddingVertical: 3,
                                            borderRadius: 12,
                                            borderWidth: 0.5,
                                            borderColor: '#3D5444',
                                        }}
                                    >
                                        <Text style={{ color: '#E4E4E6', fontSize: 11, fontWeight: '500' }}>
                                            up to 18% p.a.
                                        </Text>
                                    </View>
                                </View>

                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                    <Text style={{ color: '#A0A0A0', fontSize: 13 }}>Transactions</Text>
                                    <Entypo name="chevron-right" size={14} color="#A0A0A0" />
                                </TouchableOpacity>
                            </View>

                            {/* Amount Display */}
                            <Text
                                style={{
                                    color: '#FFFFFF',
                                    fontSize: 32,
                                    fontWeight: '800',
                                    marginBottom: 16,
                                }}
                            >
                                ₦0.00
                            </Text>

                            {/* My Fixed Plans Sub-bar */}
                            <View
                                style={{
                                    backgroundColor: '#19231D',
                                    borderRadius: 10,
                                    paddingHorizontal: 12,
                                    paddingVertical: 10,
                                    flexDirection: 'row',
                                    JustifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '70%',
                                }}
                            >
                                <Text style={{ color: '#8E8E93', fontSize: 12 }}>My Fixed Plans</Text>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                                    <Text style={{ color: '#00D285', fontSize: 12, fontWeight: '600' }}>
                                        0 Active Plans
                                    </Text>
                                    <Entypo name="chevron-right" size={12} color="#00D285" />
                                </TouchableOpacity>
                            </View>

                            {/* Graphic Illustration (Padlock Icon / Placeholder) */}
                            <View
                                style={{
                                    position: 'absolute',
                                    right: 12,
                                    bottom: 12,
                                    alignItems: 'center',
                                    JustifyContent: 'center',
                                }}
                            >
                                <MaterialCommunityIcons name="lock-clock" size={72} color="#85C7A5" />
                            </View>
                        </View>
                    </View>

                    {/* Section Title */}
                    <Text
                        style={{
                            color: '#FFFFFF',
                            fontSize: 16,
                            fontWeight: '700',
                            paddingHorizontal: 16,
                            marginTop: 24,
                            marginBottom: 12,
                        }}
                    >
                        Choose a plan to start
                    </Text>

                    {/* Featured Promo Savings Card */}
                    <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
                        <View
                            style={{
                                backgroundColor: '#3c5546',
                                borderRadius: 16,
                                padding: 16,
                                borderWidth: 0.5,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    JustifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: 16,
                                }}
                            >
                                <Text style={{ color: '#A0A0A0', fontSize: 12, fontWeight: '500' }}>
                                    Big Friday Fixed Vol.22
                                </Text>
                                <Text style={{ color: '#00D285', fontSize: 12, fontWeight: '500' }}>
                                    Starts in 1 day
                                </Text>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    JustifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                {/* Interest Rate */}
                                <View style={{ paddingRight: 16, borderRightWidth: 0.5, borderRightColor: '#2D3A31' }}>
                                    <Text style={{ color: '#00D285', fontSize: 20, fontWeight: '800' }}>
                                        25% p.a.
                                    </Text>
                                    <Text style={{ color: '#8E8E93', fontSize: 12, marginTop: 2 }}>
                                        Interest
                                    </Text>
                                </View>

                                {/* Duration & Limits */}
                                <View style={{ flex: 1, paddingLeft: 16 }}>
                                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '700' }}>
                                        8 Days
                                    </Text>
                                    <Text style={{ color: '#8E8E93', fontSize: 11, marginTop: 2 }}>
                                        Max: ₦500,000.00 each person
                                    </Text>
                                </View>

                                {/* Save Button */}
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{
                                        backgroundColor: '#00D285',
                                        paddingHorizontal: 20,
                                        paddingVertical: 8,
                                        borderRadius: 20,
                                    }}
                                >
                                    <Text style={{ color: '#043927', fontWeight: '800', fontSize: 13 }}>
                                        Save
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Regular Interest Plans Table/List */}
                    <View style={{ paddingHorizontal: 16 }}>
                        <View
                            style={{
                                backgroundColor: '#1A1A1C',
                                borderRadius: 16,
                                padding: 16,
                            }}
                        >
                            {/* Header Row */}
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginBottom: 12,
                                    paddingBottom: 8,
                                    borderBottomWidth: 0.5,
                                    borderBottomColor: '#2A2A2D',
                                }}
                            >
                                <Text style={{ color: '#8E8E93', fontSize: 13, width: '35%' }}>
                                    Interest Rate
                                </Text>
                                <Text style={{ color: '#8E8E93', fontSize: 13, flex: 1 }}>
                                    Duration
                                </Text>
                            </View>

                            {SAVINGS_PLANS.map((plan, index) => (
                                <View
                                    key={plan.id}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 14,
                                        borderBottomWidth: index === SAVINGS_PLANS.length - 1 ? 0 : 0.5,
                                        borderBottomColor: '#262628',
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#00D285',
                                            fontSize: 16,
                                            fontWeight: '700',
                                            width: '35%',
                                        }}
                                    >
                                        {plan.rate}
                                    </Text>

                                    <Text
                                        style={{
                                            color: '#FFFFFF',
                                            fontSize: 15,
                                            fontWeight: '700',
                                            flex: 1,
                                        }}
                                    >
                                        {plan.duration}
                                    </Text>

                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={{
                                            backgroundColor: '#00D285',
                                            paddingHorizontal: 20,
                                            paddingVertical: 8,
                                            borderRadius: 20,
                                        }}
                                    >
                                        <Text style={{ color: '#043927', fontWeight: '800', fontSize: 13 }}>
                                            Save
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Footer Insured Branding */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 30,
                            gap: 4,
                            justifyContent:'center'
                        }}
                    >
                        <Text style={{ color: '#666666', fontSize: 11 }}>
                            Powered by OPay Microfinance Bank Insured by
                        </Text>
                        <View
                            style={{
                                backgroundColor: '#1E2B23',
                                paddingHorizontal: 4,
                                paddingVertical: 1,
                                borderRadius: 2,
                            }}
                        >
                            <Text style={{ color: '#00D285', fontSize: 10, fontWeight: 'bold' }}>
                                NDIC
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}