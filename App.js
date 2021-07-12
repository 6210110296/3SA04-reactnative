import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import zipCodeScreen from './screen/ZipCodeScreen';
import Constants from 'expo-constants';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={zipCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}