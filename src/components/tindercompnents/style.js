import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
 export const styles= StyleSheet.create({
    container:{
        width: width(88),
        height: height(52),
        alignSelf: 'center',
        alignItems:'center',
        position: 'absolute',
        top: height(16.84),
        borderRadius: 10,
      },
      linearbg:{
        width: width(88),
        height: height(100),
        borderRadius: 10,
        position: 'absolute',
      },
      swipeimagstyle:
        {width: width(88), height: height(56), borderRadius: 30},
        username:{
            position:'absolute',
            bottom: 30,
            color: '#fff',
            fontSize: 30,
            marginLeft:width(4.5)
        },
        movebackwrapper:{
          width: width(55),
          position: 'absolute',
          height: height(28),
          bottom: 0,
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
    })