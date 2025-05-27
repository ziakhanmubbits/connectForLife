import { View} from 'react-native'
import React from 'react'
import Wrapper from '../wrapper'
import text from '../text'
import Text from '../text'
import { styles } from './style'
const Discription = ({title,des}) => {
  return (
        <Wrapper alignItemsCenter>
         <Text  alignTextCenter style={styles.title}>{title}</Text>
         <Text alignTextCenter style={styles.des}>{des}</Text>
        </Wrapper>
  )
}

export default Discription