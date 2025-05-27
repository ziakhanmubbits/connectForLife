// import { useState } from "react/cjs/react.production.min";
import { swipedata } from "../../services/constants/dummyData";
import Wrapper from "../wrapper";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    Text,
    Animated,
    PanResponder,
    TouchableOpacity,
    Image,
} from 'react-native';
import TinderCard from "./TinderCard";
import { styles } from "./style";
import { Icon } from "react-native-elements";


const Swiper = () => {
    const [data, setData] = useState(swipedata);
    useEffect(() => {
        if (!data.length) {
            setData(swipedata);
        }
    }, [data.length]);
    const swipe = useRef(new Animated.ValueXY()).current;
    const rotate = useRef(new Animated.Value(0)).current;

    const panResponser = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, { dx, dy }) => {
            console.log('dx:' + dx + ' dy:' + dy);
            swipe.setValue({ x: dx, y: dy });
        },

        onPanResponderRelease: (_, { dx, dy }) => {
            console.log('released:' + 'dx:' + dx + ' dy:' + dy);
            let direction = Math.sign(dx);
            let isActionActive = Math.abs(dx) > 200;
            if (isActionActive) {
                Animated.timing(swipe, {
                    toValue: { x: 500 * dx, y: dy },
                    useNativeDriver: true,
                    duration: 500,
                }).start(removeCard);
            } else {
                Animated.spring(swipe, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                    friction: 5,
                }).start();
            }
        },
    });
    const removeCard = useCallback(() => {
        setData(prepState => prepState.slice(1));
        swipe.setValue({ x: 0, y: 0 });
    }, [swipe]);

    const handelSelection = useCallback(
        direction => {
            Animated.timing(swipe, {
                toValue: { x: direction * 500, y: 0 },
                useNativeDriver: true,
                duration: 500,
            }).start(removeCard);
        },
        [removeCard],
    );

    return (
        <>
            {data.map((item, index) => {
                let isFirst = index === 0;
                let dragHanlders = isFirst ? panResponser.panHandlers : {};
                return (
                    <TinderCard
                        item={item}
                        rotate={rotate}
                        isFirst={isFirst}
                        swipe={swipe}
                        {...dragHanlders}
                    />
                );
            })
                .reverse()}

            <Wrapper
                style={styles.movebackwrapper}>
                <TouchableOpacity
                    style={styles.cancelicon}
                    onPress={() => {
                        handelSelection(-1);
                    }}>
                    {/* <Image
              source={appImages.cancel}
            style={styles.cancelimg}
          /> */}
                    <Icon
                        name='cross'
                        type='entypo'
                        color={'white'}
                        size={40}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.heartwrapper}
                    onPress={() => {
                        handelSelection(1);
                    }}>
                    <Icon
                        name='heart-sharp'
                        type='ionicon'
                        color={'white'}
                        size={38}
                    />
                </TouchableOpacity>
            </Wrapper>
        </>
    )

}

export default Swiper;