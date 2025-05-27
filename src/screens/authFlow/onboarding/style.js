import { StyleSheet,Dimensions} from 'react-native';
import { colors } from '../../../services';
const {width, height} = Dimensions.get('window');

const COLORS = {primary: 'white', white: '#fff'};
export const styles = StyleSheet.create({
   slideimgstyle:{height: '85%', width,borderRadius:28},
   subtitle: {
    fontSize: 13,
    color:'gray'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#1E1E1E'
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 10,
    width: 10,
    backgroundColor: '#C53AA6',
    marginHorizontal: 4,
    borderRadius: 12,
  },
  indicatorstyle: {
    paddingHorizontal: 5,
  },
  textstyle:
  {fontWeight: 'bold', fontSize: 15},
  skiptextstyle:{
    fontWeight: '600',
    fontSize: 15,
  },
  next:{
    fontWeight: 'bold',
    fontSize: 15,
  },
  safewrapper:{
    flex: 1, 
    backgroundColor:'white'
  },
  titlewrapper:{
    height:'18%',
    marginTop:10
  },
  nextmove:{
    backgroundColor:'#C53AA6',
    height: 45,
    width:45,
    borderRadius:25,
    justifyContent:'center',
    alignContent:'center'
  },
  bottom:{
    bottom:20,
    width:'90%',
    marginLeft:20
  }
    ,
  startbtnwrapper:{
    bottom:20
  }
});