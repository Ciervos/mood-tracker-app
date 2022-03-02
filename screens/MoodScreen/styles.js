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
      },
      item:{
       width: 200,
       height: 30,
       margin: 3,
      },


  
});


export default styles