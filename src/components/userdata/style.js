import { StyleSheet } from "react-native";
import { width, height, totalSize } from "react-native-dimension";
import { colors } from "../../services";
export const styles = StyleSheet.create({
    linearbg: {
        width: width(88),
        borderRadius: 30,
    },
    imageStyle:{
        borderRadius: 30,
    },
    swipeimagstyle: {
        width: width(88),
        height: height(56),
        borderRadius: 30
    },
    username: {
        color: '#fff',
        fontSize: totalSize(2.5),
    },
    bottomWrapper: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(89, 38, 137, 0.4)',
        width: width(88),
        height:height(12),
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    text:{
        fontSize:totalSize(2),
        color:'white'
    },
    leftwrapper:{
        margin:10

    },
    chipswrapp:{
        width:width(50),
        backgroundColor:'red'
    },
    card: {
        height: height(3),
        justifyContent: "center",
        // backgroundColor:colors.appBgColor1,
        margin: 7,
        borderRadius: 15,
        borderWidth:0.88,
        borderColor:'white',
        paddingHorizontal: 5,
        justifyContent:'center',
        justifyContent:'center'
    },
    titlewrapper:{
        width:width(49),
        height:height(6),
        justifyContent:'center'
    
    },
    iconwrapper:{
        width:width(39),
        height:height(6),
        alignItems:'center'
    },
    flatwrapper:{
        flexWrap:'wrap'
    },
    choosetxt:{
        color:'white',
        fontSize:totalSize(1.4)
    }
    
})