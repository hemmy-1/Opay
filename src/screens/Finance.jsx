import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useState } from 'react';


export default function Finance() {

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
            backgroundColor: '#11382B', height
              : 150, width: '100%', borderRadius: 20, marginTop: 10, flexDirection: 'column'
          }}>
            <View style={{
              flexWrap: 'wrap',
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

            <View style={{ flex: 1, padding: 10 }}>
              <Text style={{ color: '#888' }}>Available Balance</Text>

              <View>
                <View style={{ height: 20, width: 100, backgroundColor: '#888' }}></View>
              </View>
            </View>
          </View>


        </View>





      </SafeAreaView>
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({})