import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


export default function Rewards() {
  return (
    <View style={{
      flex: 1, paddingTop: 170, paddingHorizontal: 20,
    }}>
      <Text style={{ fontWeight: '800', fontSize: 20 }}>Property Verification Checklist</Text>

      <Text style={{ marginTop: 10 }}>Your safety is out priority. complete all required verification steps to confirm the proerty's authenticty and document befor making payment'</Text>


      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', columnGap: 20, marginTop: 50 }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/checked.jpeg')} />
          <View style={{ height: 50, borderStyle: 'dashed', borderWidth: 1, width: 0, marginTop: 10 }} />
          <View style={{ height: 20, width: 20, borderWidth: 1, borderRadius: 10, marginTop: 10 }} />
          <View style={{ height: 50, borderStyle: 'dashed', borderWidth: 1, width: 0, marginTop: 10 }} />
          <View style={{ height: 20, width: 20, borderWidth: 1, borderRadius: 10, marginTop: 10 }} />
        </View>

        <View style={{ gap: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', }}>{"Schedule a Property Inspection\n"}
            <Text style={{ fontSize: 14, fontWeight: 'normal', }}>{"Visit the property or arrange a physical inspection to verify its condition and location."}</Text>
          </Text>

          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{"Review Title and Ownership Documents\n"}
            <Text style={{ fontSize: 14, fontWeight: 'normal' }}>{"Examine all legal document to confirm property ownership and confirm the seller or landlord's authority over the property."}</Text>
          </Text>

          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{"Confirm Terms and Conditions\n"}
            <Text style={{ fontSize: 14, fontWeight: 'normal' }}>{"Ensure you unerstand the purchase, lease, or rental terms before proceeding."}</Text>
          </Text>
        </View>

      </View>


      <View style={{ flex: 1, justifyContent: 'space-around' }}>

        <View style={{gap:40}}>

          <View style={{ height: 40, width: 40, backgroundColor: '#4122cd42', borderRadius: 20, justifyContent: 'center', alignItems: 'center', padding: 8 , alignSelf:'flex-end',}}>
            <Image style={{ height: '100%', width: '100%' }} source={require('../assets/call.png')} />
          </View>
          <View style={{ alignSelf: 'center', alignItems: 'center', }}>

            <View style={{ paddingHorizontal: 100, paddingVertical: 12, borderRadius: 10, backgroundColor: 'black', alignSelf: 'center' }}><Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>Proceed
            </Text>
            </View>
            <Text style={{ fontWeight: '300', fontSize: 12 }}>The payment will be deducted from your wallet.</Text>
          </View>
        </View>

      </View>





    </View>
  )
}

const styles = StyleSheet.create({})

//fuction deleration and array
//array methods

