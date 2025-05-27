import { StyleSheet,Dimensions} from 'react-native';
import { height,width } from 'react-native-dimension';
export const styles = StyleSheet.create({
    bioinput:{
        width:width(87),
        height:height(15),
        backgroundColor:'white',
        borderRadius:15,
    },
    pertext:{
        color:'black',
        fontSize:18,
        fontWeight:'600',
        marginLeft:width(6.5),
        marginBottom:12,
        marginTop:height(2)
    }
});