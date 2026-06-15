import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';



export default function Finance() {
  const navigation = useNavigation()
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ padding: 20 }}>
          <Text onPress={()=> null} style={{
            textAlign: 'right', fontSize: 20, color: 'blue', fontWeight: '700', paddingRight: 10
          }}>Skip</Text>

        </View>

        <View style={{ padding: 20 }}>
          <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: '800' }}>
            KYC
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>
            {'Verify your identity to secure your account\nand access all platform features.'}
          </Text>

        </View>

        <View style={{ padding: 30, gap: 10, marginTop:30 }}>
          <Text>
            NIN
          </Text>

          <TextInput
            placeholder='enter NIN'
            style={{ height: 50,   backgroundColor:'#88888850',paddingHorizontal:10, borderRadius:10, fontSize:16}}
            placeholderTextColor={"#888888ab"}
             />
        </View>

        <View style={{flex:1, marginTop:50}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Verify')} style={{height:50, width:'70%', backgroundColor:'#0e083a', alignSelf:'center', borderRadius:10, justifyContent:'center', alignItems:'center', }}>
          <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>
            Contiune
          </Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({})