import { View, Text,Image } from 'react-native'
import React from 'react'
import Wrapper from '../wrapper'
import { Icon } from 'react-native-elements'
import { styles } from './style'
import { appImages } from '../../services'
import Spacer from '../spacer'
import { Colored, SearchBar, TextInputs } from '../textInput'


const TopHeader = () => {
  return (
      <Wrapper >
    <Wrapper flexDirectionRow  style={styles.mainhead}>
        <Wrapper>
        <Image source={appImages.logo}/>
        </Wrapper>
        <Wrapper>
         <Icon
          name='bell'
          type='fontisto'
          style={styles.iconstyle}
         />
         <Wrapper style={styles.dot}></Wrapper>
         </Wrapper>
    </Wrapper>
    <Spacer isBasic/>
    <Wrapper style={styles.searchwrapper} >
    <SearchBar  style={styles.srinput}
          placeholder={'Search here'}
          iconNameLeft="search"
          iconTypeLeft="feather"
          iconNameRight='filter'
          iconTypeRight="ionicon"
          secureTextEntry />
    </Wrapper>
          </Wrapper>
    
  )
}

export default TopHeader