import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Landing from './src/components/screens/Landing';
import AuthPage from './src/components/screens/AuthPage';
import Home from './src/components/screens/Home';
import Menu from './src/components/Menu';
import FoodDetails from './src/components/foods/FoodDetails';
import Profile from './src/components/profile/Profile';

import Footer from './src/components/Footer';


import { Provider } from 'react-redux';
import {store} from './src/store';



const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('token1', value)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('token1')
    if (value !== null) {
      console.log(value);
    }
  } catch (e) {
    // error reading value
  }
}

removeValue = async () => {
  try {
    await AsyncStorage.removeItem('token')
  } catch (e) {
    // remove error
  }
}


export default function App() {
  //removeValue();
  // storeData('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYW5pbGV2aTAxMDExQGdtYWlsLmNvbSIsIl9pZCI6IjYwOWQzYjUwYWExZjYxNGNhNDQyMGY1MCIsImlhdCI6MTYyMTI2MzkyMCwiZXhwIjoxNjIxNDQzOTIwfQ.rjBCKd0gS8RhdSefmRzCAoMeBPRFxV5dtb7DqQBfvWI');
  // getData()
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator  headerMode='none'>
          <Stack.Screen name="FooDelicious" component={Landing} />
          <Stack.Screen name="Welcom" component={AuthPage} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="FoodDetails" component={FoodDetails} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator> 
      </NavigationContainer>
    </Provider>
  );
}