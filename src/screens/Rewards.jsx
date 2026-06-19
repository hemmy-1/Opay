import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput } from 'react-native'
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

          <View style={{ gap: 20, padding: 20 }}>

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

        <TouchableOpacity onPress={() => setIsModalOn(true)} style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', height: 50, width: 200, alignSelf: 'center', marginTop: 30, borderRadius: 10, flexDirection: 'row', gap: '10' }}>
          <MaterialCommunityIcons name="send" size={24} color="white" />
          <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>Share Receipt</Text>
        </TouchableOpacity>



        <Modal
          visible={isModalOn}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setIsModalOn(false)}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.75)', justifyContent: 'center', padding: 20 }}>
            <View style={{ backgroundColor: '#262626', borderRadius: 20, padding: 24, borderWidth: 1, borderColor: '#333' }}>

              <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold', marginBottom: 18 }}>Configure Identity Twist</Text>

              <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Set Nickname</Text>
              <TextInput value={tempNickname} onChangeText={setTempNickname} style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 16, fontSize: 14 }} />

              <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Set Username</Text>
              <TextInput value={tempUsername} onChangeText={setTempUsername} autoCapitalize="none" style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 16, fontSize: 14 }} />

              <Text style={{ color: '#8E8E93', fontSize: 12, marginBottom: 6 }}>Set Desired Balance (₦)</Text>
              <TextInput value={tempBalance} onChangeText={setTempBalance} keyboardType="numeric" style={{ backgroundColor: '#1A1A1A', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 24, fontSize: 14 }} />

              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', gap: 12 }}>
                <TouchableOpacity onPress={() => setIsModalOpen(false)} style={{ paddingVertical: 10, paddingHorizontal: 16 }}>
                  <Text style={{ color: '#8E8E93', fontWeight: '500' }}>Discard</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSaveProfile} style={{ backgroundColor: '#0d6528', paddingVertical: 10, paddingHorizontal: 22, borderRadius: 8 }}>
                  <Text style={{ color: '#00C853', fontWeight: 'bold' }}>Save Profile</Text>
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