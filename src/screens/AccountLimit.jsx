import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


export default function AccountLimit() {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ height: 100, width: "100%", backgroundColor: '#2c2b2b', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, marginTop: 20 }}
                    onPress={() => navigation.goBack()}>{'<   My Profile'}</Text>
            </SafeAreaView>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({

})