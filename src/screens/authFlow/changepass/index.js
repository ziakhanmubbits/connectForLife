import { ScrollView, View} from 'react-native'
import React, { useEffect, useState,useRef } from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers, TextInputs } from '../../../components'
import { Text } from '../../../components'
import { styles } from './style'
import Spacer from '../../../components/spacer'
import Discription from '../../../components/discription'
import { routes } from '../../../services'
import InputText from '../../../components/inputtext/inputtext'
const ForgotPass = ({navigation}) => {
  return (
   <Wrapper isMain background1>
    <Headers.Primary 
    showBackArrow
    />
    <Discription title="Change Password" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit.un       vulputate libero et"/>
    <Spacer isDoubleBase/>
   <InputText
   label="New Password"/>
   <Spacer isBasic/>
    <InputText
   label="Confirm Password"/>
        <Spacer isDoubleBase/>
        <Spacer isDoubleBase/>
        <Wrapper  style={styles.btnstyle} >
    <Buttons.Colored text="CONTINUE" onPress={()=>navigation.navigate(routes.otpconfirmation)}/>
    </Wrapper>
   </Wrapper>

  )
}

export default ForgotPass