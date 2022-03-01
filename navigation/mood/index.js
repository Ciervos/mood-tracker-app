import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../../screens/MainScreen/MainScreen';
import MoodScreen from '../../screens/MoodScreen/MoodScreen';
import colors from '../../constants/colors';



const Stack = createNativeStackNavigator();

const MoodNavigator = () => (
 
  <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home"
       component={MainScreen}
       options={{ title: '',
       headerShown: false }} />

      <Stack.Screen name="MoodPicker" 
      component={MoodScreen}
      options={{ title: '' ,
      headerStyle: {
       backgroundColor: colors.maincolor
     },
      headerTintColor: colors.color3
     }} />
  </Stack.Navigator>
   
  
      
  
);

export default MoodNavigator;