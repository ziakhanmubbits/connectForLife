import { StyleSheet } from "react-native";
import { height,width } from "react-native-dimension";
import { colors } from "../../../services";

export const styles= StyleSheet.create({
    Choosetxt:{
        marginTop:-38,
        fontSize:11,
        color:'gray'
    },
    chipswrapp:{
        flexWrap: 'wrap',
        width:width(97),
        marginLeft:width(3.68),
        justifyContent:'center'
    },
        img:{
            height:height(25),
            width:width(45)
        },
        startbtnwrapper:{
            bottom:20,
            width:width(100)
          }
})