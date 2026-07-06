import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
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
      <SafeAreaView style={{ backgroundColor: '#000000', flex: 1, }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", backgroundColor: '#000000', padding: 20 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, }}>Finance</Text>
          <Feather name="settings" size={20} color="white" />
        </View>


        <View style={{ flex: 1, }}>
          <View style={{ padding: 20 }}>

            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Savings</Text>

            <View style={{
              backgroundColor: '#11382B', width: '100%', borderRadius: 20, marginTop: 10, flexDirection: 'column', flexWrap: 'wrap'
            }}>
              <TouchableOpacity style={{
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
              </TouchableOpacity>

              {isAsset ?
                (<TouchableOpacity onPress={() => setIsAsset(!isAsset)} style={{ flexDirection: 'row', padding: 10, alignSelf: 'center' }}>
                  <Text style={{ color: '#00b98498' }}>View Asset Breakdown</Text>
                  <Ionicons name="chevron-down" size={16} color="#00b98498" />
                </TouchableOpacity>)
                :
                (
                  <View style={{ padding: 10, gap: 5 }}>
                    <Text style={{ color: '#888' }}>Available Balance</Text>

                    <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', width: '100%', }}>
                      <View style={{ height: 20, width: 110, }}>
                        <Text style={{ color: 'white' }}>Wallet</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>₦ 0.0</Text>
                        <Entypo name="chevron-right" size={16} color="#00b98498" />
                      </View>
                    </TouchableOpacity>



                    <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', width: '100%', }}>
                      <View style={{ height: 20, width: 110, }}>
                        <Text style={{ color: 'white' }}>OWealth</Text>
                      </View>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                        <Text style={{ color: 'white' }}>₦ 0.0</Text>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                          <Text style={{ color: 'white', fontWeight: 'bold' }}>+₦ 0.11</Text>
                          <Entypo name="chevron-right" size={16} color="#00b98498" />
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={{ width: '100%', borderWidth: 0.5, borderStyle: 'dashed', borderColor: 'white', marginBottom: 10, marginVertical: 10, height: 4 }} />
                    
                    <View>

                      <Text style={{ color: '#888' }}>Savings</Text>

                      <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', width: '100%', }}>
                        <View style={{ height: 20, width: 110, }}>
                          <Text style={{ color: 'white' }}>Terget</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                          <Text style={{ color: 'white', fontWeight: 'bold' }}>₦ 0.00</Text>
                          <Entypo name="chevron-right" size={16} color="#00b98498" />
                        </View>
                      </TouchableOpacity>


                      <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', width: '100%', }}>
                        <View style={{ height: 20, width: 110, }}>
                          <Text style={{ color: 'white' }}>
                            SafeBox
                          </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                          <Text style={{ color: 'white', fontWeight: 'bold' }}>₦ 2,121.92</Text>
                          <Entypo name="chevron-right" size={16} color="#00b98498" />
                        </View>
                      </TouchableOpacity>


                      <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', width: '100%', }}>
                        <View style={{ height: 20, width: 110, }}>
                          <Text style={{ color: 'white' }}>
                            Fixed</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                          <Text style={{ color: 'white', fontWeight: 'bold' }}>₦ 0.00</Text>
                          <Entypo name="chevron-right" size={16} color="#00b98498" />
                        </View>
                      </TouchableOpacity>


                      <TouchableOpacity activeOpacity={0.5} style={{ flexDirection: 'row', width: '100%', }}>
                        <View style={{ height: 20, width: 110, }}>
                          <Text style={{ color: 'white' }}>
                            Spend & Save</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1 }}>
                          <Text style={{ color: 'white', fontWeight: 'bold' }}>₦ 15,760.77</Text>
                          <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>+₦ 0.11</Text>
                            <Entypo name="chevron-right" size={16} color="#00b98498" />
                          </View>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => setIsAsset(true)}>
                        <Ionicons name="chevron-up" size={16} color="#00b98498" style={{ alignSelf: 'center' }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}

            </View>

          </View>


          <View style={{ height: '100%', backgroundColor: '#2c2b2b', borderTopRightRadius: 20, borderTopLeftRadius: 20, marginTop: 10, padding: 10, paddingTop: 30, width: '100%', gap: 20 }}>

            <View style={{ flexDirection: 'row', alignSelf: 'center', gap: 35 }}>

              <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center', gap: 5 }}>
                <View style={{ height: 45, width: 45, backgroundColor: '#00b9842a', borderRadius: 30, padding: 10 }}>
                  <Image style={{ height: '100%', width: '100%' }} source={require('../assets/owealth.png')} />
                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>OWealth</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center', gap: 5 }}>
                <View style={{ height: 45, width: 45, backgroundColor: '#00b9842a', borderRadius: 30, padding: 10 }}>
                  <Image style={{ height: '100%', width: '100%' }} source={require('../assets/terget.png')} />
                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>Terget</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center', gap: 5 }}>
                <View style={{ height: 45, width: 45, backgroundColor: '#00b9842a', borderRadius: 30, padding: 10 }}>
                  <Image style={{ height: '100%', width: '100%' }} source={require('../assets/safebox.png')} />
                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>SafeBox</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center', gap: 5 }}>
                <View style={{ height: 45, width: 45, backgroundColor: '#00b9842a', borderRadius: 30, padding: 10 }}>
                  <Image style={{ height: '100%', width: '100%' }} source={require('../assets/lock.png')} />
                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>Fixed</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5} style={{ alignItems: 'center', gap: 5 }}>
                <View style={{ height: 45, width: 45, backgroundColor: '#00b9842a', borderRadius: 30, padding: 10 }}>
                  <Image style={{ height: '100%', width: '100%' }} source={require('../assets/dollar.png')} />
                </View>
                <Text style={{ color: 'white', fontSize: 12 }}>Spend & Save</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', }}>
              <MaterialCommunityIcons name="guitar-pick" size={16} color="#00B986" />
              <Text style={{ color: 'white', fontSize: 12 }}>
                OWealth and Savings are powered by Opay MicroFinance Ltd.
              </Text>
            </View>
          </View>
        </View>





      </SafeAreaView>
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({})

