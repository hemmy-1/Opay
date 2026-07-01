import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';


export default function Cards() {
  const [activeTab, setActiveTab] = useState('virtual');


  const benefitsData = [
    {
      id: '1',
      imageSource: require('../assets/thunder.png'),
      title: 'Instant Access',
      descPrefix: 'Use it instantly after ',
      highlightText: 'quick application',
      descSuffix: '',
    },
    {
      id: '2',
      imageSource: require('../assets/world.png'),
      title: 'Accepted at 40,000+ Online Merchants',
      descPrefix: 'Including ',
      highlightText: 'GooglePlay, Netflix, Glovo, Shein, Jumia, Konga, Uber Wallet Funding ',
      descSuffix: ', and more',
    },
    {
      id: '3',
      imageSource: require('../assets/shop.png'),
      title: 'Self-managed Transactions',
      descPrefix: '',
      highlightText: 'Unique ',
      descSuffix: 'Merchant Control, Unlimited Convenience',
    },
    {
      id: '4',
      imageSource: require('../assets/paint.png'),
      title: 'NO maintenance fee',
      descPrefix: 'Free & switch your ',
      highlightText: 'favorite card design ',
      descSuffix: 'anytime',
    },
    {
      id: '5',
      imageSource: require('../assets/shield.png'),
      title: 'Safe & Secure',
      descPrefix: '',
      highlightText: 'CBN ',
      descSuffix: 'licensed, ',
      secondHighlight: 'NDIC ',
      secondSuffix: 'Insured'
    },
  ];

  // 2. The render row function
  const renderBenefitItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 24 }}>

      <View style={{
        width: 48,
        height: 48,
        borderRadius: 14,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        overflow: 'hidden'
      }}>
        <Image
          source={item.imageSource}
          style={{ width: 24, height: 24, resizeMode: 'contain' }}
        />
      </View>

      {/* TEXT LAYER */}
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '700', marginBottom: 6 }}>
          {item.title}
        </Text>

        <Text style={{ color: '#8E8E93', fontSize: 14, lineHeight: 20 }}>
          {item.descPrefix}
          <Text style={{ color: '#00B986', fontWeight: '500' }}>{item.highlightText}</Text>
          {item.descSuffix}
          {item.secondHighlight && (
            <Text style={{ color: '#00B986', fontWeight: '500' }}>{item.secondHighlight}</Text>
          )}
          {item.secondSuffix}
        </Text>
      </View>

    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ backgroundColor: '#111214', flex: 1, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%", backgroundColor: '#111214', padding: 20 }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25, }}>Cards</Text>
          <Text style={{ color: '#00B986', fontWeight: 'bold' }}>Q&A</Text>
        </View>

        <ScrollView>

          <View style={{ flex: 1, backgroundColor: '#111214', paddingHorizontal: 16, paddingTop: 40 }}>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginBottom: 20,
              height: 50
            }}>

              {/* virtual card */}
              <TouchableOpacity
                onPress={() => setActiveTab('virtual')}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>

                <View style={{
                  position: 'absolute',
                  top: -2,
                  right: '12%',
                  backgroundColor: '#FF5C5C',
                  paddingVertical: 2,
                  paddingHorizontal: 6,
                  borderRadius: 6,
                }}>
                  <Text style={{ color: '#FFF', fontSize: 9, fontWeight: 'bold' }}>25% OFF</Text>
                </View>

                <Text style={{
                  color: activeTab === 'virtual' ? '#FFF' : '#888',
                  fontSize: 16,
                  fontWeight: activeTab === 'virtual' ? '700' : '500'
                }}>
                  Virtual Card
                </Text>


                {activeTab === 'virtual' && (
                  <View style={{ position: 'absolute', bottom: 0, width: 40, height: 3, backgroundColor: '#FFF', borderRadius: 2 }} />
                )}
              </TouchableOpacity>

              {/* physical card */}
              <TouchableOpacity
                onPress={() => setActiveTab('physical')}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
                <Text style={{
                  color: activeTab === 'physical' ? '#FFF' : '#888',
                  fontSize: 16,
                  fontWeight: activeTab === 'physical' ? '700' : '500'
                }}>
                  Physical Card
                </Text>

                {/* Active Bottom Indicator Underline */}
                {activeTab === 'physical' && (
                  <View style={{ position: 'absolute', bottom: 0, width: 40, height: 3, backgroundColor: '#FFF', borderRadius: 2 }} />
                )}
              </TouchableOpacity>

            </View>

            {activeTab === 'virtual' ? (
              <View style={{ flex: 1, gap: 30, padding: 10 }}>

                <View style={{ width: '100%', height: 200, }}>
                  <Image style={{ height: '100%', width: '100%', borderRadius: 20 }} source={require('../assets/atm.png')} />
                </View>


                <View style={{ backgroundColor: '#111214', justifyContent: 'center', }}>

                  {/* CARD MAIN WRAPPER CONTAINER */}
                  <View style={{
                    backgroundColor: '#262626',
                    borderRadius: 20,
                    paddingTop: 32,
                    paddingHorizontal: 16,
                    paddingBottom: 8
                  }}>

                    {/* FLOATING HEADER BADGE */}
                    <View style={{
                      position: 'absolute',
                      top: -10,
                      alignSelf: 'center',
                      backgroundColor: '#11382B',
                      paddingVertical: 6,
                      paddingHorizontal: 16,
                      borderRadius: 20,
                      borderWidth: 1,
                      borderColor: '#1C4A3A'
                    }}>
                      <Text style={{ color: '#00B986', fontSize: 13, fontWeight: 'bold' }}>
                        OPay Verve Classic
                      </Text>
                    </View>

                    {/* THE FLATLIST */}
                    <FlatList
                      data={benefitsData}
                      renderItem={renderBenefitItem}
                      keyExtractor={(item) => item.id}
                      scrollEnabled={false}

                    />

                  </View>
                </View>

                <TouchableOpacity style={{ paddingVertical: 10, paddingHorizontal: 100, backgroundColor: '#00B986', alignSelf: 'center', justifyContent: 'center', borderRadius: 20 }}>
                  <Text style={{ fontWeight: '800', fontSize: 16 }}>Get It Now</Text>
                </TouchableOpacity>










              </View>
            ) : (

              <View style={{ flex: 1, gap: 20, padding: 10 }}>
                <View style={{ width: '100%', height: 200, }}>
                  <Image style={{ height: '100%', width: '100%', borderRadius: 20 }} source={require('../assets/opaycard.png')} />
                </View>

                <View style={{
                  backgroundColor: '#393535', borderRadius: 18,
                  paddingHorizontal: 20, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', paddingVertical: 5
                }}>
                  <Text style={{ color: 'white' }}>123456******7890</Text>
                  <Entypo name="chevron-right" size={20} color="black" />
                </View>



                <View style={{
                  backgroundColor: '#393535', borderRadius: 18, padding: 10, paddingHorizontal: 20, flexWrap: 'wrap', flexDirection: 'row', width: '100%'
                }}>

                  <TouchableOpacity activeOpacity={0.5} style={{ gap: 5, alignItems: 'center', height: 80, width: 120 }}>
                    <View style={{ height: 40, width: 40, backgroundColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ height: 27, width: 27 }} source={require('../assets/card1.png')} />

                    </View>
                    <Text style={{ color: '#bbb9b9', fontSize: 11, }}>Details</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.5} style={{ gap: 5, alignItems: 'center', height: 80, width: 120 }}>
                    <View style={{ height: 40, width: 40, backgroundColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ height: 27, width: 27 }} source={require('../assets/card2.png')} />

                    </View>
                    <Text style={{ color: '#bbb9b9', fontSize: 11, }}>Card Settings</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.5} style={{ gap: 5, alignItems: 'center', height: 80, width: 120 }}>
                    <View style={{ height: 40, width: 40, backgroundColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ height: 27, width: 27 }} source={require('../assets/caution.png')} />

                    </View>
                    <Text style={{ color: '#bbb9b9', fontSize: 11, }}>Mange Dispute</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.5} style={{ gap: 5, alignItems: 'center', height: 80, width: 120 }}>
                    <View style={{ height: 40, width: 40, backgroundColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ height: 27, width: 27 }} source={require('../assets/shop.png')} />

                    </View>
                    <Text style={{ color: '#bbb9b9', fontSize: 11, }}>Mange Online Merchant</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.5} style={{ gap: 5, alignItems: 'center', height: 80, width: 120 }}>
                    <View style={{ height: 40, width: 40, backgroundColor: 'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                      <Image style={{ height: 27, width: 27 }} source={require('../assets/note.png')} />

                    </View>
                    <Text style={{ color: '#bbb9b9', fontSize: 11, }}>Transactions</Text>
                  </TouchableOpacity>

                </View>






              </View>
            )}

          </View>


        </ScrollView>


      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({})