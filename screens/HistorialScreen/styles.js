import { StyleSheet } from 'react-native'
import colors from '../../constants/colors';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.maincolor,
        alignItems: 'center',
        justifyContent: 'center',
      },
      generaltext:{
       color: colors.color2, 
       fontFamily: 'Lato',  
      }

  
});


export default styles