import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';



export default function MyProfile({ route }) {
    const navigation = useNavigation()
    const accountNum = "9152543383"
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(accountNum)
        Alert.alert("Copied!", "Account number copied to clipboard.");
    }
    const logoImage = route.params
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ height: 100, width: "100%", backgroundColor: '#2c2b2b', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, marginTop: 20 }}
                    onPress={() => navigation.goBack()}>{'<   My Profile'}</Text>
            </SafeAreaView>

            <View style={styles.container}>
                <View style={{ flexWrap: 'wrap', width: '100%', backgroundColor: '#2c2b2b', marginTop: 10, borderRadius: 20, padding: 15, gap: 40 }}>
                    <View style={{ alignSelf: 'center', alignItems: 'center', }}>
                        <Image source={logoImage} style={{ height: 80, width: 80, borderRadius: 50 }} resizeMode='cover' />
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>hemmy</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={{ color: 'white' }}>Opay Account Number</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                            <Text style={{ color: 'white' }}>9152543383</Text>
                            <TouchableOpacity onPress={copyToClipboard}>
                                <Ionicons name="copy-outline" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginBottom: '10' }} >
                        <Text style={{ color: 'white' }}>Account Tier</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Account')}>

                            <Text style={{ color: 'white' }}>{"Tier 3  >"}</Text>
                       </TouchableOpacity>
                       

                    </View>
                </View>

                <View style={{ flexWrap: 'wrap', width: '100%', backgroundColor: '#2c2b2b', marginTop: 10, borderRadius: 20, padding: 15, gap: 45, }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Text style={{ color: 'white', }}>Full Name</Text>
                        <Text style={{ color: 'white' }}>Adegbola Emmanuel T.</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Text style={{ color: 'white', }}>Mobile Number</Text>
                        <Text style={{ color: 'white' }}>{"+2349152543383   >"}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Text style={{ color: 'white', }}>Nickname</Text>
                        <Text style={{ color: 'white' }}>{"hemmy   >"}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Text style={{ color: 'white', }}>Gender</Text>
                        <Text style={{ color: 'white' }}>Male</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Text style={{ color: 'white', }}>Date of Birth</Text>
                        <Text style={{ color: 'white' }}>{"**-**-12"}.</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Text style={{ color: 'white', }}>Email</Text>
                        <Text style={{ color: 'white' }}>p*gmail.com</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between'
                    }}>
                        <Text style={{ color: 'white', }}>Address</Text>
                        <Text style={{ color: 'white' }}>{">"}</Text>
                    </View>
                </View>


            </View>
        </SafeAreaProvider>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        paddingHorizontal: 15,
        flex: 1
    }
})