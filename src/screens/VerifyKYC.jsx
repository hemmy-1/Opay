import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function VerifyKYC() {
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
        
                <Image source={require('../assets/kyc.jpeg')} style={{alignSelf:'center'}}/>
        
                <View style={{flex:1, marginTop:50}}>
                <TouchableOpacity  style={{height:50, width:'80%', backgroundColor:'#0e083a', alignSelf:'center', borderRadius:10, justifyContent:'center', alignItems:'center', }}>
                  <Text style={{color:'white', fontSize:20, fontWeight:'700'}}>
                    Finish
                  </Text>
                  </TouchableOpacity>
                </View>
        
              </SafeAreaView>
            </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({})