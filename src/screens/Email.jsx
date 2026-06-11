import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Email() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <TouchableOpacity style={{ flexDirection: 'row', gap: 10, alignItems: 'center', }}>

                    <View style={{ height: 27, width: 27, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Feather name="arrow-left" size={18} color="black" />
                    </View>
                    <Text style={{ fontSize: 23, fontWeight: '800' }}>
                        My Profile
                    </Text>
                </TouchableOpacity>

                <View style={{ flexWrap: 'nowrap', width: '100%', backgroundColor: 'white', borderRadius: 20, padding: 30, gap: 30 }}>

                    <View style={{ width: '100%' }}>
                        <View>
                            <Text style={{ color: '#888' }}>Full name</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    placeholder='Blessing Bazuaye'
                                    style={{
                                        fontWeight: 'bold', fontSize: 16, width:'90%' }}
                                />
                                <EvilIcons name="pencil" size={30} color="black" />
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.4, width: '100%', borderBlockColor: '#8888883e', borderEndWidth: 0, borderStartWidth: 0 }} />
                    </View>

                    <View style={{ width: '100%' }}>
                        <View>
                            <Text style={{ color: '#888' }}>Email</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    placeholder='blessing@koyo.com'
                                    style={{ fontWeight: 'bold', fontSize: 16, width: '90%' }}
                                />
                                <EvilIcons name="pencil" size={30} color="black" />
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.4, width: '100%', borderBlockColor: '#8888883e', borderEndWidth: 0, borderStartWidth: 0 }} />
                    </View>

                    <View style={{ width: '100%' }}>
                        <View>
                            <Text style={{ color: '#888' }}>Username</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    placeholder='@blessingkoyo'
                                    style={{ fontWeight: 'bold', fontSize: 16, width: '90%' }}
                                />
                                
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.4, width: '100%', borderBlockColor: '#8888883e', borderEndWidth: 0, borderStartWidth: 0 }} />
                    </View>

                    <View style={{ width: '100%'}}>
                        <View>
                            <Text style={{ color: '#888' }}>Gender</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TextInput
                                    placeholder='Female'
                                    style={{ fontWeight: 'bold', fontSize: 16 , width:'90%'}}
                                />
                                <EvilIcons name="pencil" size={30} color="black" />
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.4, width: '100%', borderBlockColor: '#8888883e', borderEndWidth: 0, borderStartWidth: 0 }} />
                    </View>
                </View>


                <View style={{marginTop:200}}>

                    <View style={{ height: 50, width: 130, backgroundColor: 'green', borderRadius: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Log Out</Text>
                    </View>

                    <View style={{ height: 50, width: 200, backgroundColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 15 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Delete Account</Text>
                    </View>
                </View>


            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5c27f45',
        padding: 30,
        gap: 40



    },
    button: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 8,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '600',
    },
});


