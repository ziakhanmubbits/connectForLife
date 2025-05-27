import { View ,Image, ScrollView} from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers, ScrollViews } from '../../../components'
import { appImages, routes } from '../../../services'
import { TouchableOpacity } from 'react-native'
import Text from '../../../components/text'
import InputText from '../../../components/inputtext/inputtext'
import Spacer from '../../../components/spacer'
import { TextInput } from 'react-native-paper'
import { styles } from './style'

const CreateProfile = ({navigation}) => {
  return (
    <Wrapper isMain>
      <ScrollViews.KeyboardAvoiding>
       <Headers.Primary
                    title={'Create Profile'}
                    showBackArrow
                />
                <Wrapper alignItemsCenter>
                  <TouchableOpacity>
                <Image source={appImages.profile}/>
                </TouchableOpacity>
                </Wrapper>
                <Text   style={styles.pertext}>Personal Information </Text>
                <InputText 
                label="Name"
                />
                <Spacer isBasic/>
                <InputText 
                label="Gender"
                />
                <Spacer isBasic/>
                <InputText 
                label="Age"
                />
                <Spacer isBasic/>
                <InputText 
                label="Location"
                />
                <Spacer isBasic/>
                <InputText 
                label="Language"
                />
                <Spacer isBasic/>
               <Wrapper alignItemsCenter>
                <TextInput 
                mode='outlined'
                label="Bio"
                style={styles.bioinput}
                />
                </Wrapper>
                <Spacer isBasic/>
                <Wrapper  >
                <Buttons.Colored text="SAVE"   onPress={()=>navigation.navigate(routes.chooseinterests)} />
                <Spacer isBasic/>
                </Wrapper>
                </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  )
}

export default CreateProfile