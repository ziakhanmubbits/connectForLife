import { View, StyleSheet, Image, } from 'react-native'
import React, { useState } from 'react'
import Wrapper from '../../../components/wrapper'
import { Buttons, Chips, Headers } from '../../../components'
import Text from '../../../components/text'
import { styles } from './style'
import { chooseinterstedata, imagepicker } from '../../../services/constants/dummyData'
import ExpandableChipList from '../../../components/paper-chips'
import { TouchableOpacity } from 'react-native'
import {ImagePicker,launchCamera,launchImageLibrary} from 'react-native-image-picker'
import { Button } from '../../../components/icons'
import { appImages, routes } from '../../../services'
import { takePhotoFromCamera } from '../../../services/helpingMethods'
import Spacer from '../../../components/spacer'
const AddPhotos = ({navigation}) => {
// const [imageSource, setImageSource] = useState(null);
const [profile, setProfile] = useState({ path: '' })
const openCamera = async () => {
    let image = await takePhotoFromCamera()
    RBSheet1.current.close()
    setProfile(image)
}

// const openGallery = async () => {
//     let image = await PickPhotoFromGallery()
//     RBSheet1.current.close()
//     setProfile(image)

// }
    return (
        <Wrapper isMain  >
            <Headers.Primary
                title={'Add Photos'}
                showBackArrow />
            <Text alignTextCenter style={styles.Choosetxt}>Upload at least 4 photos to continue</Text>
            <Spacer isDoubleBase/>
       <Wrapper style={styles.chipswrapp} flexDirectionRow >
                {imagepicker?.map((item, index) => {
                    return (
                        <TouchableOpacity  onPress={openCamera}
                        // onPress={() => selectItem(item, index)}
                        >
                         <Image style={styles.img} source={item.image} />
                        </TouchableOpacity>
                    )
                })
                }
            </Wrapper>
            <Wrapper isAbsolute style={styles.startbtnwrapper}>

                            <Buttons.Colored text="CONTINUE" 
                            onPress={() => navigation.navigate(routes.app)} 
                            />
                        </Wrapper>
        </Wrapper>
    )
}
export default AddPhotos
