import React,{useState} from 'react';
import {Text, View,Image,Button,Pressable} from 'react-native';
import styles from './styles';


const WelcomeScreen = () => {


  return (
    <View style={styles.container}>
       <Image
        style={styles.imglogo}
        source={require('../../imgs/logowhite.png')}
      />
     
    <Pressable style={styles.button}>
    <Text style={styles.generaltext}>Start</Text>
    </Pressable>
     
    </View>
    
  );
}



export default WelcomeScreen;