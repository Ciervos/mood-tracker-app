import { StyleSheet} from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AppNavigator from './navigation/AppNavigator';
import { init } from './db';


init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect')
    console.log(err.message)
  })


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
