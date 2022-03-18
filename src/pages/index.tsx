import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useState, useEffect } from 'react'
import { Provider, useSelector, useDispatch } from 'react-redux'

import { RootState } from '@/store'
import { reconnectWallet, connectWallet } from '@/store/wallet'
import { setRegistered } from '@store/user'

import { Profile } from '@pages/Home'
import {Register} from '@pages/Regiester'




const Stack = createNativeStackNavigator();

export default function Main() {

  const dispatch = useDispatch()
  const [auth, setAuth] = useState(false);
  const address = useSelector((state: RootState) => state.wallet.address)

  useEffect(()=>{
    window.ethereum.on('accountsChanged', function () {
      dispatch(connectWallet)
      dispatch(setRegistered(false))
      console.log("address changed", address)
     });
  }, []);

  useEffect(()=>{
    dispatch(reconnectWallet)
    console.log("reconnectWallet", address)
  }, [address]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='NotLogin'>
        {!address ? (
          <Stack.Screen name="NotLogin" component={Register} />
        ) : (
          <Stack.Screen name="Profile" component={Profile} />
        )
        }  
      </Stack.Navigator>
    </NavigationContainer>
  )
}