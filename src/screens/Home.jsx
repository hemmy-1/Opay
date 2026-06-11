import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const navigation = useNavigation()

    const [isBalanceVisible, setIsBalanceVisible] = useState(true);

    const hideBalance = () => {
        console.log("it's working well.")
        setIsBalanceVisible(!isBalanceVisible)

    }

    const logoImage = require('../assets/logoooo.png');


    const DataHistory = [
        {
            id: '1',
            img: require('../assets/percentage.png'),
            name: 'OWealth Intrest Earned',
            date: 'May 23rd, 20:59:08',
            amount: '+₦23.39',
            status: 'Successful'
        },
        {
            id: '2',
            img: require('../assets/percentage.png'),
            name: 'OWealth Intrest Earned',
            date: 'May 25rd, 19:59:08',
            amount: '+₦263.39',
            status: 'Successful'
        },

    ]



    const dataHistoryView = ({ item }) => {
        return (
            <View style={{ paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{
                        height: 35, width: 35, backgroundColor: 'white', borderRadius: 30,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image source={item.img} style={{ height: 35, width: 35 }} />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={{ color: 'white', fontSize: 15 }}>{item.name}</Text>
                        <Text style={{ color: '#888', fontSize: 13 }}>{item.date}</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: '#0d6528', fontSize: 16, fontWeight: '800' }}>
                        {item.amount}
                    </Text>
                    <View style={{
                        height: 18, flexWrap: 'wrap', backgroundColor: '#033813',
                        paddingHorizontal: 5, borderRadius: 10
                    }}>
                        <Text style={{ color: '#0d6528', fontWeight: '800' }}>{item.status}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container1}>

                <StatusBar backgroundColor={'#3006c7'} barStyle={'dark-content'} />
                <View style={{
                    // flexWrap: 'wrap',
                    flexDirection: 'row', gap: 20,
                    backgroundColor: '#25292e00',
                    borderRadius: 18, padding: 10,
                    alignItems: 'center',
                    marginVertical: 10

                }}>
                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MyProfile', logoImage)}>
                            <Image source={logoImage} style={{ width: 40, height: 50, borderRadius: 25 }} />
                        </TouchableOpacity>
                        <Text style={{ color: '#ffffff', fontSize: 24, }}>hi, hemmy</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 20, marginLeft: 'auto' }}>
                        <Feather name="headphones" size={24} color="#ffffff" />
                        <AntDesign name="scan" size={24} color="#ffffff" />
                        <Ionicons name="notifications" size={24} color="#ffffff" />
                    </View>
                </View>

                <View style={{ backgroundColor: '#012b0e', height: 160, borderRadius: 18 }}>
                    <View style={{
                        flexWrap: 'wrap',
                        gap: 20,
                        backgroundColor: '#0d6528',
                        borderRadius: 18,
                        padding: 10,
                        // alignItems: 'center',
                        height: 110,
                    }}>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <View
                                style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                                <MaterialCommunityIcons name="guitar-pick" size={24} color="#fff" />
                                <Text style={{ color: '#fff', fontSize: 18, }}>Available balance</Text>
                                <TouchableOpacity onPress={hideBalance}>
                                    <MaterialCommunityIcons name={isBalanceVisible ? "eye-off-outline" : "eye-outline"} size={24} color="#fff" />
                                </TouchableOpacity>


                            </View>

                            <View style={{ gap: 20, marginStart: 70 }}>
                                <Text style={{ color: '#fff', fontSize: 18, }}>Transaction History  {'>'}  </Text>

                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10, }}>
                            <View>
                                <Text style={{ color: '#fff', marginStart: 10, fontSize: 24, fontWeight: 'bold' }}>{isBalanceVisible ? "*********" : ("9,876,543.21")}  {'>'}</Text>
                            </View>

                            <View style={{
                                backgroundColor: '#000000', borderRadius: 30, alignSelf: "flex-end", alignItems: 'center', paddingHorizontal: 6,
                                justifyContent: 'center', alignContent: 'center',
                                height: 35, width: 120
                            }}>
                                <Text style={{ color: '#fff', fontSize: 18 }}>+ add money</Text>
                            </View>




                        </View>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', paddingHorizontal: 20, flexDirection: 'row', gap: 15, alignContent: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                            <View style={{ backgroundColor: '#02210b', height: 25, width: 25, justifyContent: 'center', borderRadius: 10, alignItems: 'center' }}>
                                <FontAwesome name="bank" size={15} color="#0d6528" />
                            </View>
                            <Text style={{ color: '#888', fontSize: 12 }}>
                                Business Service - Today's Sales:
                                <Text style={{ color: '#1dbc4d', fontSize: 12 }}> ₦5,432.10</Text>
                            </Text>
                        </View>

                        <View style={{ backgroundColor: '#02210b', height: 20, width: 20, justifyContent: 'center', borderRadius: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#1dbc4d', fontWeight: 'bold' }}>{'>'}</Text>

                        </View>

                    </View>


                </View>

                {isBalanceVisible ?
                    (
                        <View></View>
                    ) :
                    (<View style={{
                        width: '95%',

                        backgroundColor: '#393535',
                        borderRadius: 18,
                        padding: 10,
                        //alignItems: 'center',
                        height: 120,

                        paddingHorizontal: 20,
                        marginHorizontal: 10,





                    }}>
                        <FlatList
                            data={DataHistory}
                            renderItem={dataHistoryView}
                            keyExtractor={item => item.id}
                            style={{ flex: 1 }}
                        />

                    </View>)
                }



                <View style={{
                    flexWrap: 'wrap',

                    backgroundColor: '#393535',
                    borderRadius: 18,
                    padding: 10,
                    //alignItems: 'center',
                    height: 110,
                    justifyContent: 'space-around',
                    paddingHorizontal: 20,
                    marginHorizontal: 10,
                    flexDirection: 'row',
                    gap: 60

                }}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Work')}>
                        <View style={{
                            alignItems: 'center', flexDirection: 'column', gap: 10
                        }}>
                            <MaterialIcons name="perm-contact-calendar" size={24} color="white"
                                style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                            <Text style={{ color: '#ffffff', fontSize: 18 }}>To Opay</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                            <FontAwesome name="bank" size={24} color="white" style={{
                                backgroundColor: 'black',
                                borderWidth: 8,
                                borderRadius: 15
                            }} />
                            <Text style={{ color: '#ffffff', fontSize: 18 }}>To Bank</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                            <Ionicons name="arrow-up-left-box" size={24} color="white" style={{
                                backgroundColor: 'black',
                                borderWidth: 8,
                                borderRadius: 15
                            }} />
                            <Text style={{ color: '#ffffff', fontSize: 18 }}>Withdraw</Text>
                        </View>
                    </TouchableOpacity>





                </View>


                <View style={{
                    gap: 50,
                    backgroundColor: '#393535',
                    borderRadius: 18,
                    padding: 10,
                    alignItems: 'center',
                    height: 210,
                    justifyContent: 'center',
                    marginHorizontal: 10,
                    flexDirection: 'row'

                }}>

                    <View style={{ flexDirection: 'column', gap: '25' }}>
                        <TouchableOpacity>
                            <View style={{
                                alignItems: 'center', flexDirection: 'column', gap: 10
                            }}>
                                <MaterialIcons name="network-check" size={24} color="white" style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Airtime</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <FontAwesome6 name="naira-sign" size={24} color="white" style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>SaveBox</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', gap: '25' }}>
                        <TouchableOpacity>
                            <View style={{
                                alignItems: 'center', flexDirection: 'column', gap: 10
                            }}>
                                <MaterialCommunityIcons name="access-point-network" size={24} color="white" style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Data</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <FontAwesome6 name="naira-sign" size={24} color="white" style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Loan</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', gap: '25' }}>
                        <TouchableOpacity>
                            <View style={{
                                alignItems: 'center', flexDirection: 'column', gap: 10
                            }}>
                                <FontAwesome name="soccer-ball-o" size={24} color="white" style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Betting</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <MaterialIcons name="speaker-phone" size={24} color="white" style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>Invitation</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'column', gap: '25' }}>
                        <TouchableOpacity>
                            <View style={{
                                alignItems: 'center', flexDirection: 'column', gap: 10
                            }}>
                                <Feather name="tv" size={24} color="white" style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>TV</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center', flexDirection: 'column', gap: 10 }}>
                                <MaterialIcons name="streetview" size={24} color="white" style={{
                                    backgroundColor: 'black',
                                    borderWidth: 8,
                                    borderRadius: 15
                                }} />
                                <Text style={{ color: '#ffffff', fontSize: 18 }}>More</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>



            </SafeAreaView>
        </SafeAreaProvider>



    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#000000',
        gap: 10
        // justifyContent: 'center ',
        // alignItems: 'center'/,
    },
    text: {
        color: '#fff',
        fontSize: 60,
        fontWeight: 'bold',
        borderColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#3b381f',
        width: 90,
        height: 110,
        //borderRadius: 18,
    },
});
