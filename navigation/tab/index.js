import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../../screens/MainScreen/MainScreen';
import SettingScreen from '../../screens/SettingScreen/SettingScreen';
import InfoScreen from '../../screens/InfoScreen/InfoScreen';
import HistorialScreen from '../../screens/HistorialScreen/HistorialScreen';
import MoodNavigator from '../mood';
import colors from '../../constants/colors';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="MainTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name="MainTab"
        component={MoodNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <Text style={styles.text}>Calendario</Text>
            </View>
          )
        }}
      />
     <BottomTabs.Screen
        name="HistorialTab"
        component={HistorialScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
               <Text style={styles.text}>Guardados</Text>
            </View>
          )
        }}
      /> 

      <BottomTabs.Screen
        name="InfoTab"
        component={InfoScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
               <Text style={styles.text}>Info</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="SettingTab"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
               <Text style={styles.text}>Ajustes</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.color6,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
    shadowColor: '#7f5df0',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: colors.color2, 
  }
});

export default TabNavigator;