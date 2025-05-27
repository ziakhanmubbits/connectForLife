import { StyleSheet,Dimensions} from 'react-native';
import { colors } from '../../../services';
import { height,width } from 'react-native-dimension';
export const styles = StyleSheet.create({
    bplanwrapper:{
        // backgroundColor :colors.appBgColor1,
        backgroundColor:'#C53AA6',
        width:width(91),height:height(12),
        borderRadius:13
    },
    subWrapper:{
    height:height(12),
    width:width(45),
    borderRadius:15,
    paddingLeft:12,
    padding:6
    },
    bptext:{
        color:'white',
        fontWeight:'600',fontSize:15
    },
    bpdestext:{
    color:'white',
    fontSize:11
    },
    Pplanwrapper:{
        // backgroundColor :colors.appBgColor1,
        backgroundColor:'#9F3AC5',
        width:width(91),height:height(12),
        borderRadius:13
    },
    textstyle:{
        color:'white',
    },
    btnstyle:{
        bottom:0,position:'absolute',
    }
});