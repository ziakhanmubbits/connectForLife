import React from 'react';
import {
    SafeAreaView,
    Image,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    Systrace,
} from 'react-native';
import { styles } from './style';
const { width, height } = Dimensions.get('window');
import { slides } from '../../../services/constants/dummyData';
import Wrapper from '../../../components/wrapper';
import Text from '../../../components/text';
import { Colored } from '../../../components/buttons';
import Spacer from '../../../components/spacer';
import { Buttons } from '../../../components';
import { colors, routes } from '../../../services';

import { Icon } from 'react-native-elements';
const Slide = ({ item }) => {
    return (
        <Wrapper justifyContentCenter>
            <Image
                source={item?.image}
                style={styles.slideimgstyle}
            />
            <Wrapper justifyContentFlexS justifyContentCenter style={styles.titlewrapper}>
                <Text style={styles.title}>{item?.title}</Text>
                <Spacer isBasic />
                <Text alignTextCenter style={styles.subtitle}>{item?.subtitle}</Text>
            </Wrapper>
        </Wrapper>
    );
};
const Onboarding = ({ navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref = React.useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };
    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };
    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };
    const Footer = () => {
        return (
            <Wrapper justifyContentSpaceBetween
                style={styles.indicatorstyle}
            >
                {/* Indicator container */}
                <Spacer isDoubleBase />
                {/* Render buttons */}
                <Wrapper  >
                    {currentSlideIndex == slides.length - 1 ? (
                        <Wrapper style={styles.startbtnwrapper}>
                            {/* // {height: 50} spacer */}
                            <Buttons.Colored text="GET STARTED" onPress={() => navigation.navigate(routes.createpass)} />
                        </Wrapper>
                    ) : (
                        <Wrapper flexDirectionRow style={styles.bottom} alignItemsCenter justifyContentSpaceBetween>
                            <TouchableOpacity
                                activeOpacity={0.8}

                                onPress={skip}>
                                <Text
                                    style={styles.skiptextstyle}>
                                    Skip
                                </Text>
                            </TouchableOpacity>
                            <Wrapper flexDirectionRow justifyContentCenter >
                                {/* Render indicator */}
                                {slides.map((_, index) => (
                                    <Wrapper
                                        key={index}
                                        style={[
                                            styles.indicator,
                                            currentSlideIndex == index && {
                                                backgroundColor: colors.appColor1, width: 28,
                                            },
                                        ]}
                                    />
                                ))}
                            </Wrapper>
                            <TouchableOpacity
                                activeOpacity={0.3}
                                onPress={goToNextSlide}>
                                <Wrapper style={styles.nextmove}>
                                    <Icon
                                        name='chevron-thin-right'
                                        type='entypo'
                                        color='white'
                                    />
                                </Wrapper>
                            </TouchableOpacity>
                        </Wrapper>
                    )}
                </Wrapper>
            </Wrapper>
        );
    };
    return (
        //Rendering image slide
        <SafeAreaView style={styles.safewrapper}>
            <StatusBar backgroundColor={colors.appBgColor1} />
            {/* slider flatlist */}
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            {/* bottom footer */}
            <Footer />
        </SafeAreaView>
    );
};
export default Onboarding;