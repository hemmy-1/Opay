import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


export default function Withdraw() {
    const navigation = useNavigation()

    const Data = [
        {
            id: '1',
            title: 'Withdraw via opay merchants',
            note: ("Send money to an opay merchant's wallet and get cash equvalent"),
            img: require('../assets/house.png')
        },
        {
            id: '2',
            title: 'Withdraw with Opay Card',
            note: 'Withdraw from any ATM or POS arrounf you',
            img: require('../assets/card.png')
        }
    ]

    const DataView = ({ item }) => {
        return (
            <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor: '#2c2b2b', borderRadius: 15, padding: 15, gap: 10, height: 90, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }} >
                <View style={{ flexDirection: 'row', gap: 10, width: '70%' }}>
                    <View style={{ height: 50, width: 50, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>

                        <Image source={item.img} style={{ height: 35, width: 35 }} />
                    </View>
                    <View style={{ gap: 5 }}>
                        <Text style={{ color: 'white' }}>
                            {item.title}
                        </Text>
                        <Text style={{ color: '#888', fontSize: 12 }}>
                            {item.note}
                        </Text>
                    </View>
                </View>

                <View>
                    <Entypo name="chevron-right" size={24} color="white" />
                </View>

            </TouchableOpacity>

        )
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ height: 120, width: "100%", backgroundColor: '#2c2b2b', justifyContent: 'center', paddingHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', marginTop: 20 }}>

                    <Entypo name="chevron-left" size={24} color="white" />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, }}
                    >{'  Withdraw'}</Text>
                </TouchableOpacity>



            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: '#151414', padding: 15, }}>

                <View>
                    <FlatList
                        data={Data}
                        renderItem={DataView}
                        keyExtractor={item => item.id}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.5} style={{ height: 60, width: '100%', backgroundColor: '#999', borderRadius: 10, alignContent: 'center', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#32236e', }}>
                    <View style={{ flexDirection: 'row', alignItems:'center', gap:10}}>

                    <View style={{height:45,  width:45, justifyContent:'center', alignItems:'center', }}>
                        <Image resizeMode='center' source={require('../assets/location.png')} style={{ height:45 }} />
                    </View>
                        <Text style={{color:'white', fontWeight:'bold'}}>Click here to find nearby merchant or ATM</Text>
                    </View>
                    <Entypo name="chevron-right" size={24} color="white" />

                </TouchableOpacity>

            </View>

        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({})