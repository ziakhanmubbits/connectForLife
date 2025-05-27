import { StyleSheet } from "react-native";
import { height,width } from "react-native-dimension";

export const styles = StyleSheet.create({
dot:{
    height :height(.67),
    width:width(.44),
    backgroundColor:"black",
    position:'absolute',
    borderRadius:height(1),
    left:width(2.8),
    bottom:height(2),
    top:height(.96),
    
},
mainhead:{
    width:width(88),
    justifyContent:'space-between',
    marginBottom:height(1),
    // backgroundColor:'red',
     left:width(2)
},
searchwrapper:{
    marginBottom:10,
    
},

})