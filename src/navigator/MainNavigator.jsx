import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Opaylogin from '../screens/OpayLogin'
import TabNavigation from './TabNavigation'
import Finance from '../screens/Finance'
import Rewards from '../screens/Rewards'
import Cards from '../screens/Cards'
import Me from '../screens/Me'
import Home from '../screens/Home'
import MyProfile from '../screens/MyProfile'
import AccountLimit from '../screens/AccountLimit'



const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Opaylogin} />
      <Stack.Screen name='TabNavigation' component={TabNavigation} />
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Rewards' component={Rewards} />
      <Stack.Screen name='Finance' component={Finance} />
      <Stack.Screen name='Cards' component={Cards} />
      <Stack.Screen name='Me' component={Me} />
      <Stack.Screen name='MyProfile' component={MyProfile} />
      <Stack.Screen name='Account' component={AccountLimit} />
    </Stack.Navigator>
  )
}

export default MainNavigator;

