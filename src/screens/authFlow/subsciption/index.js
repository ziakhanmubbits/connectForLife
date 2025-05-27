import { View } from 'react-native'
import React from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Headers, Icons } from '../../../components'
import { appImages } from '../../../services'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './style'
import Text from '../../../components/text'
import Discription from '../../../components/discription'
import Spacer from '../../../components/spacer'
import { BasicPlan ,PlatinumPlan} from '../../../services/constants/dummyData'
import { Colored } from '../../../components/buttons'

const Subsription = ({ navigation }) => {
    return (

        <Wrapper isMain>
            <Wrapper isImageBackground source={appImages.subbgimg} >
                <Headers.Primary
                    title={'Subscription'}
                    showBackArrow
                    // containerStyle={{ backgroundColor: "transparent" }}
                />
                <Spacer isBasic/>
                <Discription title="Pricing Plan" des="Lorem ipsum dolor sit amet, consectetur adipiscing elit.                Nunc vulputate libero et velit interdum, ac aliquet" />
             
             <Spacer isBasic/>
               <Wrapper alignItemsCenter>
                <Wrapper flexDirectionRow justifyContentCenter style={styles.bplanwrapper} >
                    {BasicPlan.map((item,index) =>(
                        <Wrapper justifyContentCenter style={styles.subWrapper}>
                            <Text style={styles.bptext}>{item.bplan}</Text>
                            <Text Text style={styles.bpdestext}>{item.Bplandes}</Text>
                            </Wrapper>
                            
                    ))}
                     {BasicPlan.map((item,index) =>(
                    <Wrapper flexDirectionRow justifyContentFlexend alignItemsCenter style={styles.subWrapper} > 
                    <Text style={styles.bptext}>{item.rate}</Text> 
                    </Wrapper>
                      ))}
                </Wrapper>
                </Wrapper>
                <Spacer isBasic/>
                <Wrapper alignItemsCenter>
                <Wrapper flexDirectionRow justifyContentCenter style={styles.Pplanwrapper} >
                    {PlatinumPlan.map((item,index) =>(
                        <Wrapper justifyContentCenter style={styles.subWrapper}>
                            <Text style={styles.bptext}>{item.pplan}</Text>
                            <Text Text style={styles.bpdestext}>{item.Pplandes}</Text>
                            </Wrapper>
                    ))}
                     {PlatinumPlan.map((item,index) =>(
                    <Wrapper flexDirectionRow justifyContentFlexend alignItemsCenter style={styles.subWrapper} > 
                    <Text style={styles.bptext}>{item.rate}</Text> 
                    </Wrapper>
                      ))}
                </Wrapper>
                </Wrapper>
              
            </Wrapper>
            <Buttons.Colored text="PURCHASE" onPress={navigation.navigate('createpass')} style={styles.btnstyle}/>
            <Spacer isBasic/>
        </Wrapper>

    )
}

export default Subsription