import { ScrollView, View } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import Discription from '../../../components/discription'
import Spacer from '../../../components/spacer'
import { Buttons, CheckBoxes } from '../../../components'
import { CheckBox } from 'react-native-elements'
import { Text } from '../../../components'
import { styles } from './style'
import { routes } from '../../../services'
import InputText from '../../../components/inputtext/inputtext'
import { navigateWithParams } from '../../../services/helpingMethods'
const CreatePass = ({ navigation }) => {
  const { navigate } = navigation
  const [text, setText] = React.useState("");
  //ueseffect
  // useEffect(() => {
  //   const { data } = route?.params // const data = route.params.data
  //   const { name } = data // const name = data.name
  //   console.log('NAME', name)
  // }, [])
  return (
    <Wrapper isMain>
      <ScrollView>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Wrapper alignItemsCenter>
          <Discription title="Log In" />
        </Wrapper>
        <Spacer isBasic />
        <InputText
          label="Phone"
        />
        <Spacer isBasic />
        <InputText
          label="Password"
        />

        <Wrapper alignItemsFlexEnd>
          <Text style={styles.forgtxt} onPress={() => navigation.navigate(routes.forgotpass)}>FORGOT PASSWORD?</Text>
        </Wrapper>
        {/* <Buttons.Colored text="FORGOT PASSWORD " onPress={() => navigation.navigate(routes.forgotpass)} /> */}
        {/* <CheckBoxes.Primary  />  */}
        <Wrapper flexDirectionRow alignItemsCenter style={styles.checkwrapper}>
          <CheckBox size={30} color="lightgray" />
          <Text style={styles.texts}>REMEMBER ME </Text>
        </Wrapper>
        <Spacer isDoubleBase />
        <Spacer isDoubleBase />
        <Buttons.Colored text="LOG IN " onPress={() => navigation.navigate(routes.app)} />
        <Spacer isBasic />
        <Wrapper flexDirectionRow alignItemsFlexEnd justifyContentCenter >
          <Text style={styles.crttexts}>{"Don't haver an account? "}</Text>
          <Text isUnderlined style={styles.creattext} onPress={() => navigation.navigate(routes.createpass)}>CREATE ACCOUNT</Text>
        </Wrapper>
      </ScrollView>
    </Wrapper>
  )
}

export default CreatePass