import { ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Wrapper from '../../../components/wrapper'
import Discription from '../../../components/discription'
import Spacer from '../../../components/spacer'
import { Buttons, CheckBoxes } from '../../../components'
import { CheckBox, Icon } from 'react-native-elements'
import InputText from '../../../components/inputtext/inputtext'
import { Text } from '../../../components'
import { styles } from './style'
import { routes } from '../../../services'
import { navigateWithParams } from '../../../services/helpingMethods'
const CreatePass = ({ navigation, route }) => {
  const { navigate } = navigation
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  //UseEffect
  // useEffect(() => {
  //   const { data } = route?.params // const data = route.params.data
  //   const { name } = data // const name = data.name
  //   console.log('NAME', name)
  // }, [])
  console.log("hhhhh", route.params)
  return (
    <Wrapper isMain>
      <ScrollView>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Wrapper alignItemsCenter>
          <Discription title="Create Account" />
        </Wrapper>
        <Spacer isBasic />
        <InputText
          label="Name"
        />
        <Spacer isBasic />
        <InputText
          label="Phone"
        />
        <Spacer isBasic />
        <Wrapper flexDirectionRow alignItemsCenter>
          <Icon
         name='eye'
         type='feather'
         style={styles.icon}
        />
        <InputText
          label="Password"
        />
        </Wrapper>
        {/* <CheckBoxes.Primary  />  */}
        <Wrapper flexDirectionRow alignItemsCenter>
          <CheckBox size={35} color="lightgray" 
          disabled ={false}
           value={toggleCheckBox}
           onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.texts}>I agree with</Text>
          <Text style={styles.text} > terms & conditions</Text>
        </Wrapper>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Buttons.Colored text="SIGN UP" onPress={() => navigation.navigate(routes.otpconfirmation, { fotgotPassword: false })} />
        <Spacer isBasic />
        <Wrapper flexDirectionRow alignItemsFlexEnd justifyContentCenter>
          <Text style={styles.logtexts}>{`Already have an Account? `}</Text>
          <Text style={styles.logtext} onPress={() => navigation.navigate(routes.signin)} >LOG IN</Text>
        </Wrapper>
      </ScrollView>
    </Wrapper>
  )
}

export default CreatePass