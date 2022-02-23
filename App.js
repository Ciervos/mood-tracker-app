import { useState } from 'react';
import { StyleSheet} from 'react-native';
import Calendar from 'react-native-swipe-calendar';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';




const FONT_DEFAULT = 'Lato';
export default function App() {
  
  const [loaded] = useFonts({
    [FONT_DEFAULT]: require('./assets/fonts/Lato-Regular.ttf'),
  });
 


if (!loaded) return <AppLoading />;

  return (
    <AppNavigator/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
