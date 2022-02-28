import React,{useState} from 'react';
import {Text, View,Image} from 'react-native';
import styles from './styles';
import { Calendar } from 'react-native-calendario';
import colors from '../../constants/colors';


const MainScreen = () => {


  return (
    <View style={styles.container}>
    <Text style={styles.generaltext}>Principal</Text>
    <Calendar numberOfMonths={1} theme={{
      monthTitleTextStyle: {
      color: colors.color3,
      fontWeight: '300',
      fontSize: 16,
      fontFamily: 'Lato',
    },
    weekColumnsContainerStyle: {
     width: 400,
    },
    weekColumnStyle: {
      paddingVertical: 5,
    },}}/>
    </View>
    
  );
}



export default MainScreen;