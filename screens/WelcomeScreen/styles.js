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
      imglogo:{
       width: 250,
       height: 250, 
       resizeMode: 'contain',
      },
      button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: colors.color3,
        

      }

  
});


export default styles