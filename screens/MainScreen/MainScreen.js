import React,{useState} from 'react';
import {Text, View,Image,TouchableOpacity} from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../constants/colors';


const MainScreen = () => {


  return (
    <View style={styles.container}>
       <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a','#4c669f', '#3b5998', '#192f6a','#4c669f', '#3b5998', '#192f6a','#4c669f', '#3b5998', '#192f6a','#4c669f', '#3b5998', '#192f6a','#4c669f', '#3b5998', '#192f6a','#4c669f', '#3b5998', '#192f6a','#4c669f', '#3b5998', '#192f6a', '#3b5998']}
        locations={[0,0.04,0.08,0.12,0.16,0.2,0.24,0.28,0.32,0.36,0.4,0.44,0.48,0.52,0.56,0.6,0.64,0.68,0.72,0.76,0.8,0.84,0.88,0.94,1]}
        style={styles.ourday}>
        <View ></View>
      </LinearGradient>
    
      <TouchableOpacity><Text style={styles.generaltext}>Change Mood</Text></TouchableOpacity>
      <TouchableOpacity><Text style={styles.generaltext}>Save Mood day</Text></TouchableOpacity>


    </View>
    
  );
}



export default MainScreen;