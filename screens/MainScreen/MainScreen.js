import React,{useState} from 'react';
import {Text, View,Image} from 'react-native';
import styles from './styles';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import colors from '../../constants/colors';


const MainScreen = () => {


  return (
    <View style={styles.container}>
    <Text style={styles.generaltext}>Principal</Text>
    {/* Buscar nueva libreria de calendario/implementar de cero, fallas provenientes de la misma. Se necesita reiniciar app para cambiar colores. Not good */}

     <Calendar
     markingType={'custom'}
     style={{
      borderWidth: 1,
      borderColor: colors.color3,
      height: 360
    }}
    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme={{
      backgroundColor: colors.color3,
      calendarBackground: colors.maincolor,
      textSectionTitleColor: '#b6c1cd',
      textSectionTitleDisabledColor: '#d9e1e8',
      selectedDayBackgroundColor: '#00adf5',
      selectedDayTextColor: 'yellow',
      todayTextColor: 'blue',
      dayTextColor: 'orange',
      textDisabledColor: '#d9e1e8',
      dotColor: '#00adf5',
      selectedDotColor: '#ffffff',
      arrowColor: colors.color2,
      disabledArrowColor: '#d9e1e8',
      monthTextColor: colors.color2,
      indicatorColor: 'blue',
      textDayFontFamily: 'monospace',
      textMonthFontFamily: 'monospace',
      textDayHeaderFontFamily: 'monospace',
      textDayFontWeight: '300',
      textMonthFontWeight: 'bold',
      textDayHeaderFontWeight: '300',
      textDayFontSize: 16,
      textMonthFontSize: 16,
      textDayHeaderFontSize: 16
    }}/>
    </View>
    
  );
}



export default MainScreen;