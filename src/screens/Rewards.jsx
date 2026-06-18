import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { use, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Rewards() {

  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>

          <View style={{ height: 40, width: 40, backgroundColor: '#88888856', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name="arrow-back" size={24} color="black" />


          </View>
          <Text style={{ fontSize: 22, fontWeight: '800' }}>Transfer Successful</Text>
        </View>


        <View style={{ marginTop: 40 }}>

          <Text style={{ textAlign: 'justify', fontSize: 20 }}>
            {"You transfer of ₦[amount] to [Recivers's Name]\nhas been completed successfully."}
          </Text>

          <View style={{ gap: 20, padding:20}}>

            <Text style={{ fontSize: 20, fontWeight: '800', marginTop: 30 }}>Transaction Details</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Receiver</Text>
              <Text>[Receiver's Name]</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Account Number</Text>
              <Text>[Account No.]</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Bank</Text>
              <Text>[Bank Name]</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Receiver</Text>
              <Text>#[amount]</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Date:</Text>
              <Text>10/09/2025</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Time:</Text>
              <Text>12:12pm</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={()=> setIsModalOn(true)} style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', height: 50, width: 200, alignSelf: 'center', marginTop: 30, borderRadius: 10, flexDirection:'row', gap:'10' }}>
          <MaterialCommunityIcons name="send" size={24} color="white" />
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Share Receipt</Text>
        </TouchableOpacity>



        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalOn}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <View style={{ flexWrap: 'wrap', width: '65%', backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>

              <View style={{ flexDirection: 'column' }}>

                <TouchableOpacity onPress={() => setIsModalOn(false)} style={{ width: '100%', justifyContent: 'flex-end', paddingLeft: 220 }}>
                  <MaterialIcons name="cancel" size={24} color="black" style={{}} />
                </TouchableOpacity>

                <View>
                  <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: "800" }}>
                    Confirm Transfer
                  </Text>
                  <Text style={{ textAlign: 'center', fontSize: 12 }}>
                    {"You are about to send\n₦(amount) to (Recivers's Name).\nPlease confirm the details before proceeding"}
                  </Text>

                  <View style={{ gap: 8 }}>

                    <Text style={{ fontSize: 16, fontWeight: '800', marginTop: 30 }}>Transaction Details</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text>Receiver</Text>
                      <Text>[Receiver's Name]</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text>Account Number</Text>
                      <Text>[Account No.]</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text>Bank</Text>
                      <Text>[Bank Name]</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text>Receiver</Text>
                      <Text>#[amount]</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text>Date:</Text>
                      <Text>10/09/2025</Text>
                    </View>

                  </View>
                </View>

                <TouchableOpacity style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', height: 45, width: 200, alignSelf: 'center', marginTop: 30, borderRadius: 10 }}>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Contiune</Text>
                </TouchableOpacity>
              </View>





            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </SafeAreaProvider>


  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingVertical: 40
  }
})