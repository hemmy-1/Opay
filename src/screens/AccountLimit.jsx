import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';



export default function AccountLimit() {
    const navigation = useNavigation()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ height: 100, width: "100%", backgroundColor: '#2c2b2b', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, marginTop: 20 }}
                    onPress={() => navigation.goBack()}>{'<   Account Limit'}</Text>


            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: '#151414', padding: 15, gap: 5 }}>


                <ImageBackground source={require('../assets/tier.jpg')} style={{ height: 140, width: 440, marginTop: 5, gap: 40, borderRadius: 50, padding: 20, justifyContent: 'center', paddingBottom: 45 }}>

                    <View style={{ gap: 5 }}>
                        <Text>
                            Account Info
                        </Text>
                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                915 254 3383
                            </Text>
                            <View style={{ backgroundColor: 'white', justifyContent: 'center', borderRadius: 30, height: 30, width: 30, alignItems: 'center' }}>
                                <Ionicons name="copy-outline" size={20} color="black" />
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', height: 25, width: 200, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Emmanuel Tomisin Adegbola</Text>
                        </View>

                    </View>

                </ImageBackground>

                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: '10', backgroundColor: '#2c2b2b', height: 50, borderRadius: 15, paddingHorizontal: 15 }} >
                    <Text style={{ color: 'white' }}>
                        Linked ID
                    </Text>
                    <Text style={{ color: 'white' }}> {"BVN & NIN  >"}</Text>
                </View>
                

                <View style={{ marginBottom: '10', backgroundColor: '#2c2b2b', borderRadius: 15, padding: 15, gap: 10, height:110 }} >
                    <Text style={{ color: 'white' }}>
                        Limit Info
                    </Text>
                    <View style={{ height: 40, width: '100%', backgroundColor: '#151414', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#888' }}>The higher your account tier, the higher your transaction limit</Text>
                    </View>

                </View>
                <View style={{ marginBottom: '10', backgroundColor: '#2c2b2b', borderRadius: 20, padding: 15, gap: 10 }} >
                    <Text style={{ color: 'white' }}>
                        Level Benefit
                    </Text>
                    

                    <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 18 }}>

                        <View style={{ height: 50, width: '100%', backgroundColor: '#151414', borderTopLeftRadius: 15, borderTopRightRadius: 15, justifyContent: 'space-between', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#fff' }}>Tier</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '58%' }}>
                                <Text style={{ color: '#fff', textAlign: 'right', fontSize: 12 }}>{"Daily\n Transaction limit"}</Text>
                                <Text style={{ color: '#fff', textAlign: 'right', fontSize: 12 }}>{"Maximum\naccount balance"}</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, width: '100%', backgroundColor: '#282626', justifyContent: 'space-between', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#fff' }}>Tier 1</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '58%' }}>
                                <View style={{ width: '38%', }}>
                                    <Text style={{ color: '#fff', textAlign: 'right', fontSize: 12 }}>{"₦50,000"}</Text>
                                </View>
                                <Text style={{ color: '#fff', textAlign: 'right', fontSize: 12 }}>{"₦300,000"}</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, width: '100%', backgroundColor: '#151414', justifyContent: 'space-between', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#fff' }}>Tier 2</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '58%' }}>
                                <View style={{ width: '38%', }}>
                                    <Text style={{ color: '#fff', textAlign: 'right', fontSize: 12 }}>{"₦200,000"}</Text>
                                </View>
                                <Text style={{ color: '#fff', textAlign: 'right', fontSize: 12 }}>{"₦500,000"}</Text>
                            </View>
                        </View>
                        <View style={{ height: 50, width: '100%', backgroundColor: '#282626', justifyContent: 'space-between', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderBottomRightRadius:18, borderBottomLeftRadius:18 }}>
                            <Text style={{ color: '#fff' }}>Tier 3</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '58%' }}>
                                <View style={{ width: '38%', }}>
                                    <Text style={{ color: '#fff', textAlign: 'right', fontSize: 12 }}>{"₦5,000,000"}</Text>
                                </View>
                                <Text style={{ color: '#fff', textAlign: 'right', fontSize: 12 }}>{"Unlimited"}</Text>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({

})