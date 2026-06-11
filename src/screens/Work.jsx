import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';



export default function Work() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Feather name="arrow-left" size={20} color="black" />

                <View style={{ marginBottom: 300 }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/d-image.png')} style={{ alignSelf: 'center', }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 35, fontWeight: '700', textAlign: 'center' }}>Delete your account?</Text>
                        <Text style={{ textAlign: 'center', color: 'red', fontSize: 20 }}>{"This account cannot be undone. You\nwill permanently lose all your\nprogressand saved data."}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ height: 50, width: '49%', backgroundColor: '#949494', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            Cancle
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 50, width: '49%', backgroundColor: '#f31212', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            Delete
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d5c27f',
        padding: 30,
        justifyContent: 'space-between',
        paddingBottom: 100

    }
})