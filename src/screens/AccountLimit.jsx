import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';


export default function AccountLimit() {
    const navigation = useNavigation()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ height: 100, width: "100%", backgroundColor: '#000000', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, marginTop: 20 }}
                    onPress={() => navigation.goBack()}>{'<   My Profile'}</Text>


            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: '#000000', padding: 15 }}>

                
                <ImageBackground source={require('../assets/tier.jpg')} style={{ height:150, width: 440,  marginTop: 10, gap: 40, borderRadius:50 , padding:20 }}>

                <View>
                    <Text>
                        Account Info
                    </Text>
                    
                </View>

                </ImageBackground>

                </View>
        </SafeAreaProvider>

    );
}

const styles = StyleSheet.create({

})