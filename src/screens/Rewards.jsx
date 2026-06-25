import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, FlatList } from 'react-native'
import { use, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
export default function Rewards() {

  const [isModalOn, setIsModalOn] = useState(false);
  const Data = [
    {
      id: 1,
      image: require('../assets/icons8-friends-100.png'),
      title: 'Friday Bouns'
    },
    {
      id: 2,
      image: require('../assets/icons8-money-100.png'),
      title: 'Referral Friends'
    },
    {
      id: 3,
      image: require('../assets/icons8-star-100.png'),
      title: 'Play4achild'
    },
    {
      id: 4,
      image: require('../assets/icons8-voucher-100 (1).png'),
      title: 'Voucher Pack'
    },
  ]

  const renderItem = ({ item }) => (
    <View style={{ marginLeft:10 }}>
      <View style={{ height: 80, width: 80, borderRadius: 5, backgroundColor: '#383737', alignItems:'center', justifyContent:'center' }}>
        
        <View  style={{alignItems:'center', justifyContent:'center', }}>
          <View style={{height:35, width:35, backgroundColor:'#393535', alignItems:'center', justifyContent:'center', borderRadius:5}}>
        <Image source={item.image} style={{ height: 30, width: 30, }} />
          </View>
        <Text style={{ color: 'white', fontSize:10 }}>{item.title}</Text>
        </View>
      </View>
    </View>
  )

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ height: 200, width: "100%", backgroundColor: '#0c542c', padding: 20, borderBottomRightRadius:20, borderBottomLeftRadius:20 }}>
          <View style={{ flexDirection: "row", alignItems: 'center', gap: 10, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, color: 'white' }}>
              Rewards
            </Text>
            <View style={{ width: 30, height: 30, borderRadius: 30, borderWidth: 2, justifyContent: 'center', alignItems: 'center', borderColor: 'white' }}>
              <Entypo name="dots-three-horizontal" size={18} color="white" />
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignitems: 'center', gap: 10, justifycontent: 'center' }}>
              <Text style={{ fontsize: 16, color: 'white' }}>
                Cashback
              </Text>
              <EvilIcons name="question" size={24} color="black" />
            </View>

            <View>
              <Text style={{ fontsize: 16, color: 'white' }}>
                Voucher
              </Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, justifycontent: 'center' }}>
              <MaterialCommunityIcons name="bitcoin" size={24} color="black" />
              <Text style={{ frontsize: 16, color: 'white' }}>
                # 436.90
              </Text>
            </View>
            <View>
              <Text style={{ fontsize: 16, color: 'white' }}>
                #0
              </Text>

            </View>
            <Text style={{ fontWeight: '300', fontSize: 12 }}>The payment will be deducted from your wallet.</Text>
          </View>
        </View>


        <View style={{position:'relative', top:-50}}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
          />
        </View>

        <Text style={{ fontsize: 16, color: 'white' }}>Daily Bonus</Text>

        <View style={{ padding: 10, }}>
          <View style={{ backgroundColor: 'gray', height: '70%', width: '100%', borderRadius: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifycontent: 'center', gap: 10, }}>
              <Text>Glo Airtime</Text>
              <MaterialCommunityIcons name="bitcoin" size={24} color="black" />
              <Text>+Up to 6%</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifycontent: 'center', gap: 10, }}>
              <Text>Buy Airtime and get up to 6% cashback</Text>
              <View>
                <View style={{ height: 30, width: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', borderRadius: 15 }}>
                  <Text>Go</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>


  );
}

const styles = StyleSheet.create({})

//fuction deleration and array
//array methods


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',

  },
})
