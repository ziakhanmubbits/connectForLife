import { View, StyleSheet, } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Chips, Headers } from '../../../components'
import Text from '../../../components/text'
import { styles } from './style'
import { chooseinterstedata } from '../../../services/constants/dummyData'
import ExpandableChipList from '../../../components/paper-chips'
import { TouchableOpacity } from 'react-native'
import { routes } from '../../../services'
const ChooseInterests = ({navigation}) => {
    const [interests, setInterests] = useState(chooseinterstedata)

    const selectItem = (item, index) => {
        var local_interests = [...interests]
        local_interests[index].selected = !local_interests[index].selected
        // console.log(local_interests)
        setInterests(local_interests)
    }
    return (
        <Wrapper isMain  >
            <Headers.Primary
                title={'Choose Interests'}
                showBackArrow />
            <Text alignTextCenter style={styles.Choosetxt}>Choose at least 5 Interests</Text>
            <Wrapper>
                <Text style={styles.pertext}>Interests </Text>
            </Wrapper>
            <Wrapper style={styles.chipswrapp} flexDirectionRow >
                {interests?.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => selectItem(item, index)}>
                            <Wrapper style={[styles.card, { borderColor: item.selected ? '#C53AA6' : 'gray' }]}>
                                <Text style={{ color: item.selected ? '#C53AA6' : 'gray' }}>{item.name}</Text>
                            </Wrapper>
                        </TouchableOpacity>
                    )
                })
                }
            </Wrapper>
            <Wrapper isAbsolute style={styles.startbtnwrapper}>
                            {/* // {height: 50} spacer */}
                            <Buttons.Colored text="NEXT" 
                            onPress={() => navigation.navigate(routes.addphotos)} 
                            />
                        </Wrapper>
        </Wrapper>
    )
}
export default ChooseInterests
