import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import images from '../Constant/images'
import Feather from '@expo/vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import jsxRuntime from 'react/jsx-runtime';
import { BalanceProvider } from '../assets/Components/BalanceProvider';
import { useBalance } from '../assets/Components/BalanceProvider';





export default function Me() {
  const navigation = useNavigation();
  const logoImage = images.logoooo;

  const { isBalanceVisible, toggleBalanceVisibility, balance } = useBalance();


  const menuData = [
    {
      id: '1',
      title: 'Transaction History',
      imageSource: images.transaction,
      screen: 'History'

    },
    {
      id: '2',
      title: 'Account Limits',
      subtitle: 'View your transaction limits',
      imageSource: images.speed,
      screen: 'Account'
    },
    {
      id: '3',
      title: 'Bank Card/Account',
      subtitle: '3 linked cards/accounts',
      imageSource: images.card3,
      screen: 'BankC',
    },
    {
      id: '4',
      title: 'My BizPayment',
      subtitle: 'Receive payment for business',
      badgeText: 'Fast TFR',
      imageSource: images.shop1,
      screen: 'Testing'

    },
    {
      id: '5',
      title: 'OJunior',
      subtitle: 'Create an account for your child/ward',
      imageSource: images.people,

    },
    {
      id: '6',
      title: 'EaseMoni+',
      subtitle: 'Buy Now Pay Later',
      badgeText: 'Enjoy ₦0',
      imageSource: images.shop1,
    },
  ];

  const menuData2 = [
    {
      id: '1',
      title: 'Security Center',
      subtitle: 'Protect your funds',
      imageSource: images.shield2,
    },
    {
      id: '2',
      title: 'Customer Service Center',
      imageSource: images.ccare,
    },
    {
      id: '3',
      title: 'Invitation',
      subtitle: 'Invite friends and earn up to ₦6,300 Bonus', imageSource: images.celebration,
      group: 2,
    },
    {
      id: '4',
      title: 'OPay USSD',
      imageSource: images.card3,
    },
    {
      id: '5',
      title: 'Rate Us',
      imageSource: images.star,
    },
  ];



  const renderMenuItem = ({ item }) => {

    return (
      <TouchableOpacity
        onPress={() => {
          if (item.screen) {
            navigation.navigate(item.screen);
          } else {
            alert('coming soon');
          }
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
        }
        }
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Image
            source={item.imageSource}
            style={{ width: 25, height: 25, marginRight: 16 }}
            resizeMode="contain"
          />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: '#FFFFFF', fontSize: 15, fontWeight: '400' }}>{item.title}</Text>
            {item.subtitle && <Text style={{ color: '#888888', fontSize: 12, marginTop: 4 }}>{item.subtitle}</Text>}
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {item.badgeText && (
            <View style={{ backgroundColor: '#FF4D6A', paddingVertical: 3, paddingHorizontal: 8, borderRadius: 12, marginRight: 12 }}>
              <Text style={{ color: '#FFFFFF', fontSize: 11, fontWeight: '700' }}>{item.badgeText}</Text>
            </View>
          )}
          <Entypo name="chevron-right" size={16} color="#ffffff98" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: '#000' }}>

        <SafeAreaView style={{
          backgroundColor: '#0d6528', height: 260, padding: 10,
        }}>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#0d6528',
            borderRadius: 18,
            alignItems: 'center',
            marginVertical: 10, justifyContent: 'space-between'
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('MyProfile', logoImaget)} style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <View>
                <Image source={logoImage} style={{ width: 40, height: 40, borderRadius: 20 }} />
              </View>
              <View>

                <Text style={{ color: '#ffffff', fontSize: 24 }}>hi, hemmy</Text>
                <Text>Tier 3</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Feather name="settings" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ gap: 10 }}>

              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                <Text style={{ color: 'white' }}>Total Balance</Text>
                <TouchableOpacity onPress={() => { toggleBalanceVisibility }}>
                  {isBalanceVisible ? (
                    <MaterialCommunityIcons name="eye-outline" size={24} color="white" />
                  ) : (
                    <MaterialCommunityIcons name="eye-off-outline" size={24} color="white" />
                  )}
                </TouchableOpacity>
              </View>

              <Text style={{ color: 'white', fontSize: 25, fontWeight: '800' }}>
                {isBalanceVisible ? `₦${balance}` : '******'} <Text style={{ fontSize: 18 }}>.98
                </Text>
              </Text>
              <TouchableOpacity activeOpacity={0.5} style={{ height: 20, width: 170, backgroundColor: 'black', borderRadius: 10, paddingHorizontal: 3, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 11, color: 'white' }}>
                  {"Intrest credited today  "}<Text>{"+₦200"}</Text></Text>
              </TouchableOpacity>
            </View>
            <Image source={images.shield2} />
          </View>
          <View>

          </View>

          <View style={{
            flexDirection: 'row', backgroundColor: '#04b775', borderRadius: 24, paddingVertical: 8, paddingHorizontal: 16, justifyContent: 'space-between', alignItems: 'center', width: '100%',
            position: 'absolute',
            zIndex: 2, bottom: -30,
            alignSelf: 'center'
          }}>

            <View style={{ flexDirection: 'row', paddingRight: 12 }}>

              <Image
                source={images.shield}
                style={{ width: 20, height: 20, marginRight: 10, marginTop: 2 }}
                resizeMode="contain"
              />

              <View style={{}}>
                <Text style={{ color: '#043927', fontWeight: '700', fontSize: 16, letterSpacing: -0.3 }}>Security Check is ON
                </Text>

                <Text style={{ color: '#055339', fontSize: 13, marginTop: 4, fontWeight: '400', lineHeight: 16 }}>
                  Do safety check again to ensure your account's security.
                </Text>
              </View>
            </View>

            <TouchableOpacity style={{
              backgroundColor: '#222222EE',
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                color: '#00D285',
                fontWeight: '700',
                fontSize: 14
              }}>
                Review
              </Text>
            </TouchableOpacity>

          </View>
        </SafeAreaView>
        <View style={{ flex: 1, }}>

          <ScrollView>

            <View style={{
              gap: 50, backgroundColor: '#393535', borderRadius: 18, padding: 10,
              alignItems: 'center', justifyContent: 'center',
              marginHorizontal: 10, flexDirection: 'row', marginTop: 40
            }}>

              <FlatList
                data={menuData}
                keyExtractor={(item) => item.id}
                renderItem={renderMenuItem}
                scrollEnabled={false}

              />
            </View>


            <View style={{
              gap: 50, backgroundColor: '#393535', borderRadius: 18, padding: 10,
              alignItems: 'center', justifyContent: 'center',
              marginHorizontal: 10, flexDirection: 'row', marginTop: 10
            }}>

              <FlatList
                data={menuData2}
                keyExtractor={(item) => item.id}
                renderItem={renderMenuItem}
                scrollEnabled={false}

              />
            </View>
          </ScrollView>
        </View>

      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})