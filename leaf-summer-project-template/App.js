import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import AssetExample from './components/AssetExample';
import LoginScreen from './screens/LoginScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import HomeScreen from './screens/HomeScreen';
import IntroScreen from './screens/IntroScreen';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initalRouteName = "Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Intro" component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

