import { StyleSheet } from 'react-native';
import { fontSize } from '../../../services';
import { height, width } from 'react-native-dimension';
export const width1 ='90%';
export const marginleft1 = 10;
export const styles = StyleSheet.create({
    root: { flex: 1, padding: 20, backgroundColor: '#FAFAFA' },
    title: { textAlign: 'center', fontSize: 20, justifyContent: 'center', alignItems: 'center' },
    codeFieldRoot: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '80%',
      marginLeft:37
    },
    cell: {
      width: width(10.5),
      height: height(5.4),
      fontSize: 24,
      borderWidth: 1,
      borderColor: '#C9C9C9',
      textAlign: 'center',
      borderRadius: 8,
      padding: 3
    },
    focusCell: {
      borderColor: 'gray',
    },
 titetext:{
    fontWeight:'900',
    fontSize:19.5
 },
 codewrsapper:{
    width:width(80),
    marginleft:10
 },
 Title:{
    color:'black',
    fontSize:22,
    fontWeight:'600',
    marginBottom:9
},
codetext:{
 color:'gray',
 fontSize:13
},
codenumber:{
    color:'blue',
    fontSize:13
}, codewrsapper:{
    width:width(90),
    marginleft:10
 },
 restext:{
    color:'blue',
    fontSize:16,
    fontWeight:'500' 
 },
 time:{
fontSize:28,
color:'gray',
fontWeight:'600'
 }
 
});
