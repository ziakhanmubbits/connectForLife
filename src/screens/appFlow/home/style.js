import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";

export const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor:'white',
    alignItems:'center'
  },
  movebackwrapper:{
    width: width(55),
    position: 'absolute',
    height: height(23.7),
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cancelicon:
    {
      width: width(15),
      height: width(15),
      backgroundColor: 'black',
      elevation: 5,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    
  },
    heartwrapper:
      {
        width: width(15),
      height: width(15),
        backgroundColor: '#C53AA6',
        elevation: 5,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
    imgwrapper: {
      width: width - 20,
      height: height - 200,
      position: 'absolute',
      top: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    imagestyle:{
      width: width(100), height: height(100), borderRadius: 20
    },
    rendercoice:{
      width: width(100),
      height: height(100),
      position: 'absolute',
      borderRadius: 20,
    },
    titletxt:{
      position: 'absolute',
      bottom: 20,
      left: 30,
      fontSize: 40,
      color: '#FFF',
    },
    reverwrapper:{
      position: 'absolute',
      flexDirection: 'row',
      width: width(100),
      justifyContent: 'space-evenly',
      alignItems: 'center',
      bottom: 30,
      zIndex: -1,
    },
    // revertouchable:{
    //   // width: width(40),
    //   // height: height(40),
    //   // borderRadius: 35,
    //   // backgroundColor: 'red',
    //   // elevation: 5,
    //   // justifyContent: 'center',
    //   // alignItems: 'center',
    // },
    // choicebtn:{
    //   // width: 70,
    //   // height: 70,
    //   // borderRadius: 35,
    //   // backgroundColor: 'red',
    //   // elevation: 5,
    //   // justifyContent: 'center',
    //   // alignItems: 'center',
    // },
  });
  