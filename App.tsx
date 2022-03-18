import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import { Button, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TailwindProvider} from 'tailwind-rn'
import utilities from './tailwind.json'
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from './src/store'

import { RootState } from '@/store'

import Main from '@pages/index'

function DetailsScreen({navigation}: {navigation: any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <Main />
      </TailwindProvider>
    </Provider>
  );
}