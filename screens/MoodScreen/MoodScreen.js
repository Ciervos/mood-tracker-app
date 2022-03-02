import React,{useState} from 'react';
import {Text, View,FlatList,Button,TouchableHighlight} from 'react-native';
import styles from './styles';
import {EMOTIONS} from '../../data/emotions';


const MoodScreen = () => {

console.log(EMOTIONS)

  return (
    <View style={styles.container}>
    <Text style={styles.generaltext}>¿Cómo te sientes ahora?</Text>
    <FlatList
        data={EMOTIONS}
        renderItem={({item}) =>(
          <View style={styles.item} key={item.id}>
     <TouchableHighlight style={{backgroundColor: item.color, height: 30, alignItems: 'center', justifyContent: 'center'}}>
        
          <Text style={{fontFamily:'Lato',
           color: 'white',textShadowColor: 'black',
           textShadowOffset: { width: 1, height: 1 },
           textShadowRadius: 2}}>{item.emotion}</Text>
        
      </TouchableHighlight>
          
        </View>)}
        keyExtractor={item => item.id}
      />
    </View>
    
  );
}



export default MoodScreen;