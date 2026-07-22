import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from "./src/navigator/MainNavigator";
import { BalanceProvider } from './src/assets/Components/BalanceProvider';



export default function App() {
  return (
    <BalanceProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </BalanceProvider>
  )
}