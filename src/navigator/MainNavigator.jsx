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
import { useState } from 'react'
import Email from '../screens/Email'
import Work from '../screens/Work'
import AddMoney from '../screens/AddMoney'
import TransactionHistory from '../screens/TransactionHistory'
import VerifyKYC from '../screens/VerifyKYC'
import Withdraw from '../screens/Withdraw'
import ToBank from '../screens/ToBank'
import ToOpay from '../screens/ToOpay'
import TransferToBank from '../screens/TransferToBank'
import BankCard from '../screens/BankCard'
import AddCard from '../screens/AddCard'


const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        
        <Stack.Screen name='Login'>
          {(props) => <Opaylogin {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
      ) : (
       
        <>
          <Stack.Screen name='TabNavigation' component={TabNavigation} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Rewards' component={Rewards} />
          <Stack.Screen name='Finance' component={Finance} />
          <Stack.Screen name='Cards' component={Cards} />
          <Stack.Screen name='Me' component={Me} />
          <Stack.Screen name='MyProfile' component={MyProfile} />
          <Stack.Screen name='Account' component={AccountLimit} />
          <Stack.Screen name='Email' component={Email} />
          <Stack.Screen name='Work' component={Work} />
          <Stack.Screen name='AddMoney' component={AddMoney} />
          <Stack.Screen name='History' component={TransactionHistory} />
          <Stack.Screen name='Verify' component={VerifyKYC} />
          <Stack.Screen name='Withdraw' component={Withdraw} />
          <Stack.Screen name='ToBank' component={ToBank} />
          <Stack.Screen name='ToOpay' component={ToOpay} />
          <Stack.Screen name='TransferToBank' component={TransferToBank}/>
          <Stack.Screen name='BankC' component={BankCard}/>
          <Stack.Screen name='AddCard' component={AddCard}/>
        </>
      )}
    </Stack.Navigator>
  )
}

export default MainNavigator;

