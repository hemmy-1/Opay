import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function Opaylogin() {

  const navigation = useNavigation()

  const [isPasswordVisible, setIsPasswordVisible] = useState('false');
  const [password, setPassword] = useState('');
  const isButtonDisabled = password.length !== 6;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 100
          }}>
          <Image source={require('../assets/oopay.png')} style={{ height: 70, width: 70 }} />
          <Text
            style={{ fontSize: 50, color: 'white', alignSelf: 'center' }}>pay</Text>
        </View>



        <View style={{ alignSelf: 'center', marginTop: 40 }}>
          <Image source={require('../assets/myimage.png')}
            style={{ height: 80, width: 80, alignSelf: 'center', borderRadius: 50 }} />
          <Text
            style={{
              fontSize: 20, color: 'white',
              alignSelf: 'center',
              marginTop: 10
            }}
          >hemmy(915****383)
          </Text>

        </View>



        <View style={{
          height: 55, width: 420,
          borderRadius: 10, backgroundColor: '#252222',
          borderWidth: 1, alignSelf: 'center',
          marginTop: 30, flexDirection: 'row',
          alignItems: 'center', borderColor: '#1DCF9F'
        }}>

          <TextInput
            style={{
              height: 50, width: '90%',
              marginStart: 10,
              color: 'white'
            }}
            placeholder="Enter 6 digit password"
            placeholderTextColor={"white"}
            secureTextEntry={!isPasswordVisible}
            value={password}
            keyboardType='numeric'
            onChangeText={(val) => setPassword(val)}
            maxLength={6}
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => alert('Go opay office i no send u ):')}
          onLongPress={() => alert('No problem i will sha help u (❁´◡`❁)')}
          style={{ flexWrap: 'wrap', alignSelf: 'flex-end' }}>
          <View>
            <Text style={{ color: '#1DCF9F', margin: 40, marginTop: 10 }}>Forgot Password</Text>

          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[isButtonDisabled && style.disabledButton]}
          disabled={isButtonDisabled}

          onPress={() => navigation.navigate('OpayScreen')}>

          <View style={{
            height: 50, width: 350, backgroundColor: '#1DCF9F', borderWidth: 2,
            alignSelf: 'center',
            borderRadius: 30,
            //alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text
              style={{
                alignSelf: 'center',
                //,
                fontSize: 20
              }}

            >
              Log in
            </Text>

          </View>
        </TouchableOpacity>


      </SafeAreaView>
    </SafeAreaProvider>

  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    backgroundColor: '#252222',

    //justifyContent: 'center',
    //alignContent: 'center',
    //alignSelf: 'center'


  },
  disabledButton: {
    height: 50,
    width: 350,
    backgroundColor: '#1dcfa038',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 30,
    //alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    height: 50,
    width: 350,
    backgroundColor: '#1dcfa038',
    borderWidth: 2,
    alignSelf: 'center',
    borderRadius: 30,
    //alignItems: 'center',
    justifyContent: 'center'
  }

})