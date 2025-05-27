import { StyleSheet } from "react-native";
import { height,width } from "react-native-dimension";
import { colors } from "../../../services";

export const styles= StyleSheet.create({
    Choosetxt:{
        marginTop:-38,
        fontSize:11,
        color:'gray'
    },
    pertext:{
        color:'black',
        fontSize:18,
        fontWeight:'600',
        marginLeft:width(6.5),
        marginBottom:12,
        marginTop:height(2)
    },
    datawrapper:{
        height:height(3),
        width:width(10),
        backgroundColor:'red'
    },
    card: {
        height: height(3.2),
        justifyContent: "center",
        backgroundColor:colors.appBgColor1,
        margin: 7,
        borderRadius: 15,
        borderWidth:0.66,
        borderColor:'gray',
        paddingHorizontal: 8,
        justifyContent:'center'
    },
    chipswrapp:{
        flexWrap: 'wrap',
        width:width(97),
        marginLeft:width(2)
    },
    startbtnwrapper:{
        bottom:20,
        width:width(100)
      }
})