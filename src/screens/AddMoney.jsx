import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import {  SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export default function AddMoney() {
    const navigation = useNavigation()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ height: 100, width: "100%", backgroundColor: '#2c2b2b', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, marginTop: 20 }}
                    onPress={() => navigation.goBack()}>{'<   Add Money'}</Text>
            </SafeAreaView>

            <View style={{ flex: 1, backgroundColor: 'black', paddingHorizontal: 15 }}>

                <View style={{ flexWrap: 'wrap', width: '100%', backgroundColor: '#2c2b2b', marginTop: 10, borderRadius: 20, padding: 15, gap: 20, }}>


                    <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>

                            <View style={{ height: '50', width: '50', borderWidth: 1, backgroundColor:'white', justifyContent:'center', alignItems:'center', borderRadius:15}}>
                                <Image source={require('../assets/bank.png')} style={{ height: '30', width: '30', }} />
                            </View>
                            <View style={{ justifyContent: 'space-around', height: 50 }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                    Bank Transfer
                                </Text>
                                <Text style={{ color: '#888', fontSize: 12 }}>Add money via mobile or internet banking</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 20, color: 'white', paddingEnd: 10 }}>{">"}</Text>
                    </View>
                    <View style={{ borderWidth: 0.4, borderColor: '#888' }} />
                    <View style={{ gap: 5 }}>
                        <Text style={{ color: '#b8b6b6' }}>
                            opay Account Number
                        </Text>
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: '700' }}>
                            915 254 3383
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={{ height: 50, width: '49%', backgroundColor: '#0d6528', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#23c453', fontSize: 15, fontWeight: '800' }}>Copy Number</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 50, width: '49%', backgroundColor: '#23c453', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#053514', fontSize: 15, fontWeight: '800' }}>Share Details</Text>

                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{flexDirection:'row', gap:15, alignItems:'center', justifyContent:'center', marginTop:15}}>
                    <View style={{ borderWidth: 0.4, width: 70, borderColor: '#888' }} />
                    <Text style={{ color: 'white' }}>OR</Text>
                    <View style={{ borderWidth: 0.4, width: 70, borderColor: '#888' }} />
                </View>



                <View style={{ flexWrap: 'wrap', width: '100%', backgroundColor: '#2c2b2b', marginTop: 10, borderRadius: 20, padding: 15, gap: 20, }}>
 
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                           <View style={{ height: '50', width: '50', borderWidth: 1, backgroundColor:'white', justifyContent:'center', alignItems:'center', borderRadius:15}}>
                                <Image source={require('../assets/naira.png')} style={{ height: '30', width: '30', }} />
                            </View>
                            <View style={{ justifyContent: 'space-around', height: 50 }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                    Cash Deposit
                                </Text>
                                <Text style={{ color: '#888', fontSize: 12 }}>Fund your account with nearby merchants</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 20, color: 'white', paddingEnd: 10 }}>{">"}</Text>
                    </View>
                </View>



                <View style={{ flexWrap: 'wrap', width: '100%', backgroundColor: '#2c2b2b', marginTop: 10, borderRadius: 20, padding: 15, gap: 20, }}>
 
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={{ height: '50', width: '50', borderWidth: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                <Image source={require('../assets/card.png')} style={{ height: '30', width: '30', }} />
                            </View>
                            <View style={{ justifyContent: 'space-around', height: 50 }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                    Top-up with Card/Account
                                </Text>
                                <Text style={{ color: '#888', fontSize: 12 }}>Add money directly from your bank card or account</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 20, color: 'white', paddingEnd: 10 }}>{">"}</Text>
                    </View>
                </View>



                <View style={{ flexWrap: 'wrap', width: '100%', backgroundColor: '#2c2b2b', marginTop: 10, borderRadius: 20, padding: 15, gap: 20, }}>
 
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={{ height: '50', width: '50', borderWidth: 1, backgroundColor:'white', justifyContent:'center', alignItems:'center', borderRadius:15}}>
                                <Image source={require('../assets/bank.png')} style={{ height: '30', width: '30', }} />
                            </View>
                            <View style={{ justifyContent: 'space-around', height: 50 }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                    Bank USSD
                                </Text>
                                <Text style={{ color: '#888', fontSize: 12 }}>With other banks' USSD code</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 20, color: 'white', paddingEnd: 10 }}>{">"}</Text>
                    </View>
                </View>



                <View style={{ flexWrap: 'wrap', width: '100%', backgroundColor: '#2c2b2b', marginTop: 10, borderRadius: 20, padding: 15, gap: 20, }}>
 
                    <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={{ height: '50', width: '50', borderWidth: 1, backgroundColor:'white', justifyContent:'center', alignItems:'center', borderRadius:15}}>
                                <Image source={require('../assets/qr-code.png')} style={{ height: '30', width: '30', }} />
                            </View>
                            <View style={{ justifyContent: 'space-around', height: 50 }}>
                                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                                    Scan my QR Code
                                </Text>
                                <Text style={{ color: '#888', fontSize: 12 }}>Show any QR code on any Opay user</Text>
                            </View>
                        </View>

                        <Text style={{ fontSize: 20, color: 'white', paddingEnd: 10 }}>{">"}</Text>
                    </View>
                </View>

            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({})