import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function Work() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>okay</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#d5c27f',
        padding:20
    }
})