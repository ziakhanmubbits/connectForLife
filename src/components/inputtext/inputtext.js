import { View, Text } from 'react-native'
import React from 'react'
import Wrapper from '../wrapper'
import { TextInput } from 'react-native-paper'
import { styles } from './style'
const InputText = ({label,value,onChangeText}) => {
  return (
     <Wrapper alignItemsCenter>
        <TextInput
        mode='outlined'
        label={label}
      style={styles.inputfield}
        />
     </Wrapper>
     
  )
}

export default InputText