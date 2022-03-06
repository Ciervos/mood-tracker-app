import React,{useState} from 'react';
import {Text, View,FlatList,TouchableHighlight,Modal} from 'react-native';
import styles from './styles';
import {EMOTIONS} from '../../data/emotions';
import ModalComponent from '../../components/ModalComponent';


const MoodScreen = () => {

const [itemSelected,setItemSelected] = useState('')
const [txtForModal,setTxtForModal] = useState('')
const [modalVisible,setModalVisible] = useState(false)

const selectingItem = item =>{
  setItemSelected(item)
  setTxtForModal(`agregar como emoción actual estar ${item.emotion}`)
  setModalVisible(!modalVisible)
}
const handleConfirm = () =>{
  //Agregar lógica de confirmación
  setModalVisible(!modalVisible)
}

const handleCancelOption = () =>{
  setModalVisible(!modalVisible)
}

  return (
    <View style={styles.container}>
    <Text style={styles.generaltext}>¿Cómo te sientes ahora?</Text>
    <FlatList
        data={EMOTIONS}
        renderItem={({item}) =>(
          <View style={styles.item} key={item.id}>
     <TouchableHighlight style={{backgroundColor: item.color, height: 30, alignItems: 'center', justifyContent: 'center'}} onPress={()=>selectingItem(item)}>
        
          <Text style={{fontFamily:'Lato',
           color: 'white',textShadowColor: 'black',
           textShadowOffset: { width: 1, height: 1 },
           textShadowRadius: 2}}>{item.emotion}</Text>
        
      </TouchableHighlight>
          
        </View>)}
        keyExtractor={item => item.id}
      />
     <ModalComponent modalVisible={modalVisible} textToInclude={txtForModal} handleConfirm={handleConfirm} handleCancelOption={handleCancelOption}/>  
    </View>
    
  );
}



export default MoodScreen;