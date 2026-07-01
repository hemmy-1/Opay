import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, FlatList } from 'react-native'
import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';


export default function Rewards() {
  const [isModalOn, setIsModalOn] = useState(false);

  const Rewards = [
    {
      id: '1',
      title: "Glo Airtime",
      cashback: "Up to 6%",
      desc: "Buy Airtime and get up to 6% Cashback",
    },
    {
      id: '2',
      title: "9 Mobile Airtime",
      cashback: "Up to 5%",
      desc: "Buy Airtime and get up to 5% CAshback",
    },
    {
      id: '3',
      title: "MTN/Airtel Airtime",
      cashback: "Up to 3.5%",
      desc: "Buy Airtime and get up to 3.5% Cashback",
    },
  ];
  const Data = [
    {
      id: '1',
      title: "Glo Airtime",
      cashback: "Up to 6%",
      desc: "Buy Airtime and get up to 6% Cashback",
    },
    {
      id: '2',
      title: "9 Mobile Airtime",
      cashback: "Up to 5%",
      desc: "Buy Airtime and get up to 5% CAshback",
    },
    {
      id: '3',
      title: "MTN/Airtel Airtime",
      cashback: "Up to 3.5%",
      desc: "Buy Airtime and get up to 3.5% Cashback",
    },
    {
      id: '4',
      title: "MTN/Airtel Airtime",
      cashback: "Up to 3.5%",
      desc: "Buy Airtime and get up to 3.5% Cashback",
    },
    {
      id: '5',
      title: "MTN/Airtel Airtime",
      cashback: "Up to 3.5%",
      desc: "Buy Airtime and get up to 3.5% Cashback",
    },
    {
      id: '6',
      title: "MTN/Airtel Airtime",
      cashback: "Up to 3.5%",
      desc: "Buy Airtime and get up to 3.5% Cashback",
    },
  ];
  const rewards = ({ item }) => (
    <View style={{ marginTop: 8, }}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifycontent: 'center', gap: 10,}}>
          <Image source={require('../assets/but.jpg')} style={{ width: 20, height: 20 }} />
          <Text>{item.title}</Text>
          <MaterialCommunityIcons name="bitcoin" size={24} color="black" />
          <Text>{item.cashback}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", gap: 10, }}>
          <Text>{item.desc}</Text>
          <View>
          </View>

          <TouchableOpacity style={{ height: 30, width: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', borderRadius: 15, transform: [{ translateY: -19 }] }}>
            <Text>Go</Text>
          </TouchableOpacity>
        </View>

        <View>
        </View>
      </View>
    </View>
  )
  const data = ({ item }) => (
    <View style={{ paddingVertical: 8 }}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifycontent: 'center', gap: 10, }}>
          <Image source={require('../assets/but.jpg')} style={{ width: 20, height: 20 }} />
          <Text>{item.title}</Text>
          <MaterialCommunityIcons name="bitcoin" size={24} color="black" />
          <Text>{item.cashback}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", gap: 10, }}>
          <Text>{item.desc}</Text>


          <TouchableOpacity style={{ height: 30, width: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green', borderRadius: 15, transform: [{ translateY: -19 }] }}>
            <Text>Go</Text>
          </TouchableOpacity>
        </View>

        <View>
        </View>
      </View>
    </View>
  )



  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{ height: 200, width: "100%", backgroundColor: '#0c542c', padding: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
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
            <Text style={{ fontWeight: '300', fontSize: 12 }}> </Text>
          </View>
        </View>


        <View style={{ flexDirection: "row", gap: 10, alignSelf: 'center' }}>

          <View style={styles.card}>

            <View style={{ height: 80, width: 80, borderRadius: 5, backgroundColor: '#383737', alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../assets/icons8-friends-100.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ textAlign: "center", fontSize: 12 }}> Friday Bouns</Text>

            </View>
          </View>



          <View style={styles.card}>
            <View style={{ height: 80, width: 80, backgroundColor: '#393535', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
              <Image source={require('../assets/icons8-money-100.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ textAlign: "center", fontSize: 12 }}>Refer Friends</Text>
            </View>

          </View>




          <View style={styles.card}>
            <View style={{ height: 80, width: 80, backgroundColor: '#393535', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
              <Image source={require('../assets/icons8-star-100.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ textAlign: "center", fontSize: 12 }}>Play4Child </Text>
            </View>

          </View>




          <View style={styles.card}>
            <View style={{ height: 80, width: 80, backgroundColor: '#393535', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
              <Image source={require('../assets/icons8-voucher-100.png')} style={{ width: 50, height: 50 }} />
              <Text style={{ textAlign: "center", fontSize: 12 }}>Voucher Pack</Text>
            </View>
          </View>


        </View>


        <Text style={{ fontsize: 16, color: 'white' }}>Daily Bonus</Text>


        <View style={{ backgroundColor: 'gray', height: '30%', width: '100%', borderRadius: 15, padding: 20, }}>
          <View style={{ flexWrap: 'wrap' }}>

            <FlatList
              data={Rewards}
              renderItem={rewards}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </ View>
          <TouchableOpacity onPress={() => setIsModalOn(true)} style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>View All</Text>
            <Entypo name="chevron-down" size={20} color="#f6f6f6" />
          </TouchableOpacity>
        </View>



        <View style={styles.banner}>
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.bannerTittle}>
              Claim 15 Discounts with
            </Text>

            <Text style={styles.bannerPrice}>
              #99 on any Bill
            </Text>
            <TouchableOpacity style={styles.claimButton}>
              <Text style={styles.claimText}>
                Claim 15 Discounts
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", justifyContent: "center", paddingRight: 40, }}>
            <Image source={require('../assets/but.jpg')} style={{ height: 100, width: 100 }} />
          </View>
        </View>



        <Modal
          visible={isModalOn}
          transparent={true}
        >
          <View style={{ padding: 30, flex: 0.6, backgroundColor: 'gray', marginTop: 'auto' }}>
            <TouchableOpacity onPress={() => setIsModalOn(false)} style={{ paddingHorizontal: 10, paddingVertical: 15, }}>
              <Text style={{ fontSize: 20, fontWeight: "light" }} >Close</Text>

            </TouchableOpacity>
            <FlatList
              data={Data}
              renderItem={data}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          </View>

        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>


  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',

  },
  card: {
    position: 'relative',
    top: -50
  },

  banner: {
    height: 150,
    width: "100%",
    marginTop: 15,
    backgroundColor: "#d8fff4",
    borderRadius: 18,
    justifyContent: "space-between",

    paddingLeft: 20,
    flexDirection: "row"

  },
  bannerTittle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bannerPrice: {
    color: "#00b386",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 8
  },
  claimButton: {
    borderRadius: 10,
    width: "70%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#09e67f",
    borderRadius: 25,
    marginTop: 8
  },
  bannerImage: {
    width: 100,
    height: 120,
    backgroundColor: "#ccc",
    backgroundColor: 12,
  },
});
