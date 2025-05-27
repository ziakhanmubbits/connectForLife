import { View, Image,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../wrapper'
import { styles } from './style'
// import text from '../text'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { chooseinterstedata } from '../../services/constants/dummyData'

import { FlatList } from 'react-native'
const UserData = ({ item, isMatched }) => {
    const [interests, setInterests] = useState(chooseinterstedata)
    const renderMatchedRightSide = () => {
        return (
            <Wrapper flexDirectionRow>
                <Text>1</Text>
                <Text>2</Text>
                <Text>3</Text>
            </Wrapper>
        )
    }
    const renderUnMatchedRightSide = () => {
        return (
            <Wrapper flexDirectionRow style={styles.iconwrapper}>
                <Text style={styles.text}> 2 KM away </Text>
                <Icon
                    name='map-pin'
                    type='feather'
                    size={18}
                    color={'white'}
                />
            </Wrapper>
        )
    }
    return (
        <Wrapper isImageBackground style={styles.linearbg} source={item.image} imageStyle={styles.imageStyle}>
            <Wrapper style={styles.bottomWrapper}>
                <Wrapper flexDirectionRow>
                    <Wrapper style={styles.titlewrapper} flexDirectionRow alignItemsCenter>
                        <Text
                            style={styles.username} >
                            {item.title}
                        </Text>
                    </Wrapper>
                    <Wrapper>
                        {isMatched ? renderMatchedRightSide() : renderUnMatchedRightSide()}
                    </Wrapper>
                </Wrapper>
                <Wrapper>
                    <ScrollView>
                    <FlatList
                    style={styles.flatwrapper}
                        data={interests}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <Wrapper style={styles.card}>
                                <Text style={styles.choosetxt}>{item.name}</Text>
                            </Wrapper>
                        )}
                    />
                    </ScrollView>
                </Wrapper>

                {/* <Wrapper>
                    {isMatched ? renderMatchedRightSide() : renderUnMatchedRightSide()}
                </Wrapper>
                {/* <Wrapper style={styles.chipswrapp} flexDirectionRow > */}

            </Wrapper>
            {/* <Wrapper style={{position:'absolute'}}>
                {console.log(interests.slice(0, 5), "sjsjs")}
                {interests?.slice(0, 5).map((item, index) => {
                    return (
                        <Wrapper style={styles.card}>
                            <Text>{item?.name}</Text>
                        </Wrapper>
                    )
                })
                }
            </Wrapper> */}
        </Wrapper>
    )
}

export default UserData