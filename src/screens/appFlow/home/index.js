import {
  Text,
  Animated,
  PanResponder,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import TinderCard from '../../../components/tindercompnents/TinderCard';
import { styles } from './style';
import { appImages } from '../../../services';
import { swipedata } from '../../../services/constants/dummyData';
import { Headers, Wrapper } from '../../../components';
import { Icon } from 'react-native-elements';
import Spacer from '../../../components/spacer';
import TopHeader from '../../../components/header';
import Swiper from '../../../components/tindercompnents/Swiper';
const Home = () => {
  return (
    <Wrapper style={styles.main}>
    <TopHeader />
    <Spacer isDoubleBase/>
      <Swiper/>
    </Wrapper>
  );
};

export default Home;
