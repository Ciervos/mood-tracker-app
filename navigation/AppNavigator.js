import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import MainNavigator from '../navigation/main/index';
import colors from '../constants/colors';



const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
  <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome"
       component={WelcomeScreen}
       options={{ title: '',
       headerShown: false}} />

      <Stack.Screen name="Main" 
      component={MainNavigator}
      options={{ title: '' ,
      headerShown: false}} />
  </Stack.Navigator>
   </NavigationContainer>
  
      
  
);

export default AppNavigator;