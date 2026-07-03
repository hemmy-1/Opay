
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const TransferToBank = () => {
  const navigation = useNavigation()
  const amounts = [
    "₦500",
    "₦1000",
    "₦2000",
    "₦5000",
    "₦9,999",
    "₦10,000",
  ];


  return (
    <View style={styles.container}>

      <View style={{
        flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 18, paddingTop: 50, paddingBottom: 20,
        backgroundColor: "#262626",
      }}>
        <View style={{ gap: 10, flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#fff", fontSize: 25 }}>←</Text>
          </TouchableOpacity>
          <Text style={{ color:'white', fontSize: 20, }}>Transfer to OPay Account</Text>

        </View>
        <TouchableOpacity>
          <Text style={{ color: "#0ACF83", fontsize: 16, }}>Records</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
          <Ionicons name="person-circle" size={60} color="white" />


          <View>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
              JOSEPH OLUWAFEMI ADEGBOLA
            </Text>
            <Text style={{ color: "#888", marginTop: 5, fontSize: 16 }}>
              912 147 0216
            </Text>
          </View>
        </View>
      </View>


      <View style={{ padding: 20 }}>
        <View style={{ backgroundColor: "#2B2B2B", paddingHorizontal: 15, borderRadius: 18, }}>
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 16, marginTop: 10 }}>Amount</Text>
          <View style={styles.trans}>
            <Text style={{ color: "#00D084", fontSize: 10, }}>
              NO Transaction Fees
            </Text>
          </View>
          <View>
            <TextInput
              placeholder="₦ 10.00- 5,000,000.00"
              placeholderTextColor="#777"
              style={{ color: "fff", fontSize: 16, marginTop: 10 }}
            />
          </View>
          <View style={{ height: 1, backgroundColor: "#444", marginVertical: 20, }}>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
            {amounts.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{ width: "31%", backgroundColor: "#1F1F1F", paddingVertical: 12, borderRadius: 10, alignItems: "center", marginBottom: 12 }}
              >
                <Text style={{ color: "#ccc", fontSize: 10, }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <View style={styles.Remark}>
          <Text style>Remark</Text>
          <TextInput
            placeholder="What's this for? (Optimal)"
            placeholderTextColor="#666"
            style={{ color: "#fff", marginTop: 20, fontSize: 18 }}
          />
          <View style={{ height: 1, backgroundColor: "#444", marginVertical: 20, }}>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity style={{ width: "48%", height: 50, backgroundColor: "#1F1F1F", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "#CCC", fontSize: 18, }}>
                Purchase
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: "48%", backgroundColor: "#1F1F1F", borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "#CCC", fontSize: 18, }}>
                Personal
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>




      <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 30 }}>
        <TouchableOpacity style={{ backgroundColor: "#007A5A", paddingVertical: 8, borderRadius: 30, alignItems: "center" }}>
          <Text style={{ color: "#222", fontWeight: "bold", fontSize: 24 }}>
            Confirm
          </Text>
        </TouchableOpacity>

      </View>



    </View>

  )
}

export default TransferToBank

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",

  },
  Remark: {
    width: "100%",
    height: 180,

    backgroundColor: "#1F1F1F",
    padding: 20,
    borderRadius: 15,

  },
  trans: {
    position: "absolute",
    top: 0,
    right: 0,
    paddingHorizontal: 8,
    backgroundColor: "#1f5808",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5



  },
});