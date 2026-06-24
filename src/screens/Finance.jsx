import { StyleSheet, Text, View, TouchableOpacity, TurboModuleRegistry } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { use, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';



export default function Finance() {

  const [isAsset, setIsAsset] = useState(true)

  const [isBalanceVisible, setIsBalanceVisible] = useState(false)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#2c2b2b', flex: 1, padding: 20 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", backgroundColor: '#2c2b2b', }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, }}>Finance</Text>
          <Feather name="settings" size={20} color="white" />
        </View>


        <View style={{ flex: 1, marginTop: 30 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Savings</Text>

          <View style={{
            backgroundColor: '#11382B', width: '100%', borderRadius: 20, marginTop: 10, flexDirection: 'column', flexWrap: 'wrap'
          }}>
            <View style={{
              width: '100%',
              backgroundColor: '#00B986',
              borderRadius: 18,
              padding: 10,
              height: 110,
              gap: 4
            }}>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between'
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                  <Text>Total Balance</Text>
                  <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)}>
                    {isBalanceVisible ? (
                      <MaterialCommunityIcons name="eye-outline" size={24} color="#black" />
                    ) : (
                      <MaterialCommunityIcons name="eye-off-outline" size={24} color="#black" />
                    )}
                  </TouchableOpacity>
                </View>
                <Text >Intrest Created Today</Text>
              </View>

              <View style={{
                flexDirection: 'row', justifyContent: 'space-between'
              }}>

                <Text style={{ fontWeight: '800', fontSize: 25 }}>{isBalanceVisible ? `₦ 17,882` : '******'}<Text style={{ fontSize: 18 }}>{isBalanceVisible ? '.69 >' : ''}</Text></Text>

                <Text style={{ fontWeight: 'bold' }}>{'+ ₦ 5.50 >'}</Text>
              </View>
              <TouchableOpacity activeOpacity={0.5} style={{ height: 20, width: 260, backgroundColor: '#54d2af', borderRadius: 10, justifyContent: 'center', paddingHorizontal: 3 }}>
                <Text style={{ fontSize: 11 }}>
                  {"Estimate intrest ₦184/month, Beats 84% others  >"}              </Text>
              </TouchableOpacity>
            </View>
            {isAsset ?

              (<TouchableOpacity onPress={() => setIsAsset(!isAsset)} style={{ flexDirection: 'row', padding: 10, alignSelf: 'center' }}>
                <Text style={{ color: '#00b98498' }}>View Asset Breakdown</Text>
                <Ionicons name="chevron-down" size={16} color="#00b98498" />
              </TouchableOpacity>)
              :
              (
                <View style={{ padding: 10 }}>
                    <Text style={{ color: '#888' }}>Available Balance</Text>
                  <View style={{flexDirection:'row', width:'100%',}}>

                    <View style={{ height: 20, width: 110,  }}>
                      <Text style={{ color: 'white' }}>Wallet</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', flex:1}}>
                    <Text style={{color:'white'}}>₦ 0.0</Text>
                      <Entypo name="chevron-right" size={16} color="#00b98498" />

                    </View>
                  </View>
                </View>
              )

            }

          </View>


        </View>





      </SafeAreaView>
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({})

