import {View, Text, Image, Dimensions, Animated} from 'react-native';
import React, {useCallback, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TinderChoice from './TinderChoice';
import Wrapper from '../wrapper';
import { styles } from './style';
import UserData from '../userdata';
const {height, width} = Dimensions.get('window');
const TinderCard = ({item, isFirst, swipe, ...rest}) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['-8deg', '0deg', '8deg'],
  });
  // const likeOpacity = swipe.x.interpolate({
  //   inputRange: [10, 100],
  //   outputRange: [0, 1],
  //   extrapolate: 'clamp',
  // });
  // const nopeOpacity = swipe.x.interpolate({
  //   inputRange: [-100, -10],
  //   outputRange: [1, 0],
  //   extrapolate: 'clamp',
  // });
  const tinderSelection = useCallback(() => {
    return (
      <>
      </>
    );
  }, []);
  return (
    <Animated.View
      style={[
        styles.container,
        isFirst && {
          transform: [...swipe.getTranslateTransform(), {rotate: rotate}],
        },
      ]}
      {...rest}>
      <UserData item={item} isMatched={false}/>
      {isFirst && tinderSelection()}
    </Animated.View>
  );
};

export default TinderCard;
